/* 2.3 Maintenance Testing — study material (ISTQB CTFL v4.0.1)
   LOs: FL-2.3.1 (K2) summarize maintenance testing and its triggers. */

registerMaterials("2.3", {
  title: "Maintenance Testing",
  los: ["FL-2.3.1"],
  bigPicture:
    "Once deployed, software must be maintained — to fix defects, add features, or keep working as its " +
    "environment changes. Maintenance testing checks that these changes work and that no unwanted side " +
    "effects (regressions) are introduced into the unchanged parts of the system. Its scope depends on " +
    "the risk, size and type of change, and the size of the existing system.",
  blocks: [
    {
      type: "cards",
      heading: "Maintenance testing essentials (flip to reveal)",
      cards: [
        {
          front: "What is maintenance testing?",
          back: "Testing of changes to a system that is already in operation (or of the impact of a changed environment on it). It includes both testing the change itself and regression testing of the unchanged parts.",
        },
        {
          front: "Scope depends on...",
          back: "The risk of the change, the size of the existing system, and the size of the change. Bigger/riskier changes mean broader testing.",
        },
        {
          front: "Impact analysis",
          back: "Evaluating the changes made in a maintenance release to identify the intended consequences and the expected/possible side effects, and to identify the areas that will be affected (so regression testing can target them).",
        },
      ],
    },
    {
      type: "table",
      heading: "Triggers for maintenance testing (FL-2.3.1)",
      columns: ["Category", "Examples of triggers"],
      rows: [
        ["Modifications", "Planned enhancements (e.g. release-based changes), corrective and emergency changes, changes to the operational environment (e.g. planned OS or DB upgrades), upgrades of COTS software, patches for defects and vulnerabilities"],
        ["Migration", "Migration to another platform (operational tests of the new environment plus the changed software), and converting data from another application into the system under maintenance (data conversion testing)"],
        ["Retirement", "When an application/system reaches end of life: testing of data archiving (if long retention needed), and testing restore/retrieve procedures after archiving"],
      ],
    },
    {
      type: "mnemonic",
      text:
        "Three trigger families: MODIFICATION (enhancements, fixes, environment & COTS upgrades, patches), " +
        "MIGRATION (move platform + convert data), and RETIREMENT (archive data + test restore/retrieve).",
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "What two kinds of testing does maintenance testing combine?",
          a: "Testing the changes themselves, plus regression testing of the parts of the system that were not changed.",
        },
        {
          q: "What three factors determine the scope of maintenance testing?",
          a: "The degree of risk of the change, the size of the existing system, and the size of the change.",
        },
        {
          q: "Give an example of a maintenance-testing trigger related to retirement.",
          a: "Testing data archiving when retention is required, and testing the restore/retrieve procedures after data has been archived.",
        },
        {
          q: "What is impact analysis used for in maintenance testing?",
          a: "To identify the intended and possible side effects of a change and the areas affected, so regression testing can be targeted appropriately.",
        },
      ],
    },
  ],
});
