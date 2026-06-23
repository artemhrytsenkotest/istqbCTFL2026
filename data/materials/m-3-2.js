/* 3.2 Feedback and Review Process — study material (ISTQB CTFL v4.0.1)
   LOs: FL-3.2.1 (K1) identify the benefits of early and frequent stakeholder feedback;
        FL-3.2.2 (K2) summarize the activities of the review process;
        FL-3.2.3 (K1) recall the responsibilities of the principal roles in reviews;
        FL-3.2.4 (K2) compare and contrast the different review types. */

registerMaterials("3.2", {
  title: "Feedback and Review Process",
  los: ["FL-3.2.1", "FL-3.2.2", "FL-3.2.3", "FL-3.2.4"],
  bigPicture:
    "Reviews are the human form of static testing. Early and frequent stakeholder feedback keeps the " +
    "team building the right thing. Reviews follow a defined process with clear roles, and come in " +
    "several types — from quick informal reviews to rigorous, formal inspections — chosen to match the " +
    "objective, risk and formality required.",
  blocks: [
    {
      type: "list",
      heading: "Benefits of early & frequent feedback (FL-3.2.1)",
      items: [
        "Communicates likely quality problems early, so the team can act before they grow.",
        "Allows the team to better understand customer needs and how those needs evolve.",
        "Helps identify potential quality problems early (e.g. features that wouldn't satisfy stakeholders, or risky directions).",
        "Confirms whether development is meeting stakeholders' requirements, reducing the risk of building the wrong thing.",
        "Lets the team make and communicate decisions within the project constraints.",
      ],
    },
    {
      type: "cards",
      heading: "The review process activities (FL-3.2.2) — flip to reveal",
      cards: [
        {
          front: "1. Planning",
          back: "Define the scope, objectives, work product to review, characteristics to evaluate, review type, roles, metrics, entry and exit criteria, and effort/timeframe.",
        },
        {
          front: "2. Review initiation",
          back: "Make sure everyone and everything is prepared: ensure participants have access to the work product, understand their roles & responsibilities, and have all needed materials.",
        },
        {
          front: "3. Individual review",
          back: "Each reviewer individually examines the work product to assess its quality and identify anomalies, recommendations and questions — applying review techniques (e.g. checklist-based, scenario-based).",
        },
        {
          front: "4. Communication & analysis",
          back: "Anomalies found are communicated, discussed and analyzed to decide their status, ownership, and any required actions. Evaluate quality and whether exit criteria are met.",
        },
        {
          front: "5. Fixing & reporting",
          back: "For each defect, a change request is created or the author fixes it. Defects are tracked to closure; the review is re-evaluated against exit criteria; results are reported.",
        },
      ],
    },
    {
      type: "table",
      heading: "Principal review roles (FL-3.2.3)",
      columns: ["Role", "Responsibilities"],
      rows: [
        ["Manager", "Decides what is to be reviewed; provides resources (staff, time, budget, facilities)."],
        ["Author", "Creates and fixes the work product under review."],
        ["Moderator (facilitator)", "Leads the review; ensures it runs effectively, keeps it on track, mediates, and creates a safe environment for honest feedback."],
        ["Scribe (recorder)", "Collates anomalies from individual reviewers and records review information (decisions, new anomalies found during meetings)."],
        ["Reviewer", "Performs the reviews; may be subject matter experts, project members, stakeholders, etc. Find anomalies and identify potential defects."],
        ["Review leader", "Takes overall responsibility for the review; decides who is involved and organizes when/where it takes place."],
      ],
    },
    {
      type: "table",
      heading: "Review types — informal → formal (FL-3.2.4)",
      columns: ["Type", "Key characteristics"],
      rows: [
        ["Informal review", "No defined process; no formal documented output. Main purpose: detecting potential defects. Quick and cheap."],
        ["Walkthrough", "Led by the AUTHOR. Purposes: find defects, improve quality, educate participants, build consensus, generate ideas. Can vary from informal to formal; may include individual prep."],
        ["Technical review", "Performed by technically qualified reviewers, led by a moderator. Purposes: gain consensus and make decisions about a technical problem, also detect defects. Reviewers prepare individually."],
        ["Inspection", "The most formal type. Follows the full process with defined roles & metrics, entry/exit criteria. Main purpose: find the maximum number of defects; also evaluate quality, build confidence, prevent future defects, and process improvement. Led by a moderator (not the author)."],
      ],
    },
    {
      type: "cards",
      heading: "Making reviews succeed (flip to reveal)",
      cards: [
        {
          front: "Choose the right formality",
          back: "The review type and formality depend on factors like the SDLC, maturity of the process, criticality and complexity of the work product, legal/regulatory requirements, and audit needs.",
        },
        {
          front: "Walkthrough vs Inspection — who leads?",
          back: "A walkthrough is led by the AUTHOR. An inspection (and typically a technical review) is led by a MODERATOR, not the author.",
        },
        {
          front: "Success factors",
          back: "Clear objectives, the right people, defects treated objectively (not as personal criticism of the author), a positive culture, an appropriate size, adequate preparation time, and management support.",
        },
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "List the five review-process activities in order.",
          a: "Planning, review initiation, individual review, communication & analysis, and fixing & reporting.",
        },
        {
          q: "Which review type is the most formal, and what is its main objective?",
          a: "The inspection — its main objective is to find the maximum number of defects, following a rigorous defined process with roles, metrics and entry/exit criteria.",
        },
        {
          q: "Who leads a walkthrough versus an inspection?",
          a: "The author leads a walkthrough; a moderator/facilitator (not the author) leads an inspection.",
        },
        {
          q: "What does the scribe do?",
          a: "Collates the anomalies found by reviewers and records review information such as decisions and any new anomalies raised during the meeting.",
        },
      ],
    },
  ],
});
