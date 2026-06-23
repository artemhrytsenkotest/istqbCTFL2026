/* 5.1 Test Planning — study material (ISTQB CTFL v4.0.1)
   LOs: FL-5.1.1 (K2) exemplify the purpose and content of a test plan;
        FL-5.1.2 (K1) recognize how a tester adds value to iteration & release planning;
        FL-5.1.3 (K2) compare and contrast entry criteria and exit criteria;
        FL-5.1.4 (K3) use estimation techniques to estimate the testing effort;
        FL-5.1.5 (K3) apply test case prioritization;
        FL-5.1.6 (K2) explain the testing quadrants and their relation to levels and types. */

registerMaterials("5.1", {
  title: "Test Planning",
  los: ["FL-5.1.1", "FL-5.1.2", "FL-5.1.3", "FL-5.1.4", "FL-5.1.5", "FL-5.1.6"],
  bigPicture:
    "A test plan describes the objectives, resources and processes for a test project. Planning is " +
    "continuous, not a one-off. Testers add value to iteration and release planning; entry and exit " +
    "criteria control when testing starts and stops; estimation predicts effort; prioritization decides " +
    "run order; and the testing quadrants map test types/levels to business- vs technology-facing goals.",
  blocks: [
    {
      type: "cards",
      heading: "The test plan (FL-5.1.1) — flip to reveal",
      cards: [
        {
          front: "Purpose of a test plan",
          back: "Documents the objectives of testing and the means and schedule to achieve them, within constraints. Helps verify objectives are met. Writing it is valuable in itself — it makes the team think through challenges.",
        },
        {
          front: "Typical content",
          back: "Context (scope, objectives, basis); assumptions & constraints; stakeholders (roles, responsibilities); communication; risk register; test approach (levels, types, techniques, deliverables, entry/exit criteria, independence, environment, tools); budget & schedule.",
        },
        {
          front: "Planning is continuous",
          back: "Test planning is performed at the start and updated as the project progresses. It happens for the whole project and for individual levels/iterations.",
        },
      ],
    },
    {
      type: "cards",
      heading: "Iteration/release planning & criteria (flip to reveal)",
      cards: [
        {
          front: "Tester value in planning (FL-5.1.2)",
          back: "Release planning: tester helps write testable user stories, participates in risk analysis, determines test scope/effort, plans testing for the release. Iteration planning: tester participates in detailed risk analysis, determines testability, breaks stories into tasks (esp. testing tasks), estimates test effort, identifies/refines functional & non-functional aspects.",
        },
        {
          front: "Entry criteria (FL-5.1.3)",
          back: "The preconditions that must be met before an activity can START. E.g. availability of testable requirements/user stories/test cases, test environment, tools, test data. Also called 'definition of ready' in agile.",
        },
        {
          front: "Exit criteria (FL-5.1.3)",
          back: "The conditions that must be met before an activity can be declared FINISHED. E.g. planned tests executed, coverage level reached, number of unresolved defects below an agreed limit, estimated remaining defects low enough. Agile: 'definition of done'.",
        },
      ],
    },
    {
      type: "table",
      heading: "Estimation techniques (FL-5.1.4)",
      columns: ["Technique", "How it works"],
      rows: [
        ["Estimation based on ratios (metrics-based)", "Use figures/ratios from past projects or typical industry data (e.g. test-to-dev effort ratio) applied to the current project."],
        ["Extrapolation (metrics-based)", "Use measurements made early in the current project and extrapolate the trend to estimate remaining effort (e.g. once a few iterations are done)."],
        ["Wideband Delphi (expert-based)", "Experts estimate individually, then results are gathered, discussed and re-estimated until consensus. Planning Poker is a common agile variant."],
        ["Three-point estimation (expert-based)", "Combine optimistic (a), most likely (m) and pessimistic (b) estimates: E = (a + 4m + b) / 6; the spread also gives a measurement error."],
      ],
    },
    {
      type: "cards",
      heading: "Prioritization & quadrants (flip to reveal)",
      cards: [
        {
          front: "Test case prioritization (FL-5.1.5)",
          back: "Strategies for ordering test execution: RISK-based (run tests for highest-risk items first), COVERAGE-based (order to reach coverage fastest, e.g. greedy), and REQUIREMENTS-based (run tests for the most important requirements first). Ideally order tests by priority, but dependencies may force changes.",
        },
        {
          front: "Testing quadrants (FL-5.1.6)",
          back: "Brian Marick's model grouping test levels & types along two axes: business-facing vs technology-facing, and supporting the team (guiding development) vs critiquing the product (finding shortcomings).",
        },
        {
          front: "Q1 — Tech-facing, support team",
          back: "Component & component integration tests; usually automated. (e.g. unit tests, TDD)",
        },
        {
          front: "Q2 — Business-facing, support team",
          back: "Functional tests, examples, user-story tests, prototypes, simulations; manual or automated. (guides what to build)",
        },
        {
          front: "Q3 — Business-facing, critique product",
          back: "Exploratory testing, usability testing, user acceptance testing; usually manual. (real-user perspective)",
        },
        {
          front: "Q4 — Tech-facing, critique product",
          back: "Non-functional / smoke tests: performance, load, security, reliability; usually automated with tools.",
        },
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "Entry vs exit criteria — what's the difference?",
          a: "Entry criteria are preconditions to START an activity (definition of ready); exit criteria are conditions to consider it FINISHED (definition of done).",
        },
        {
          q: "Compute a three-point estimate for a=4, m=10, b=22 days.",
          a: "E = (a + 4m + b)/6 = (4 + 40 + 22)/6 = 66/6 = 11 days.",
        },
        {
          q: "Name the three test-case prioritization strategies.",
          a: "Risk-based, coverage-based, and requirements-based prioritization.",
        },
        {
          q: "What two axes define the testing quadrants?",
          a: "Business-facing vs technology-facing, and supporting the team (guide development) vs critiquing the product (find shortcomings).",
        },
      ],
    },
  ],
});
