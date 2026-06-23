/* 4.1 Test Techniques Overview — study material (ISTQB CTFL v4.0.1)
   LOs: FL-4.1.1 (K2) distinguish black-box, white-box and experience-based test techniques. */

registerMaterials("4.1", {
  title: "Test Techniques Overview",
  los: ["FL-4.1.1"],
  bigPicture:
    "Test techniques help testers analyze a test object and systematically derive a manageable set of " +
    "test cases. They fall into three families based on what they draw on: the specification (black-box), " +
    "the internal structure (white-box), or the tester's knowledge and experience (experience-based). " +
    "Good testing usually combines techniques from more than one family.",
  blocks: [
    {
      type: "cards",
      heading: "The three families (flip to reveal)",
      cards: [
        {
          front: "Black-box techniques (specification-based)",
          back: "Based on an analysis of the specified behavior of the test object WITHOUT reference to its internal structure. Test cases derived from the test basis (requirements, specs, user stories, use cases, models). Focus on inputs and outputs.",
        },
        {
          front: "White-box techniques (structure-based)",
          back: "Based on an analysis of the internal STRUCTURE and processing of the test object (e.g. code, control flow, architecture). Coverage is measured against structural elements like statements or branches.",
        },
        {
          front: "Experience-based techniques",
          back: "Draw on the knowledge and experience of testers (and others) to design tests. Effective at finding defects that systematic black/white-box techniques may miss; coverage is hard to measure. Examples: error guessing, exploratory testing, checklist-based testing.",
        },
      ],
    },
    {
      type: "table",
      heading: "Comparing the families",
      columns: ["Aspect", "Black-box", "White-box", "Experience-based"],
      rows: [
        ["Based on", "Specified behavior", "Internal structure", "Tester's knowledge & experience"],
        ["Coverage measured by", "Items in the specification (e.g. partitions)", "Structural elements (e.g. statements, branches)", "Hard to measure / not systematic"],
        ["Sees inside the code?", "No", "Yes", "Not necessarily"],
        ["Finds", "Functional & behavioral defects vs spec", "Untested code, dead code, structural gaps", "Defects others miss; complements the rest"],
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "On what is each technique family based?",
          a: "Black-box: the specified behavior (specification). White-box: the internal structure. Experience-based: the tester's knowledge and experience.",
        },
        {
          q: "Which family lets you measure coverage against statements and branches?",
          a: "White-box (structure-based) techniques.",
        },
        {
          q: "Why combine techniques from different families?",
          a: "Each family finds different kinds of defects; combining them gives broader, more effective coverage than any single family alone.",
        },
      ],
    },
  ],
});
