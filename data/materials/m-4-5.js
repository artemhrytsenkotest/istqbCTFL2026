/* 4.5 Collaboration-based Test Approaches — study material (ISTQB CTFL v4.0.1)
   LOs: FL-4.5.1 (K2) explain how to write user stories collaboratively;
        FL-4.5.2 (K2) classify the different options for writing acceptance criteria;
        FL-4.5.3 (K3) use acceptance test-driven development (ATDD) to derive test cases. */

registerMaterials("4.5", {
  title: "Collaboration-based Test Approaches",
  los: ["FL-4.5.1", "FL-4.5.2", "FL-4.5.3"],
  bigPicture:
    "Beyond finding defects, testing can help PREVENT them through collaboration. Writing user stories " +
    "together, agreeing clear acceptance criteria, and using ATDD to derive tests before coding all " +
    "build shared understanding early — so the team builds the right thing and bakes quality in from " +
    "the start.",
  blocks: [
    {
      type: "cards",
      heading: "Collaborative user stories (FL-4.5.1) — flip to reveal",
      cards: [
        {
          front: "What is a user story?",
          back: "A short description of a feature from a user's viewpoint. Written collaboratively by the THREE roles ('three amigos'): business (what problem to solve), development (how to solve it), and testing (what could go wrong).",
        },
        {
          front: "The 3 C's",
          back: "Card (the written story / token for the requirement), Conversation (explains how it will be used — can be documented or verbal), and Confirmation (the acceptance criteria).",
        },
        {
          front: "INVEST criteria",
          back: "Good user stories are Independent, Negotiable, Valuable, Estimable, Small, and Testable. Testers especially help make stories Testable.",
        },
        {
          front: "Why collaborate?",
          back: "Different viewpoints catch ambiguities, missing cases and unrealistic expectations early — preventing defects rather than detecting them later.",
        },
      ],
    },
    {
      type: "cards",
      heading: "Acceptance criteria (FL-4.5.2) — flip to reveal",
      cards: [
        {
          front: "What are acceptance criteria?",
          back: "The conditions a user story must meet to be accepted by stakeholders. They define the scope of the story, reach consensus, describe positive and negative scenarios, and serve as a basis for acceptance tests.",
        },
        {
          front: "Format 1: Scenario-oriented (Given/When/Then)",
          back: "The BDD style. 'Given' a context/precondition, 'When' an event/action occurs, 'Then' an expected outcome. Maps naturally to test cases.",
        },
        {
          front: "Format 2: Rule-oriented",
          back: "A (bulleted) list of rules, or a verification list, that the story must satisfy. Each item describes a condition the system must meet.",
        },
        {
          front: "Either way...",
          back: "Acceptance criteria should be clear, testable and agreed by the three roles, and form the basis for deriving acceptance tests.",
        },
      ],
    },
    {
      type: "list",
      heading: "ATDD: deriving tests (FL-4.5.3)",
      items: [
        "ATDD = Acceptance Test-Driven Development: a test-first approach where acceptance tests are created during analysis, BEFORE the user story is implemented.",
        "Step 1 — The whole team (the three roles) collaborates to write the acceptance tests, gaining a shared understanding of the story and catching discrepancies early.",
        "Step 2 — Design the tests from the acceptance criteria. Start with positive tests confirming correct behavior without exceptions, then add negative tests, and cover non-functional characteristics where relevant.",
        "Step 3 — Tests should be expressed so they can be understood by all stakeholders (often using a Given/When/Then style), and are typically automated.",
        "Step 4 — The acceptance tests act as executable requirements; the story is 'done' when its acceptance tests pass.",
      ],
      mnemonic:
        "ATDD: agree the acceptance tests FIRST (before coding), starting with positive cases, then " +
        "negative and non-functional — written so everyone understands them, then automate.",
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "Who are the 'three amigos' and what does each contribute to a user story?",
          a: "Business (defines the problem to solve), development (decides how to build it), and testing (asks what could go wrong). Together they write the story.",
        },
        {
          q: "What are the 3 C's of a user story?",
          a: "Card (the written story), Conversation (how the feature will be used), and Confirmation (the acceptance criteria).",
        },
        {
          q: "Name the two common formats for acceptance criteria.",
          a: "Scenario-oriented (Given/When/Then, the BDD style) and rule-oriented (a bulleted list/verification list of rules).",
        },
        {
          q: "In ATDD, when are the acceptance tests written, and which tests come first?",
          a: "They are written during analysis, before the story is implemented. Positive tests (confirming correct behavior without exceptions) are designed first, then negative and non-functional tests.",
        },
      ],
    },
  ],
});
