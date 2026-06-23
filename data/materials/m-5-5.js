/* 5.5 Defect Management — study material (ISTQB CTFL v4.0.1)
   LOs: FL-5.5.1 (K3) prepare a defect report. */

registerMaterials("5.5", {
  title: "Defect Management",
  los: ["FL-5.5.1"],
  bigPicture:
    "Testing finds defects, and the team needs an established process to handle them from discovery to " +
    "resolution. Defect management covers logging, classifying, analyzing and tracking anomalies through " +
    "their lifecycle. A good defect report communicates the problem clearly enough that it can be " +
    "reproduced, prioritized and fixed — and provides data for process improvement.",
  blocks: [
    {
      type: "cards",
      heading: "Defect management basics (flip to reveal)",
      cards: [
        {
          front: "What gets logged?",
          back: "Anomalies found in dynamic or static testing. Note: not every anomaly is a defect — some are false positives (e.g. caused by the test or environment). Anomalies are investigated and classified.",
        },
        {
          front: "Defect lifecycle / workflow",
          back: "A defect typically moves through states such as: new/open → analyzed/assigned → fixed → confirmation tested → closed (or rejected/deferred/duplicate). The exact workflow depends on the SDLC.",
        },
        {
          front: "Goals of a defect report",
          back: "(1) Give developers and others the information to resolve the issue. (2) Provide a means of tracking the quality of the work product. (3) Give ideas for development and test process improvement.",
        },
      ],
    },
    {
      type: "list",
      heading: "Typical content of a defect report (FL-5.5.1)",
      items: [
        "Unique identifier.",
        "Title and short summary of the anomaly reported.",
        "Date the defect was observed, issuing organization, and author (incl. role).",
        "Identification of the test object and test environment.",
        "Context of the defect — e.g. test case being run, the test activity, SDLC phase, other relevant info (technique, checklist, test data).",
        "Description to enable reproduction and resolution: steps to reproduce, and the actual vs expected results.",
        "Severity of the defect (degree of impact on stakeholder/development interests).",
        "Priority to fix.",
        "Status of the defect (e.g. open, deferred, duplicate, fixed, awaiting confirmation test, re-opened, closed).",
        "References — e.g. to the test case, the failing requirement/user story, or related defects.",
      ],
      mnemonic:
        "A great defect report lets someone else REPRODUCE it: clear steps, plus actual vs expected. " +
        "Then add severity, priority, status and references for tracking and triage.",
    },
    {
      type: "table",
      heading: "Severity vs Priority — don't confuse them",
      columns: ["Severity", "Priority"],
      rows: [
        ["How bad the impact is on the system/stakeholders", "How urgently it should be fixed (business decision)"],
        ["A technical/quality judgement", "A scheduling/business judgement"],
        ["High severity ≠ always high priority", "A low-severity but highly visible defect can be high priority"],
      ],
    },
    {
      type: "cards",
      heading: "Where defects come from (flip to reveal)",
      cards: [
        {
          front: "Dynamic testing",
          back: "Defects reported after a failure is observed when the software is executed. Needs reproduction steps, actual vs expected results.",
        },
        {
          front: "Static testing",
          back: "Defects found directly during reviews/static analysis (no execution). These are logged too, but there's no failure to reproduce.",
        },
        {
          front: "Good defect-report practice",
          back: "Be objective and factual, avoid blame, keep it reproducible and concise. Discuss defects without alienating the author (links to communication skills).",
        },
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "What two results must a defect report include to make a failure reproducible?",
          a: "The steps to reproduce, plus the actual result and the expected result.",
        },
        {
          q: "What's the difference between severity and priority?",
          a: "Severity is how serious the impact is (technical judgement); priority is how urgently it should be fixed (a business/scheduling decision). They don't always match.",
        },
        {
          q: "Name three purposes of defect reporting.",
          a: "Provide information to resolve the issue, track the quality of the work product, and give ideas for development/test process improvement.",
        },
        {
          q: "Are all logged anomalies defects?",
          a: "No — some are false positives (e.g. caused by the test or environment). Anomalies are investigated and classified before being confirmed as defects.",
        },
      ],
    },
  ],
});
