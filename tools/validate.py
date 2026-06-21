#!/usr/bin/env python3
"""Structural validator for the question data files.

There is no JS runtime in this environment, so this parses the JS object literal
passed to registerQuestions(...) with a small tolerant parser and checks the
invariants the quiz/exam engine relies on. Run:  python3 tools/validate.py
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
QDIR = os.path.join(HERE, "..", "data", "questions")


class P:
    """Tiny recursive-descent parser for the JS-object subset we author in."""

    def __init__(self, s, i):
        self.s = s
        self.i = i

    def ws(self):
        s = self.s
        while self.i < len(s):
            c = s[self.i]
            if c in " \t\r\n":
                self.i += 1
            elif s[self.i:self.i + 2] == "//":
                while self.i < len(s) and s[self.i] != "\n":
                    self.i += 1
            else:
                break

    def value(self):
        self.ws()
        c = self.s[self.i]
        if c == "{":
            return self.obj()
        if c == "[":
            return self.arr()
        if c in '"\'':
            return self.string()
        if c == "-" or c.isdigit():
            return self.number()
        if self.s.startswith("true", self.i):
            self.i += 4
            return True
        if self.s.startswith("false", self.i):
            self.i += 5
            return False
        if self.s.startswith("null", self.i):
            self.i += 4
            return None
        raise ValueError(f"Unexpected char {c!r} at {self.i}")

    def obj(self):
        self.i += 1  # {
        d = {}
        while True:
            self.ws()
            if self.s[self.i] == "}":
                self.i += 1
                return d
            key = self.key()
            self.ws()
            assert self.s[self.i] == ":", f"expected : at {self.i}"
            self.i += 1
            d[key] = self.value()
            self.ws()
            if self.s[self.i] == ",":
                self.i += 1

    def arr(self):
        self.i += 1  # [
        a = []
        while True:
            self.ws()
            if self.s[self.i] == "]":
                self.i += 1
                return a
            a.append(self.value())
            self.ws()
            if self.s[self.i] == ",":
                self.i += 1

    def key(self):
        self.ws()
        if self.s[self.i] in '"\'':
            return self.string()
        m = re.match(r"[A-Za-z_$][A-Za-z0-9_$]*", self.s[self.i:])
        self.i += m.end()
        return m.group(0)

    def string(self):
        q = self.s[self.i]
        self.i += 1
        out = []
        while True:
            c = self.s[self.i]
            if c == "\\":
                nxt = self.s[self.i + 1]
                out.append({"n": "\n", "t": "\t"}.get(nxt, nxt))
                self.i += 2
            elif c == q:
                self.i += 1
                return "".join(out)
            else:
                out.append(c)
                self.i += 1

    def number(self):
        m = re.match(r"-?\d+(\.\d+)?", self.s[self.i:])
        self.i += m.end()
        t = m.group(0)
        return float(t) if "." in t else int(t)


def extract(js):
    start = js.index("{", js.index("registerQuestions"))
    return P(js, start).value()


def validate_file(path):
    errs = []
    with open(path) as f:
        data = extract(f.read())
    name = os.path.basename(path)
    sets = data.get("sets", [])
    if len(sets) != 3:
        errs.append(f"{name}: expected 3 sets, found {len(sets)}")
    total_q = 0
    for si, s in enumerate(sets):
        qs = s.get("questions", [])
        total_q += len(qs)
        if len(qs) != 20:
            errs.append(f"{name} {s.get('name', si)}: expected 20 questions, found {len(qs)}")
        for qi, q in enumerate(qs):
            loc = f"{name} set{si+1} q{qi+1}"
            opts = q.get("options", [])
            just = q.get("justifications", [])
            if not q.get("q"):
                errs.append(f"{loc}: missing question text")
            if len(opts) not in (4, 5):
                errs.append(f"{loc}: {len(opts)} options (expected 4-5)")
            if len(just) != len(opts):
                errs.append(f"{loc}: {len(just)} justifications vs {len(opts)} options")
            for j, o in enumerate(opts):
                if not isinstance(o, str) or not o.strip():
                    errs.append(f"{loc}: empty option at index {j}")
            for j, jt in enumerate(just):
                if not isinstance(jt, str) or not jt.strip():
                    errs.append(f"{loc}: empty justification at index {j}")
            if not q.get("lo") or not q.get("k"):
                errs.append(f"{loc}: missing lo/k tag")
            typ = q.get("type")
            ans = q.get("answer")
            if typ == "multi":
                if not isinstance(ans, list) or len(ans) < 2:
                    errs.append(f"{loc}: multi answer must be a list of >=2")
                else:
                    for a in ans:
                        if not (0 <= a < len(opts)):
                            errs.append(f"{loc}: answer index {a} out of range")
            else:
                if not isinstance(ans, int) or not (0 <= ans < len(opts)):
                    errs.append(f"{loc}: single answer {ans} out of range")
    return total_q, errs


def main():
    files = sorted(f for f in os.listdir(QDIR) if f.startswith("q-") and f.endswith(".js"))
    grand = 0
    all_errs = []
    for f in files:
        n, errs = validate_file(os.path.join(QDIR, f))
        grand += n
        all_errs += errs
        print(f"  {f}: {n} questions  {'OK' if not errs else 'ISSUES'}")
    print(f"\nTotal questions: {grand}")
    if all_errs:
        print(f"\n{len(all_errs)} issue(s):")
        for e in all_errs:
            print("  -", e)
        sys.exit(1)
    print("All checks passed.")


if __name__ == "__main__":
    main()
