/* 5.2 Risk Management — study material (ISTQB CTFL v4.0.1)
   LOs: FL-5.2.1 (K1) identify risk level using likelihood and impact;
        FL-5.2.2 (K2) distinguish between project risks and product risks;
        FL-5.2.3 (K2) explain how product risk analysis may influence thoroughness & scope of testing;
        FL-5.2.4 (K2) explain measures taken in response to analyzed product risks. */

registerMaterials("5.2", {
  title: "Risk Management",
  los: ["FL-5.2.1", "FL-5.2.2", "FL-5.2.3", "FL-5.2.4"],
  bigPicture:
    "Risk is the possibility of an event causing negative consequences. Risk-based testing uses risk to " +
    "focus and prioritize test effort where it matters most. Risk level combines likelihood and impact; " +
    "risks split into project and product risks; product-risk analysis shapes how thoroughly and widely " +
    "we test; and we choose measures to respond to each risk.",
  blocks: [
    {
      type: "cards",
      heading: "Risk fundamentals (FL-5.2.1) — flip to reveal",
      cards: [
        {
          front: "What is risk?",
          back: "A factor that could result in future negative consequences. It has two dimensions that together determine its LEVEL.",
        },
        {
          front: "Risk likelihood",
          back: "The probability of the risk occurring (a value greater than 0 and less than 1 — it's neither impossible nor certain).",
        },
        {
          front: "Risk impact",
          back: "The harm / consequences (the damage) that would arise if the risk actually happens.",
        },
        {
          front: "Risk level",
          back: "Risk level = likelihood × impact (conceptually). The higher the level, the more important it is. Used to prioritize: higher risk → test earlier and/or more thoroughly.",
        },
      ],
    },
    {
      type: "table",
      heading: "Project risks vs Product risks (FL-5.2.2)",
      columns: ["Project risks (relate to management/control)", "Product risks (relate to the product's quality)"],
      rows: [
        ["Affect the project's capability to deliver its objectives", "Affect the quality of the product itself"],
        ["Organizational: skills/staff shortages, personnel issues", "Software might not perform its intended functions per spec"],
        ["Political: poor communication, improper follow-up of info", "Software might be non-functionally inadequate (slow, insecure, unusable)"],
        ["Technical: scope creep, poor tool support, unstable environment", "Hardware/architecture might not deliver; poor data integrity/quality"],
        ["Supplier: third-party failure, contractual issues", "Software might cause failures / harm to people, environment, company"],
      ],
    },
    {
      type: "cards",
      heading: "Product risk analysis (FL-5.2.3) — flip to reveal",
      cards: [
        {
          front: "Goals of product risk analysis",
          back: "(1) Reduce the risk of an adverse effect on quality to an acceptable level. (2) Be aware of the consequences. (3) Spend test effort based on the level of risk.",
        },
        {
          front: "Two steps",
          back: "Risk identification (generate a comprehensive list of risks, e.g. via brainstorming, workshops, interviews, checklists, past experience) and risk assessment (categorize, determine likelihood & impact, prioritize, propose responses).",
        },
        {
          front: "Influence on thoroughness",
          back: "Higher risk → more thorough testing of that area: more rigorous techniques, higher coverage targets, more experienced testers, independent review/test, earlier testing.",
        },
        {
          front: "Influence on scope",
          back: "Risk shapes WHAT is tested and how much: scope can be widened for high-risk areas and reduced (or skipped) for very low-risk areas. Risk also drives test prioritization order.",
        },
      ],
    },
    {
      type: "list",
      heading: "Measures in response to product risks (FL-5.2.4)",
      items: [
        "Select the test approach/technique appropriate to the risk (e.g. more rigorous for higher risk).",
        "Choose the test levels and types to perform (e.g. add security or performance testing where relevant).",
        "Set the extent of testing to be carried out (coverage, depth).",
        "Prioritize testing to find critical defects as early as possible.",
        "Use the most experienced/specialist testers on the riskiest areas.",
        "Apply additional activities to reduce risk — e.g. reviews, training of developers, more independence.",
      ],
      mnemonic:
        "Respond to risk by adjusting: APPROACH (techniques), LEVELS/TYPES, EXTENT (coverage), " +
        "PRIORITY (order), and PEOPLE (who tests) — plus extra preventive activities like reviews.",
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "What two factors determine the level of a risk?",
          a: "The likelihood (probability) of the risk occurring and the impact (harm/consequences) if it does.",
        },
        {
          q: "Classify: 'a key tester leaves the project' and 'the checkout page is too slow under load'.",
          a: "The first is a project risk (organizational/management); the second is a product risk (non-functional quality of the product).",
        },
        {
          q: "How does a high product risk affect testing?",
          a: "It increases thoroughness and scope — more rigorous techniques, higher coverage, experienced testers, earlier and higher-priority testing of that area.",
        },
        {
          q: "Name two measures you can take in response to an analyzed product risk.",
          a: "Any two of: choose suitable techniques, select test levels/types, set the extent/coverage, prioritize tests, assign experienced testers, add reviews or other preventive activities.",
        },
      ],
    },
  ],
});
