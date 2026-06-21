# ISTQB CTFL v4.0.1 — Exam Prep

A dependency-free web app for practising the **ISTQB Certified Tester Foundation
Level (CTFL) v4.0.1** exam. Practise per syllabus subchapter or take a full mock
exam. All questions are authored from the v4.0.1 syllabus in the style of the
official ISTQB sample exams (Learning-Objective and K-level tags, single- and
multi-select questions, and a per-option justification for every answer).

## Running it

No build step and no install — it's plain HTML/CSS/JS.

- **Easiest:** double-click `index.html` to open it in your browser.
- **Or serve it** (any static server works):
  ```bash
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

Progress (best scores) and your light/dark preference are stored in the
browser's `localStorage`.

## Features

- **Per-subchapter quizzes** — each subchapter offers 3 sets of 20 questions.
  Answer all 20, then submit to see your score and a full per-option
  explanation for every question you missed.
- **Mock exam** — 40 random questions, 75-minute countdown with auto-submit,
  and the real 65% (26/40) pass mark, followed by a full review.
- **Progress tracking** — best score per set and per mock exam, plus a
  "focus areas" list of sets below 65%.
- **Dark mode** toggle.

## Content status

| Chapter | Subchapters | Status |
|---|---|---|
| 1. Fundamentals of Testing | 1.1–1.5 | ✅ Authored (300 questions) |
| 2. Testing Throughout the SDLC | 2.1–2.3 | ✅ Authored (180 questions) |
| 3–6 | 3.1–6.2 | Scaffolded ("coming soon") |

Each authored subchapter has 3 sets × 20 questions = 60 questions
(**480 questions** authored so far).

## Project layout

```
index.html                 app shell + script includes
css/styles.css             layout + light/dark theme
js/util.js                 shuffling, answer helpers
js/data.js                 syllabus tree + question bank registrar
js/storage.js              localStorage (scores, theme)
js/render.js               shared question + review rendering
js/quiz.js                 per-subchapter quiz engine
js/exam.js                 mock exam engine
js/app.js                  router, home, subchapter screens, theme
data/questions/q-1-1.js …  authored question content (Chapter 1)
tools/validate.py          structural validator for question files
```

## Adding more content

1. Create `data/questions/q-<ch>-<sub>.js` calling `registerQuestions("2.1", {...})`
   following the schema in the existing files (3 sets of 20 questions; each
   question has `lo`, `k`, `type`, `q`, `options`, `answer`, `justifications`).
2. Add a `<script src="data/questions/q-2-1.js"></script>` line to `index.html`.
3. Run the validator:
   ```bash
   python3 tools/validate.py
   ```

The subchapter automatically switches from "coming soon" to playable, and its
questions are included in the mock-exam pool.
