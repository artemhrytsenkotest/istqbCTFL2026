/* 5.3 Test Monitoring, Test Control and Test Completion — study material (ISTQB CTFL v4.0.1)
   LOs: FL-5.3.1 (K1) recall metrics used for testing;
        FL-5.3.2 (K2) summarize the purposes, content and audiences for test reports;
        FL-5.3.3 (K2) exemplify how to communicate the status of testing. */

registerMaterials("5.3", {
  title: "Test Monitoring, Control and Completion",
  los: ["FL-5.3.1", "FL-5.3.2", "FL-5.3.3"],
  bigPicture:
    "Once testing is under way, the team must keep it on track. Monitoring gathers metrics on progress; " +
    "control takes corrective action; and completion wraps things up at a milestone. Test reports turn " +
    "these metrics into communication for different audiences — progress reports during testing and " +
    "completion reports at the end.",
  blocks: [
    {
      type: "cards",
      heading: "Monitoring, control & completion (flip to reveal)",
      cards: [
        {
          front: "Test monitoring",
          back: "Gathering information about testing to assess progress against the plan and exit criteria — e.g. measuring against coverage, schedule, budget. Provides the data for control and reporting.",
        },
        {
          front: "Test control",
          back: "Taking guiding/corrective actions based on monitoring information to keep testing on track to meet objectives — e.g. re-prioritizing tests, changing the schedule, adjusting entry/exit criteria, adding resources.",
        },
        {
          front: "Test completion",
          back: "Collects data from completed activities, consolidates experience, finalizes testware, and produces a test completion report. Happens at milestones (release, end of iteration, end of a test level).",
        },
      ],
    },
    {
      type: "table",
      heading: "Categories of test metrics (FL-5.3.1)",
      columns: ["Metric category", "Examples"],
      rows: [
        ["Project progress", "Task completion, resource usage, test effort spent"],
        ["Test progress", "Test case implementation progress, test environment preparation progress, number of test cases run/not run, passed/failed"],
        ["Product quality", "Availability, response time, mean time to failure (reliability/non-functional measures)"],
        ["Defect metrics", "Number of defects found/fixed, defect density, defect detection percentage, failure rate"],
        ["Risk metrics", "Residual risk level"],
        ["Coverage metrics", "Requirements coverage, code coverage"],
        ["Cost metrics", "Cost of testing, including the cost-benefit of finding the next defect or of running the next test"],
      ],
    },
    {
      type: "cards",
      heading: "Test reports (FL-5.3.2) — flip to reveal",
      cards: [
        {
          front: "Purpose of test reporting",
          back: "To summarize and communicate test information during and after testing — supporting ongoing control decisions and final evaluation.",
        },
        {
          front: "Test progress report",
          back: "Produced during a test activity (often periodically). Supports ongoing CONTROL. Content: status of test activities & progress, impediments/risks, planned testing for the next period, quality of the test object.",
        },
        {
          front: "Test completion report",
          back: "Produced at a milestone/end of a test activity. Summarizes the testing performed: a summary, evaluation against exit criteria, what happened vs plan, factors that blocked/aided progress, metrics, residual risks, and reusable testware.",
        },
        {
          front: "Tailor to the audience",
          back: "The content of a report should be tailored to its audience — e.g. a technical audience wants detailed defect/coverage data; a business/stakeholder audience wants a high-level summary and risk view.",
        },
      ],
    },
    {
      type: "list",
      heading: "Communicating test status (FL-5.3.3)",
      items: [
        "Verbally — in stand-ups, meetings and direct conversations with team members and stakeholders.",
        "Dashboards — e.g. CI/CD dashboards, task boards, and burn-down/burn-up charts giving an at-a-glance view.",
        "Electronic communication channels — email, chat tools.",
        "Online documentation — shared, living documents.",
        "Formal test reports — progress and completion reports (see above).",
        "The choice depends on factors such as the information needs, project goals, organizational requirements, regulatory constraints, and the team (e.g. remote vs colocated).",
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "Monitoring vs control — what does each do?",
          a: "Monitoring gathers information to assess progress against the plan and exit criteria; control takes corrective/guiding actions to keep testing on track.",
        },
        {
          q: "Which report is produced during testing and which at the end?",
          a: "The test progress report is produced during testing (supports control); the test completion report is produced at a milestone/end of an activity.",
        },
        {
          q: "Give two examples of defect or coverage metrics.",
          a: "Defect examples: number of defects found/fixed, defect density. Coverage examples: requirements coverage, code coverage.",
        },
        {
          q: "Name three ways to communicate test status besides a formal report.",
          a: "Any three of: verbally (stand-ups/meetings), dashboards (CI/CD, burn-downs), electronic channels (email/chat), and online living documentation.",
        },
      ],
    },
  ],
});
