/* 6.1 Tool Support for Testing — study material (ISTQB CTFL v4.0.1)
   LOs: FL-6.1.1 (K2) explain how different types of test tools support testing. */

registerMaterials("6.1", {
  title: "Tool Support for Testing",
  los: ["FL-6.1.1"],
  bigPicture:
    "Test tools support and enhance testing activities — but they support testers, they don't replace " +
    "the thinking. Different tool categories help with different activities across the test process, " +
    "from managing the work, through static analysis and design, to executing tests and measuring " +
    "coverage and performance.",
  blocks: [
    {
      type: "cards",
      heading: "How tools help (flip to reveal)",
      cards: [
        {
          front: "What test tools do",
          back: "Support test activities — e.g. by automating repetitive tasks, handling large data volumes, improving consistency and reproducibility, or providing measurements (coverage, performance) that are impractical to gather by hand.",
        },
        {
          front: "Tools support, not replace",
          back: "Tools assist testers; they do not replace the human skills of analysis, design and judgement. A tool is only as good as the process and people using it.",
        },
        {
          front: "Across the whole process",
          back: "Different tool types support different parts of the test process: management, static testing, design & implementation, execution & coverage, and non-functional/specialized needs.",
        },
      ],
    },
    {
      type: "table",
      heading: "Categories of test tools (FL-6.1.1)",
      columns: ["Tool category", "What it supports / examples"],
      rows: [
        ["Test management & ALM", "Managing the test process, requirements, traceability, results; application lifecycle management."],
        ["Configuration management", "Version control, baselines, tracking — supporting reproducible testing."],
        ["Defect management", "Logging, tracking and managing defects through their lifecycle."],
        ["Static testing tools", "Static analysis tools, review-support tools — finding defects without execution."],
        ["Test design & implementation", "Generating test cases, test data, and test procedures/scripts."],
        ["Test execution & coverage", "Test execution/automation tools (run scripted tests, compare results), unit-test frameworks, coverage measurement tools."],
        ["Non-functional testing", "Performance/load testing tools, monitoring tools, security testing tools, and other specialized tools."],
      ],
    },
    {
      type: "cards",
      heading: "Common tool ideas (flip to reveal)",
      cards: [
        {
          front: "Coverage tools",
          back: "Measure the percentage of structural elements (e.g. statements, branches) exercised by a test suite — giving an objective coverage figure.",
        },
        {
          front: "Test execution / automation tools",
          back: "Run tests automatically, supply inputs, capture outputs and compare actual vs expected. Valuable for repetitive regression testing.",
        },
        {
          front: "Performance & monitoring tools",
          back: "Generate load and measure response times, throughput and resource use; monitoring tools observe system behavior during testing or in production.",
        },
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "Do test tools replace testers?",
          a: "No — tools support and enhance testing activities, but the analytical, design and judgement work remains with the tester.",
        },
        {
          q: "Which kind of tool would you use to measure statement/branch coverage?",
          a: "A coverage measurement tool (a test execution/coverage category tool).",
        },
        {
          q: "Name two tool categories that support testing across the process.",
          a: "Any two of: test management/ALM, configuration management, defect management, static testing, test design & implementation, test execution & coverage, performance/non-functional tools.",
        },
      ],
    },
  ],
});
