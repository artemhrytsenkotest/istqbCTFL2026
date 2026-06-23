/* 4.3 White-Box Test Techniques — study material (ISTQB CTFL v4.0.1)
   LOs: FL-4.3.1 (K2) explain statement testing;
        FL-4.3.2 (K2) explain branch testing;
        FL-4.3.3 (K2) explain the value of white-box testing. */

registerMaterials("4.3", {
  title: "White-Box Test Techniques",
  los: ["FL-4.3.1", "FL-4.3.2", "FL-4.3.3"],
  bigPicture:
    "White-box (structure-based) techniques derive tests from the internal structure of the code. The " +
    "syllabus focuses on two control-flow measures: statement testing (exercise the executable " +
    "statements) and branch testing (exercise the decision outcomes). Coverage tells you what " +
    "proportion of the structure your tests actually exercised.",
  blocks: [
    {
      type: "cards",
      heading: "Statement & branch testing (flip to reveal)",
      cards: [
        {
          front: "Statement testing (FL-4.3.1)",
          back: "Coverage items = executable statements. Tests are designed to execute statements. Statement coverage = (statements executed ÷ total executable statements) × 100%.",
        },
        {
          front: "100% statement coverage",
          back: "Means every executable statement has been run at least once. It does NOT guarantee every decision outcome is tested — e.g. an 'if' with no 'else' can reach 100% statement coverage without ever taking the false branch.",
        },
        {
          front: "Branch testing (FL-4.3.2)",
          back: "A branch = a control-flow transfer for a decision outcome (e.g. the true/false edges of an if, the cases of a switch, loop entry/exit). Branch coverage = (branches exercised ÷ total branches) × 100%.",
        },
        {
          front: "100% branch coverage",
          back: "Exercises every decision outcome (both true and false of each decision). 100% branch coverage GUARANTEES 100% statement coverage, but not vice versa. Branch coverage is the stronger of the two.",
        },
      ],
    },
    {
      type: "table",
      heading: "Statement vs Branch coverage",
      columns: ["Statement coverage", "Branch coverage"],
      rows: [
        ["Counts executable statements run", "Counts decision outcomes (branches) exercised"],
        ["Weaker measure", "Stronger measure"],
        ["100% statement ⇏ 100% branch", "100% branch ⇒ 100% statement"],
        ["Can miss untaken empty branches (if without else)", "Forces both outcomes of every decision"],
      ],
    },
    {
      type: "list",
      heading: "Value of white-box testing (FL-4.3.3)",
      items: [
        "Considers the ENTIRE software implementation, so defects can be found even when the specification is vague, out of date, or incomplete.",
        "Reveals issues invisible to black-box testing — e.g. dead (unreachable) code, code that does not match the design, and code-level vulnerabilities.",
        "Coverage gives an objective measure of how thoroughly the structure has been exercised — a measurable basis for confidence.",
        "Helps reason about what has NOT yet been tested, guiding additional test design.",
        "Limitation: high structure coverage does not mean the software is complete or correct — it can't reveal missing functionality (something specified but never implemented can't be covered).",
      ],
      mnemonic:
        "White-box value: sees ALL the code (even where specs are weak), measures coverage objectively, " +
        "and exposes dead code / structural defects. But it can't catch a missing requirement.",
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "If you achieve 100% branch coverage, what statement coverage do you have?",
          a: "100% statement coverage — branch coverage subsumes statement coverage. The reverse does not hold.",
        },
        {
          q: "Why can 100% statement coverage still miss a defect?",
          a: "It may not exercise every decision outcome. For example, an 'if' without an 'else' can run all its statements without ever testing the false path.",
        },
        {
          q: "Name one defect type white-box testing finds that black-box testing typically can't.",
          a: "Dead/unreachable code (or code that doesn't match the design, or code-level vulnerabilities).",
        },
        {
          q: "What is a key limitation of white-box coverage?",
          a: "It can't detect missing functionality — anything specified but never implemented has no code to cover, so high coverage doesn't prove completeness or correctness.",
        },
      ],
    },
  ],
});
