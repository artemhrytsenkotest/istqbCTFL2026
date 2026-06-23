/* 2.2 Test Levels and Test Types — study material (ISTQB CTFL v4.0.1)
   LOs: FL-2.2.1 (K2) distinguish the different test levels;
        FL-2.2.2 (K2) distinguish the different test types;
        FL-2.2.3 (K2) distinguish confirmation testing from regression testing. */

registerMaterials("2.2", {
  title: "Test Levels and Test Types",
  los: ["FL-2.2.1", "FL-2.2.2", "FL-2.2.3"],
  bigPicture:
    "Test levels are groups of test activities organized and managed together — each tied to a stage " +
    "of development (the WHAT/WHERE in the lifecycle). Test types group activities by a specific quality " +
    "characteristic or objective (the WHY). Levels and types are independent: any test type can run at " +
    "any level. Changes then trigger confirmation and regression testing.",
  blocks: [
    {
      type: "cards",
      heading: "The five test levels (FL-2.2.1) — flip to reveal",
      cards: [
        {
          front: "Component (unit) testing",
          back: "Tests components in isolation. Often needs stubs/drivers/mocks. Usually done by the developer who wrote the code. Test basis: detailed design, code, data model, component specs.",
        },
        {
          front: "Component integration testing",
          back: "Tests the interfaces and interactions between components. Depends on the integration strategy (e.g. top-down, bottom-up, big-bang). Test basis: software/system design, interface specs, architecture.",
        },
        {
          front: "System testing",
          back: "Tests the overall behavior and capabilities of an entire system or product, often including functional end-to-end tasks and non-functional quality characteristics. Test basis: requirements, risk analysis, use cases, models of behavior.",
        },
        {
          front: "System integration testing",
          back: "Tests the interfaces of the system to other systems and external services. May need suitable test environments simulating external systems. Test basis: interface specs, workflows, external interface definitions.",
        },
        {
          front: "Acceptance testing",
          back: "Focuses on validation and demonstrating readiness for deployment / fitness for use. Ideally by intended users. Forms: User Acceptance (UAT), Operational Acceptance, Contractual & Regulatory Acceptance, Alpha & Beta testing.",
        },
      ],
    },
    {
      type: "table",
      heading: "Test levels distinguished by...",
      columns: ["Attribute", "Examples"],
      rows: [
        ["Test object", "Component, group of components, whole system, system of systems"],
        ["Test basis", "Code & design (component) → requirements & use cases (system) → user needs (acceptance)"],
        ["Defects & failures", "Code logic (component) → interfaces (integration) → end-to-end behavior (system) → fitness for use (acceptance)"],
        ["Approach & responsibilities", "Developers (component) → testers (system) → users/customers (acceptance)"],
      ],
    },
    {
      type: "cards",
      heading: "The four test types (FL-2.2.2) — flip to reveal",
      cards: [
        {
          front: "Functional testing",
          back: "Evaluates WHAT the system should do — the functions it should perform. Answers 'does it do the right things?'. Can be done at all test levels.",
        },
        {
          front: "Non-functional testing",
          back: "Evaluates HOW WELL the system behaves — quality characteristics such as performance efficiency, compatibility, usability, reliability, security, maintainability, portability (ISO 25010). Can and should be done at all levels, as early as possible.",
        },
        {
          front: "Black-box testing",
          back: "Specification-based; derives tests from external behavior without reference to internal structure. Focuses on inputs and outputs.",
        },
        {
          front: "White-box testing",
          back: "Structure-based; derives tests from the internal structure or implementation (e.g. code, architecture, workflows).",
        },
      ],
    },
    {
      type: "table",
      heading: "Confirmation vs Regression testing (FL-2.2.3)",
      columns: ["Confirmation testing", "Regression testing"],
      rows: [
        ["Run AFTER a defect is fixed", "Run after any change (fix, new feature, environment change)"],
        ["Confirms the original defect is actually resolved", "Confirms a change has not caused new defects (or re-activated old ones) elsewhere"],
        ["Re-executes the test(s) that previously failed", "Re-executes tests on unchanged areas that could be affected"],
        ["Scope: the fixed defect", "Scope: potentially affected areas — a strong candidate for automation"],
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "What distinguishes a test level from a test type?",
          a: "A test level is a group of activities tied to a stage of development (component, integration, system, acceptance); a test type groups activities by an objective/quality characteristic (functional, non-functional, black-box, white-box). Any type can run at any level.",
        },
        {
          q: "Who typically performs component testing and acceptance testing?",
          a: "Component testing is usually done by developers; acceptance testing is ideally done by the intended users/customers.",
        },
        {
          q: "Functional vs non-functional testing in one line each.",
          a: "Functional = what the system does (its functions); non-functional = how well it does it (performance, usability, security, reliability, etc.).",
        },
        {
          q: "After a fix, what is the difference between confirmation and regression testing?",
          a: "Confirmation testing re-runs the failed test to verify the defect is fixed; regression testing checks the change didn't break other, previously working areas.",
        },
      ],
    },
  ],
});
