/* 1.2 Why is Testing Necessary? — study material (ISTQB CTFL v4.0.1)
   LOs: FL-1.2.1 (K2) exemplify why testing is necessary;
        FL-1.2.2 (K1) recall the relation between testing and quality assurance;
        FL-1.2.3 (K2) distinguish between root cause, error, defect, and failure. */

registerMaterials("1.2", {
  title: "Why is Testing Necessary?",
  los: ["FL-1.2.1", "FL-1.2.2", "FL-1.2.3"],
  bigPicture:
    "Testing is necessary because it provides a cost-effective way to detect defects so they can be " +
    "removed, and it contributes directly to the success of a project. Testing is one part of the " +
    "broader discipline of quality assurance. A clear cause-and-effect chain runs from a human error, " +
    "to a defect in a work product, to a failure when the defective code is executed.",
  blocks: [
    {
      type: "cards",
      heading: "Why testing is necessary (flip to reveal)",
      cards: [
        {
          front: "Testing reduces risk",
          back: "Rigorous testing of components and systems (and their documentation) helps reduce the risk of failures occurring during operation.",
        },
        {
          front: "Testing contributes to success",
          back: "When testers are involved across the SDLC they help ensure required quality levels are met, contributing to project and system success.",
        },
        {
          front: "Contractual / legal / regulatory",
          back: "Testing may be required to meet contractual or legal requirements, or industry-specific standards (e.g. safety-critical domains).",
        },
        {
          front: "Testers' contributions",
          back: "Involvement in requirements reviews and refinement, design reviews, verification & validation, and reporting test results all add value and reduce the risk of releasing inadequate quality.",
        },
      ],
    },
    {
      type: "table",
      heading: "Testing vs Quality Assurance (FL-1.2.2)",
      columns: ["Aspect", "Quality Control (testing)", "Quality Assurance"],
      rows: [
        ["Focus", "Product-oriented — finding defects in work products", "Process-oriented — improving the process to prevent defects"],
        ["Approach", "Corrective: achieve appropriate quality, support achieving it", "Preventive: adherence to good processes builds confidence quality will be achieved"],
        ["Relationship", "Testing is a major form of quality control", "QA supports proper testing; testing supports QA (feedback on the process)"],
      ],
    },
    {
      type: "cards",
      heading: "Quality & feedback (flip to reveal)",
      cards: [
        {
          front: "Quality Assurance (QA)",
          back: "A process-oriented, preventive approach focused on the implementation and improvement of processes. It works on the basis that if a good process is followed correctly, it will generate a good product.",
        },
        {
          front: "Quality Control (QC)",
          back: "A product-oriented, corrective approach focused on activities that support achieving appropriate quality levels. Testing is a major form of quality control.",
        },
        {
          front: "Testing supports QA",
          back: "Test results are used by QA: in agile they inform whether quality goals are being met; in any SDLC they provide feedback used to improve processes.",
        },
      ],
    },
    {
      type: "table",
      heading: "Error → Defect → Failure (FL-1.2.3)",
      columns: ["Term", "Also called", "Meaning"],
      rows: [
        ["Error", "Mistake", "A human action that produces an incorrect result (e.g. a developer misunderstands a requirement)."],
        ["Defect", "Fault / bug", "A flaw in a work product introduced by an error (e.g. a wrong line of code, an incorrect requirement)."],
        ["Failure", "—", "An event where the component or system does not perform a required function within specified limits — happens when defective code is executed."],
        ["Root cause", "—", "The fundamental reason for the occurrence of a problem; addressing it can prevent similar errors/defects in future."],
      ],
    },
    {
      type: "list",
      heading: "The causal chain & false results",
      items: [
        "A person makes an ERROR, which introduces a DEFECT, which (when executed) can cause a FAILURE.",
        "Not every defect causes a failure — some defects are in code that is never executed, or need specific conditions to trigger.",
        "Failures can also be caused by environmental conditions (radiation, electromagnetic fields, pollution) altering hardware.",
        "False positive: a test reports a failure (defect) where there is none — caused by e.g. the test or environment, not the test object.",
        "False negative: a test does NOT detect a defect that it should have detected.",
      ],
      mnemonic:
        "Person makes an Error → Error creates a Defect (in a work product) → Defect, when executed, causes a Failure. " +
        "Find the Root cause to stop the same error happening again.",
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "Error, defect, failure: which is a human action?",
          a: "The error (mistake). It introduces a defect (fault/bug) in a work product; the defect, when the code is executed, can cause a failure.",
        },
        {
          q: "QA vs QC — which is process-oriented and preventive?",
          a: "Quality assurance (QA) is process-oriented and preventive. Quality control (QC), of which testing is a major form, is product-oriented and corrective.",
        },
        {
          q: "What is a false positive in testing?",
          a: "A reported defect/failure that is not actually a real defect in the test object — caused by e.g. a faulty test or test environment.",
        },
        {
          q: "Why analyze root causes?",
          a: "Identifying the fundamental reason for a defect lets you take action (e.g. process improvement) to prevent similar errors and defects from recurring.",
        },
      ],
    },
  ],
});
