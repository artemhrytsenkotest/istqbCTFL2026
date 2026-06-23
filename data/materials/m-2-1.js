/* 2.1 Testing in the Context of a SDLC — study material (ISTQB CTFL v4.0.1)
   LOs: FL-2.1.1 (K2) explain the impact of the chosen SDLC on testing;
        FL-2.1.2 (K1) recall good testing practices that apply to all SDLCs;
        FL-2.1.3 (K1) recall examples of test-first approaches;
        FL-2.1.4 (K2) summarize how DevOps might impact testing;
        FL-2.1.5 (K2) explain the shift-left approach;
        FL-2.1.6 (K2) explain how retrospectives are used for process improvement. */

registerMaterials("2.1", {
  title: "Testing in the Context of a SDLC",
  los: ["FL-2.1.1", "FL-2.1.2", "FL-2.1.3", "FL-2.1.4", "FL-2.1.5", "FL-2.1.6"],
  bigPicture:
    "A software development lifecycle (SDLC) is the abstract, high-level view of the activities used to " +
    "develop software. The chosen SDLC strongly affects how, when and how much testing happens. Good " +
    "practices, test-first approaches, DevOps, shift-left and retrospectives all aim to test earlier " +
    "and improve continuously.",
  blocks: [
    {
      type: "cards",
      heading: "SDLC impact on testing (FL-2.1.1) — flip to reveal",
      cards: [
        {
          front: "Sequential models (e.g. waterfall, V-model)",
          back: "Each phase begins when the previous ends. In the V-model test activities (and levels) are planned in parallel with corresponding development phases — early test design, late execution.",
        },
        {
          front: "Iterative & incremental models",
          back: "Software is grown in increments; features delivered in cycles. Each increment is tested; regression testing grows in importance as the product grows. Agile is the most common example.",
        },
        {
          front: "How the SDLC shapes testing",
          back: "It affects: scope & timing of test activities (e.g. design/level), level of detail of test documentation, choice of techniques and test approach, extent of test automation, and the role/tasks of a tester.",
        },
        {
          front: "Good models match the project",
          back: "The SDLC should be chosen and adjusted to the context — project goals, product type, business priorities, identified risks, etc.",
        },
      ],
    },
    {
      type: "list",
      heading: "Good testing practices for ALL SDLCs (FL-2.1.2)",
      items: [
        "Every development activity has a corresponding test activity, so all development activities are subject to quality control.",
        "Different test levels have specific and different test objectives, so testing is appropriately comprehensive while avoiding redundancy.",
        "Test analysis and design for a given test level begins during the corresponding development phase, so testing can adhere to early testing (shift left).",
        "Testers are involved in reviewing work products as soon as drafts are available, so this early testing and defect detection supports shift left.",
      ],
    },
    {
      type: "cards",
      heading: "Test-first, DevOps & shift-left (flip to reveal)",
      cards: [
        {
          front: "Test-first approaches (FL-2.1.3)",
          back: "Tests are defined before the code is written. Examples: TDD (Test-Driven Development), ATDD (Acceptance Test-Driven Development), and BDD (Behavior-Driven Development). Tests guide development and act as executable specifications.",
        },
        {
          front: "DevOps (FL-2.1.4)",
          back: "An organizational approach uniting development and operations with shared goals, using CI/CD. Testing benefits: fast feedback, automated CI pipeline, confidence via automated regression. Risks: must establish/maintain the pipeline; automation needs resources; some testing still manual.",
        },
        {
          front: "Shift-left (FL-2.1.5)",
          back: "Testing performed earlier in the SDLC ('moving left' on the timeline). Examples: reviewing the specification from a testing view, writing tests before code, CI/CD with fast feedback, static analysis of code before dynamic testing, performing non-functional testing as early as feasible.",
        },
        {
          front: "Shift-left may cost more up front",
          back: "Shift-left can mean a small increase in early effort/cost but is expected to reduce overall effort/cost later. To work, stakeholders must be convinced it is beneficial.",
        },
      ],
    },
    {
      type: "list",
      heading: "Retrospectives & process improvement (FL-2.1.6)",
      items: [
        "Retrospectives are meetings (often at the end of an iteration or a milestone/release) where the team discusses what went well, what could be improved, and how to incorporate improvements.",
        "Topics include process, people, organizations, relationships, and tools.",
        "Benefits: increased test effectiveness/efficiency, higher quality testware, team bonding & learning, better quality of the test basis, and better cooperation between dev and test.",
        "Continual improvement: results feed into future iterations and are a key mechanism for process improvement.",
      ],
      mnemonic:
        "Retrospective = look BACK to improve forward: What went well? What to improve? How to apply it next time?",
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "Name two good testing practices that apply to every SDLC.",
          a: "Any two of: every dev activity has a corresponding test activity; each test level has distinct objectives; test analysis/design starts during the matching dev phase; testers review work products as soon as drafts exist.",
        },
        {
          q: "Give three examples of test-first approaches.",
          a: "TDD (test-driven development), ATDD (acceptance test-driven development), and BDD (behavior-driven development).",
        },
        {
          q: "What does 'shift-left' mean and give one example?",
          a: "Performing testing earlier in the lifecycle. Examples: reviewing specs from a test viewpoint, writing tests before code, static analysis before dynamic testing, early non-functional testing.",
        },
        {
          q: "What is the purpose of a retrospective?",
          a: "To reflect on what went well and what can be improved, and decide how to apply improvements — a key mechanism for continual process improvement.",
        },
      ],
    },
  ],
});
