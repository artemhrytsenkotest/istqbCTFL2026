/* 3.1 Static Testing Basics — study material (ISTQB CTFL v4.0.1)
   LOs: FL-3.1.1 (K1) recognize types of products examinable by static testing;
        FL-3.1.2 (K2) explain the value of static testing;
        FL-3.1.3 (K2) compare and contrast static and dynamic testing. */

registerMaterials("3.1", {
  title: "Static Testing Basics",
  los: ["FL-3.1.1", "FL-3.1.2", "FL-3.1.3"],
  bigPicture:
    "Unlike dynamic testing, static testing does not require the software under test to be executed. " +
    "Work products are examined manually (reviews) or with tools (static analysis). Because it can be " +
    "applied to almost any work product very early, static testing finds defects cheaply — and finds " +
    "kinds of issues that dynamic testing cannot, such as problems in requirements.",
  blocks: [
    {
      type: "cards",
      heading: "Static testing basics (flip to reveal)",
      cards: [
        {
          front: "Two forms of static testing",
          back: "(1) Reviews of work products done by people (e.g. informal review, walkthrough, technical review, inspection). (2) Static analysis done by tools (e.g. linters, static analyzers).",
        },
        {
          front: "What can be examined? (FL-3.1.1)",
          back: "Almost any work product that can be read and understood: specifications (incl. requirements), source code, test plans, test cases, product backlog items, contracts, models, web pages, etc. Pretty much anything except things that can't be usefully reviewed (e.g. an experiment to learn a tool).",
        },
        {
          front: "Static analysis (tools)",
          back: "Tools examine code or models without executing them — detecting coding standard violations, security vulnerabilities, and computing metrics. Especially valuable for code and other work products with a formal structure.",
        },
        {
          front: "Requires execution? No.",
          back: "The key distinction: static testing examines the work product WITHOUT executing the code. Defects are found directly, not through failures.",
        },
      ],
    },
    {
      type: "list",
      heading: "Value of static testing (FL-3.1.2)",
      items: [
        "Detects defects early, before dynamic testing — and the earlier a defect is found, the cheaper it is to remove (early detection).",
        "Finds defects that dynamic testing may miss — e.g. unreachable/dead code, design problems, deviations from standards, requirement defects.",
        "Increases development productivity (e.g. improved design, more maintainable code).",
        "Reduces development cost and time, and the overall cost and time of testing.",
        "Reduces the cost of quality over the software's lifetime by preventing defect leakage to later phases.",
        "Improves communication between team members through participation in reviews.",
        "Prevents defects: by reflecting on causes during reviews, similar defects can be avoided in future.",
      ],
      mnemonic:
        "Static testing pays off because it finds defects EARLY and CHEAPLY, finds kinds of defects " +
        "dynamic testing can't, and improves communication and prevents future defects.",
    },
    {
      type: "table",
      heading: "Static vs Dynamic testing (FL-3.1.3)",
      columns: ["Static testing", "Dynamic testing"],
      rows: [
        ["Software is NOT executed", "Software IS executed"],
        ["Finds defects directly in the work product", "Causes failures, from which defects are inferred"],
        ["Can be applied to non-executable work products (requirements, plans...)", "Needs executable software"],
        ["Finds defects cheaply and early in the SDLC", "Finds defects later, typically more expensive to fix"],
        ["Good at: requirement/design defects, dead code, standards, maintainability, security in code", "Good at: behavior, performance, usability, and other characteristics observable only at runtime"],
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "What is the single key difference between static and dynamic testing?",
          a: "Static testing examines the work product without executing the software; dynamic testing requires running the software.",
        },
        {
          q: "Name two defect types that static testing finds more easily than dynamic testing.",
          a: "Any two of: requirements defects, design defects, deviations from standards, unreachable/dead code, security vulnerabilities in code, maintainability issues.",
        },
        {
          q: "Give two work products (besides code) that static testing can examine.",
          a: "Any two of: requirements/specifications, test plans, test cases, contracts, models, product backlog items, web pages.",
        },
        {
          q: "Why does static testing reduce cost?",
          a: "It detects defects early, when they are far cheaper to fix, and prevents them leaking into later, more expensive phases.",
        },
      ],
    },
  ],
});
