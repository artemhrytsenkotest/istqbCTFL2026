/* 1.1 What is Testing? — study material (ISTQB CTFL v4.0.1)
   LOs: FL-1.1.1 (K1) identify typical test objectives;
        FL-1.1.2 (K2) differentiate testing from debugging. */

registerMaterials("1.1", {
  title: "What is Testing?",
  los: ["FL-1.1.1", "FL-1.1.2"],
  bigPicture:
    "Testing is a set of activities that both evaluate the quality of software work products and " +
    "help find defects — so it reduces the risk of failures in operation. It is much more than just " +
    "running the software: it is a largely intellectual activity that also covers planning, analysis, " +
    "design, and static checks.",
  blocks: [
    {
      type: "cards",
      heading: "Key concepts (flip to reveal)",
      cards: [
        {
          front: "Test object",
          back: "The work product being tested — e.g. requirements, user stories, designs, or code. Anything tested is a test object.",
        },
        {
          front: "Verification vs Validation",
          back: "Verification = does it meet the specified requirements? (built it right). Validation = does it meet users' and stakeholders' actual needs? (built the right thing). Testing involves BOTH.",
        },
        {
          front: "Dynamic vs Static testing",
          back: "Dynamic testing executes the software (uses test techniques to derive cases). Static testing does NOT execute it — it includes reviews and static analysis.",
        },
        {
          front: "Testing is intellectual work",
          back: "Testing is not purely mechanical execution. It requires specialized knowledge, analytical skills, critical thinking, and systems thinking.",
        },
        {
          front: "Testing ≠ just executing tests",
          back: "A common misconception. Execution is only one activity; testing must align with the whole SDLC and includes planning, analysis, design, and reporting.",
        },
      ],
    },
    {
      type: "list",
      heading: "Typical test objectives (FL-1.1.1)",
      items: [
        "Evaluating work products such as requirements, user stories, designs, and code",
        "Causing failures and finding defects",
        "Ensuring required coverage of a test object",
        "Reducing the risk level of inadequate software quality",
        "Verifying whether specified requirements have been fulfilled",
        "Verifying compliance with contractual, legal, and regulatory requirements",
        "Providing information to stakeholders to support informed decisions",
        "Building confidence in the quality of the test object",
        "Validating whether the test object is complete and works as stakeholders expect",
      ],
      mnemonic:
        "Test objectives split into three jobs: EVALUATE (work products, coverage, requirements, compliance), " +
        "FIND (cause failures, find defects, reduce risk), and INFORM (give info, build confidence, validate for stakeholders).",
    },
    {
      type: "table",
      heading: "Testing vs Debugging (FL-1.1.2)",
      columns: ["Testing", "Debugging"],
      rows: [
        ["Triggers failures (dynamic) or directly finds defects (static)", "Deals with the defects already found"],
        ["A QA/quality-control activity", "A development activity (not a testing activity)"],
        ["Answers: is there a problem?", "Answers: what causes it, and how do we fix it?"],
        ["Performed by testers", "Typically performed by developers"],
      ],
    },
    {
      type: "cards",
      heading: "The debugging process (flip to reveal)",
      cards: [
        {
          front: "3 steps of debugging",
          back: "1) Reproduction of the failure, 2) Diagnosis (finding the defect), 3) Fixing the defect. (Only needed when a failure was triggered by dynamic testing.)",
        },
        {
          front: "Confirmation testing",
          back: "After a fix, re-running the test that originally failed to check the defect is actually resolved. Preferably done by the same person who ran the initial test.",
        },
        {
          front: "Regression testing",
          back: "Testing other parts of the test object to check that the fix did not introduce new failures elsewhere.",
        },
        {
          front: "Static testing & debugging",
          back: "When static testing finds a defect, no reproduction or diagnosis is needed — static testing finds defects directly and cannot cause failures.",
        },
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "In one sentence, how does testing differ from debugging?",
          a: "Testing triggers failures or finds defects and evaluates quality; debugging then locates the cause of a found defect and fixes it (a development activity, not testing).",
        },
        {
          q: "What are the three typical steps of the debugging process?",
          a: "Reproduction of the failure, diagnosis (finding the defect), and fixing the defect.",
        },
        {
          q: "Confirmation testing vs regression testing — what's the difference?",
          a: "Confirmation testing re-checks that the original defect is fixed; regression testing checks the fix didn't break other parts of the test object.",
        },
        {
          q: "Verification or validation: 'the system meets users' actual needs in its operational environment'?",
          a: "Validation. (Verification is about meeting the specified requirements.)",
        },
      ],
    },
  ],
});
