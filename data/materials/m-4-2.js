/* 4.2 Black-Box Test Techniques — study material (ISTQB CTFL v4.0.1)
   LOs: FL-4.2.1 (K3) use equivalence partitioning;
        FL-4.2.2 (K3) use boundary value analysis;
        FL-4.2.3 (K3) use decision table testing;
        FL-4.2.4 (K3) use state transition testing. */

registerMaterials("4.2", {
  title: "Black-Box Test Techniques",
  los: ["FL-4.2.1", "FL-4.2.2", "FL-4.2.3", "FL-4.2.4"],
  bigPicture:
    "The four classic black-box techniques give systematic ways to derive test cases from the " +
    "specification. Equivalence partitioning and boundary value analysis tackle input ranges; decision " +
    "tables handle combinations of conditions; state transition testing handles behavior that depends " +
    "on history (states). These are K3 — you must be able to APPLY them.",
  blocks: [
    {
      type: "cards",
      heading: "Equivalence Partitioning (EP) — flip to reveal",
      cards: [
        {
          front: "Idea",
          back: "Divide the data into partitions (equivalence classes) where all members are expected to be processed the same way. Test one value per partition — if it works for one, it should work for all.",
        },
        {
          front: "Valid vs invalid partitions",
          back: "Valid partitions = values that should be accepted. Invalid partitions = values that should be rejected. Cover BOTH. Don't combine multiple invalid partitions in one test (a defect may hide another).",
        },
        {
          front: "Coverage",
          back: "Coverage = (partitions tested ÷ total partitions) × 100%. 100% coverage requires at least one test for every identified partition.",
        },
        {
          front: "Example",
          back: "Age field 18–65 valid. Partitions: <18 (invalid), 18–65 (valid), >65 (invalid). One representative each, e.g. 10, 30, 70.",
        },
      ],
    },
    {
      type: "cards",
      heading: "Boundary Value Analysis (BVA) — flip to reveal",
      cards: [
        {
          front: "Idea",
          back: "An extension of EP, used only when a partition is ORDERED (numeric/sequential). Defects cluster at the edges, so test the boundary values of each partition.",
        },
        {
          front: "2-value BVA",
          back: "Test the boundary value itself and its nearest neighbour in the adjacent partition. 100% coverage = exercise all such boundary values.",
        },
        {
          front: "3-value BVA",
          back: "Test the boundary value plus BOTH of its neighbours (one below, one above). More thorough; finds defects 2-value BVA can miss (e.g. ≥ vs >).",
        },
        {
          front: "Example (range 18–65, 2-value)",
          back: "Boundaries 18 and 65 → test 17,18 and 65,66. (3-value would add 19 and 64.)",
        },
      ],
    },
    {
      type: "cards",
      heading: "Decision Table Testing — flip to reveal",
      cards: [
        {
          front: "Idea",
          back: "Tests combinations of conditions. Rows list conditions (inputs) and actions (outputs/results). Each column is a rule = a unique combination of conditions and its resulting actions.",
        },
        {
          front: "Notation",
          back: "Conditions: T/F (or Y/N), or specific values. Actions: X (occurs) / blank. '–' means don't care (the condition's value doesn't affect the action).",
        },
        {
          front: "Coverage",
          back: "Minimum coverage = at least one test case per rule (column) — usually each column of the (collapsed) decision table. Collapsing merges rules with don't-cares.",
        },
        {
          front: "Why use it",
          back: "Good for business rules with interacting conditions. Helps systematically find combinations that might otherwise be missed, including invalid/contradictory ones.",
        },
      ],
    },
    {
      type: "cards",
      heading: "State Transition Testing — flip to reveal",
      cards: [
        {
          front: "Idea",
          back: "Models the system as states and the events that cause transitions between them. Shown as a state transition diagram or a state table. Good when behavior depends on history/current state.",
        },
        {
          front: "Elements",
          back: "States, transitions, events (triggers), and (optionally) actions/guard conditions. A state table also shows invalid transitions (events that produce no change).",
        },
        {
          front: "Coverage levels",
          back: "All states coverage (visit every state) < all transitions coverage (the most common minimum — exercise every valid transition) < all valid+invalid transitions. All-transitions includes all states.",
        },
        {
          front: "Example",
          back: "ATM PIN: states Idle → Awaiting PIN → Validating → Access granted / Locked (after 3 fails). Transitions are events like card-inserted, PIN-entered, PIN-correct, PIN-wrong.",
        },
      ],
    },
    {
      type: "table",
      heading: "Which technique when?",
      columns: ["Technique", "Use when..."],
      rows: [
        ["Equivalence Partitioning", "Inputs/outputs fall into groups treated the same"],
        ["Boundary Value Analysis", "Partitions are ordered (numeric ranges) — test the edges"],
        ["Decision Table", "Output depends on combinations of conditions / business rules"],
        ["State Transition", "Behavior depends on current state and history of events"],
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "For a field accepting 1–100, give the 2-value BVA test values for the lower boundary.",
          a: "0 and 1 (the boundary value 1 and its nearest neighbour 0 in the invalid partition).",
        },
        {
          q: "What does a dash ('–') mean in a decision table?",
          a: "'Don't care' — the value of that condition does not affect the resulting action for that rule.",
        },
        {
          q: "Order these from weakest to strongest: all states, all valid+invalid transitions, all transitions.",
          a: "All states (weakest) → all transitions → all valid + invalid transitions (strongest). All-transitions coverage already includes all states.",
        },
        {
          q: "Why shouldn't you combine two invalid partitions in a single test case?",
          a: "One invalid input may mask the other (the first failure stops processing), so a defect related to the second could be hidden.",
        },
      ],
    },
  ],
});
