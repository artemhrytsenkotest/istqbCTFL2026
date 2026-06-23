/* 1.3 Testing Principles — study material (ISTQB CTFL v4.0.1)
   LOs: FL-1.3.1 (K2) explain the seven testing principles. */

registerMaterials("1.3", {
  title: "Testing Principles",
  los: ["FL-1.3.1"],
  bigPicture:
    "Over the years a number of testing principles have been observed that provide general, enduring " +
    "guidelines common to all testing. The syllabus lists seven. They explain what testing can and " +
    "cannot do, and shape how testing should be planned and applied.",
  blocks: [
    {
      type: "cards",
      heading: "The seven principles (flip to reveal)",
      cards: [
        {
          front: "1. Testing shows the presence, not the absence, of defects",
          back: "Testing can show that defects are present, but cannot prove there are none. Testing reduces the probability of undiscovered defects, but finding none is not proof of correctness.",
        },
        {
          front: "2. Exhaustive testing is impossible",
          back: "Testing everything (all input/precondition combinations) is not feasible except in trivial cases. Instead use risk analysis, test techniques, and priorities to focus effort.",
        },
        {
          front: "3. Early testing saves time and money",
          back: "Defects removed early cost much less and prevent failures downstream. Test activities should start as early as possible (a.k.a. shift left).",
        },
        {
          front: "4. Defects cluster together",
          back: "A small number of modules usually contains most of the defects, or is responsible for most operational failures. Predicted/observed clusters guide where to focus testing.",
        },
        {
          front: "5. Tests wear out (pesticide paradox)",
          back: "Repeating the same tests stops finding new defects. To find new defects, tests and test data may need to change, and new tests written. (Exception: regression tests, where repetition shows the system still works.)",
        },
        {
          front: "6. Testing is context dependent",
          back: "Testing is done differently in different contexts. E.g. safety-critical industrial control software is tested differently from an e-commerce mobile app.",
        },
        {
          front: "7. Absence-of-defects is a fallacy",
          back: "Finding and fixing defects does not help if the built system is unusable or does not meet users' needs and expectations. Verification alone is not enough — validation matters too.",
        },
      ],
    },
    {
      type: "mnemonic",
      text:
        "Mnemonic: 'Some Engineers Don't Cut Pesticide Corners Accidentally' — " +
        "Show presence not absence · Exhaustive impossible · Defects cluster · Cut early (early testing) · " +
        "Pesticide paradox (tests wear out) · Context dependent · Absence-of-defects fallacy.",
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "If testing finds no defects, is the software defect-free?",
          a: "No. 'Testing shows the presence, not the absence, of defects.' Finding none reduces probability of undiscovered defects but does not prove correctness.",
        },
        {
          q: "What is the pesticide paradox and how do you counter it?",
          a: "Running the same tests repeatedly stops finding new defects. Counter it by revising existing tests and test data and writing new tests.",
        },
        {
          q: "Why is exhaustive testing not a practical goal?",
          a: "Except for trivial cases, the number of input and precondition combinations is too large. Use risk, priorities and test techniques to focus instead.",
        },
        {
          q: "Which principle warns that a perfectly defect-free build can still fail the users?",
          a: "Absence-of-defects is a fallacy — fixing defects doesn't help if the system is unusable or doesn't meet users' needs and expectations.",
        },
      ],
    },
  ],
});
