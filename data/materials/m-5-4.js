/* 5.4 Configuration Management — study material (ISTQB CTFL v4.0.1)
   LOs: FL-5.4.1 (K2) summarize how configuration management supports testing. */

registerMaterials("5.4", {
  title: "Configuration Management",
  los: ["FL-5.4.1"],
  bigPicture:
    "Configuration management (CM) provides a discipline for identifying, controlling and tracking work " +
    "products. For testing, it ensures every testware item and test object is uniquely identified, " +
    "version-controlled, tracked for changes, and related to each other — so testing is repeatable and " +
    "results can always be tied to a known version of what was tested.",
  blocks: [
    {
      type: "cards",
      heading: "Configuration management & testing (flip to reveal)",
      cards: [
        {
          front: "What CM provides",
          back: "A discipline to identify, control and track work products (configuration items) such as test plans, test cases, test scripts, test data, the test environment, and the test object itself.",
        },
        {
          front: "Why testing needs CM",
          back: "Testing must be repeatable and auditable. CM ensures you always know exactly which version of the test object and testware produced a given result, and that nothing changes without being tracked.",
        },
        {
          front: "Configuration item",
          back: "An aggregation of work products managed as a single entity under CM — uniquely identified, version controlled, and tracked for changes throughout the lifecycle.",
        },
        {
          front: "Baseline",
          back: "A reviewed and agreed-upon set of configuration items that serves as a fixed basis for further development and against which changes are managed.",
        },
      ],
    },
    {
      type: "list",
      heading: "How CM supports testing (FL-5.4.1)",
      items: [
        "All configuration items (including test items / the test object) are uniquely identified.",
        "Configuration items are version controlled.",
        "Changes to configuration items are tracked, so the relationships between them are maintained.",
        "All identified documents and software items are referenced unambiguously in the testware.",
        "This keeps the testing process traceable and reproducible — you can re-create the exact conditions of any test run.",
      ],
      mnemonic:
        "CM for testing = IDENTIFY items uniquely, VERSION them, TRACK changes, and REFERENCE them " +
        "unambiguously — so every test result maps to a known version of what was tested.",
    },
    {
      type: "cards",
      heading: "CM in practice (flip to reveal)",
      cards: [
        {
          front: "Set up early",
          back: "To properly support testing, CM should be established and agreed during test planning, so the testware and test environment are under control from the start.",
        },
        {
          front: "Links to traceability",
          back: "CM underpins traceability: by uniquely identifying and version-controlling items, it lets you trace test cases ↔ test object versions ↔ results ↔ test basis.",
        },
        {
          front: "Continuous integration & CM",
          back: "In DevOps/CI environments, automated CM of code, tests and environments is essential so that automated pipelines run against known, controlled versions.",
        },
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "List the core things configuration management ensures for testware.",
          a: "Items are uniquely identified, version controlled, their changes are tracked (keeping relationships intact), and they are referenced unambiguously.",
        },
        {
          q: "Why is CM important for the repeatability of testing?",
          a: "It lets you know exactly which version of the test object and testware produced a result, so the test conditions can be reliably re-created.",
        },
        {
          q: "What is a baseline?",
          a: "A reviewed and agreed set of configuration items that forms a fixed reference point for further work and change control.",
        },
        {
          q: "When should configuration management be established?",
          a: "Early — agreed during test planning, so testware and the environment are controlled from the outset.",
        },
      ],
    },
  ],
});
