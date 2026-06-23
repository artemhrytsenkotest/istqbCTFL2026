/* 4.4 Experience-based Test Techniques — study material (ISTQB CTFL v4.0.1)
   LOs: FL-4.4.1 (K2) explain error guessing;
        FL-4.4.2 (K2) explain exploratory testing;
        FL-4.4.3 (K2) explain checklist-based testing. */

registerMaterials("4.4", {
  title: "Experience-based Test Techniques",
  los: ["FL-4.4.1", "FL-4.4.2", "FL-4.4.3"],
  bigPicture:
    "Experience-based techniques use the tester's skill, intuition and prior experience to find defects " +
    "that systematic black-box and white-box techniques may miss. They are effective and flexible but " +
    "their coverage is hard to measure and varies with the tester. The three covered are error guessing, " +
    "exploratory testing, and checklist-based testing.",
  blocks: [
    {
      type: "cards",
      heading: "The three techniques (flip to reveal)",
      cards: [
        {
          front: "Error guessing (FL-4.4.1)",
          back: "Anticipate the occurrence of errors, defects and failures based on the tester's knowledge: how the app worked before, what kinds of errors developers tend to make, and failures in similar apps. A methodical version is fault attack — make a list of possible mistakes and design tests to expose them.",
        },
        {
          front: "Exploratory testing (FL-4.4.2)",
          back: "Tests are designed, executed and evaluated more or less simultaneously while the tester learns the test object. Test design and execution happen together; learning feeds new tests. Often structured as session-based testing within a time-box, using test charters; results captured in session sheets.",
        },
        {
          front: "Checklist-based testing (FL-4.4.3)",
          back: "Testers design, implement and execute tests to cover the items on a checklist. The checklist is built from experience, knowledge of what's important to the user, and an understanding of why/how software fails. Items are often phrased as questions; each should be verifiable.",
        },
      ],
    },
    {
      type: "table",
      heading: "When & how they help",
      columns: ["Technique", "Best when...", "Watch out for..."],
      rows: [
        ["Error guessing", "Tester is experienced with similar systems / typical developer mistakes", "Relies heavily on tester skill; coverage not systematic"],
        ["Exploratory testing", "Specifications are sparse, time is limited, or to complement systematic techniques", "Hard to measure & reproduce; needs skilled testers; use charters to give structure"],
        ["Checklist-based", "You want repeatable coverage of known-important areas without detailed test cases", "Checklists need maintenance & updating; high-level items can be interpreted differently by different testers"],
      ],
    },
    {
      type: "cards",
      heading: "Exploratory testing structure (flip to reveal)",
      cards: [
        {
          front: "Test charter",
          back: "A short statement of the scope, goals and ideas for a test session — gives direction without prescribing exact steps.",
        },
        {
          front: "Session-based testing",
          back: "Exploratory testing conducted within a defined time-box (a session). The tester works to a charter and records findings.",
        },
        {
          front: "Session sheet",
          back: "Documents what was done and found in a session — supporting reporting and (some) reproducibility for an otherwise unscripted approach.",
        },
        {
          front: "Pairs well with...",
          back: "Other techniques and reactive approaches. Exploratory testing is often more effective when combined with systematic techniques rather than used alone.",
        },
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "What is the methodical form of error guessing called and what does it involve?",
          a: "A fault attack: creating a list of possible errors, defects and failures, then designing tests that attempt to expose them.",
        },
        {
          q: "What is distinctive about the timing of activities in exploratory testing?",
          a: "Test design, execution and evaluation happen (more or less) at the same time, while the tester learns the test object — rather than designing all tests up front.",
        },
        {
          q: "Where do checklist items come from?",
          a: "From experience, knowledge of what matters to the user, and an understanding of why and how software fails.",
        },
        {
          q: "Why are experience-based techniques hard to assess for coverage?",
          a: "They rely on tester knowledge and intuition rather than a formal model, so coverage is not systematically measurable and varies between testers.",
        },
      ],
    },
  ],
});
