/* 1.4 Test Activities, Testware and Test Roles — study material (ISTQB CTFL v4.0.1)
   LOs: FL-1.4.1 (K2) summarize the test activities and tasks;
        FL-1.4.2 (K2) explain the impact of context on the test process;
        FL-1.4.3 (K2) differentiate the testware that supports test activities;
        FL-1.4.4 (K2) explain the value of maintaining traceability;
        FL-1.4.5 (K2) compare the different roles in testing. */

registerMaterials("1.4", {
  title: "Test Activities, Testware and Test Roles",
  los: ["FL-1.4.1", "FL-1.4.2", "FL-1.4.3", "FL-1.4.4", "FL-1.4.5"],
  bigPicture:
    "Testing is a process made up of a set of activities. There is no single universal test process, " +
    "but common groups of activities exist. The way they are carried out depends on context. Each " +
    "activity produces testware; traceability links testware back to the test basis and objectives; " +
    "and two principal roles — test management and testing — share the work.",
  blocks: [
    {
      type: "cards",
      heading: "Test activities (flip to reveal)",
      cards: [
        {
          front: "Test planning",
          back: "Define test objectives and the approach for meeting them within constraints (e.g. scheduling activities). Produces a test plan.",
        },
        {
          front: "Test monitoring & control",
          back: "Monitoring = ongoing comparison of actual progress against the plan. Control = taking actions needed to meet the objectives. Supported by exit/entry criteria.",
        },
        {
          front: "Test analysis",
          back: "Analyze the test basis to identify testable features and define & prioritize associated test conditions. Answers 'WHAT to test'. Also evaluates the test basis for defects.",
        },
        {
          front: "Test design",
          back: "Elaborate test conditions into test cases and other testware. Answers 'HOW to test'. Identifies coverage items and may need test data and the test environment.",
        },
        {
          front: "Test implementation",
          back: "Create/acquire the testware needed for execution (e.g. test procedures, automated scripts, test data, test environment). Organize test cases into test procedures and suites.",
        },
        {
          front: "Test execution",
          back: "Run the tests, compare actual vs expected results, log outcomes, analyze anomalies, and report. Includes confirmation and regression testing.",
        },
        {
          front: "Test completion",
          back: "Usually at a milestone (release, end of iteration, completed test level). Collect data, finalize and archive testware, evaluate, write a test completion report, identify lessons / improvements.",
        },
      ],
    },
    {
      type: "table",
      heading: "Testware produced by each activity (FL-1.4.3)",
      columns: ["Activity", "Testware produced"],
      rows: [
        ["Planning", "Test plan, test schedule, risk register, entry & exit criteria"],
        ["Monitoring & control", "Test progress reports, control directives, risk information"],
        ["Analysis", "(Prioritized) test conditions, defects in the test basis"],
        ["Design", "(Prioritized) test cases, coverage items, test data requirements, test environment requirements"],
        ["Implementation", "Test procedures, automated test scripts, test suites, test data, test execution schedule"],
        ["Execution", "Test logs, defect reports"],
        ["Completion", "Test completion report, action items for improvement, change requests, finalized testware"],
      ],
    },
    {
      type: "cards",
      heading: "Context & traceability (flip to reveal)",
      cards: [
        {
          front: "Context factors (FL-1.4.2)",
          back: "Stakeholders, team members, business domain, technical factors, project constraints, organizational factors, SDLC, tools. They influence test strategy, techniques, automation, level of detail, etc.",
        },
        {
          front: "Test basis",
          back: "The body of knowledge used as the basis for test analysis and design — e.g. requirements, specifications, design, user stories, risk analyses, the code itself.",
        },
        {
          front: "Traceability (FL-1.4.4)",
          back: "Linking test basis ↔ test conditions ↔ test cases ↔ results, and to test objectives. Enables coverage assessment, impact analysis, audits, meeting IT-governance criteria, and clearer progress/quality reports understandable to stakeholders.",
        },
      ],
    },
    {
      type: "table",
      heading: "Test roles (FL-1.4.5)",
      columns: ["Test management role", "Testing role"],
      rows: [
        ["Overall responsibility for the test process, team and leadership", "Engineering (technical) aspects of testing"],
        ["Writes/maintains the test plan, organizes & monitors, applies control", "Analysis, design, implementation, execution of tests"],
        ["May be performed by a test manager, test lead, or a development/PM lead", "May be performed by testers, but roles can be taken by anyone (e.g. business analysts, developers, ops)"],
        ["Focus: managing the activities", "Focus: doing the activities"],
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "Which activity answers 'WHAT to test' and which answers 'HOW to test'?",
          a: "Test analysis defines test conditions (WHAT to test); test design elaborates them into test cases (HOW to test).",
        },
        {
          q: "Name three benefits of good traceability.",
          a: "Any three of: assessing coverage, impact analysis of changes, auditing, meeting IT-governance criteria, and making test reports understandable to stakeholders.",
        },
        {
          q: "When does test completion typically occur and what does it produce?",
          a: "At milestones (release, end of iteration, completed test level). It finalizes/archives testware and produces a test completion report with lessons learned.",
        },
        {
          q: "Monitoring vs control — what's the difference?",
          a: "Monitoring is gathering information and comparing actual progress to the plan; control is taking the actions needed to meet test objectives.",
        },
      ],
    },
  ],
});
