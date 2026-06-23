/* 1.5 Essential Skills and Good Practices in Testing — study material (ISTQB CTFL v4.0.1)
   LOs: FL-1.5.1 (K2) give examples of the generic skills required for testing;
        FL-1.5.2 (K1) recall the advantages of the whole team approach;
        FL-1.5.3 (K2) distinguish the benefits and drawbacks of independence of testing. */

registerMaterials("1.5", {
  title: "Essential Skills and Good Practices in Testing",
  los: ["FL-1.5.1", "FL-1.5.2", "FL-1.5.3"],
  bigPicture:
    "Good testing needs more than tool knowledge: it needs generic skills like analytical thinking, " +
    "good communication and domain knowledge. Modern teams often use a whole-team approach where " +
    "quality is everyone's responsibility, and they balance the right level of test independence to " +
    "get fresh perspectives without losing collaboration.",
  blocks: [
    {
      type: "cards",
      heading: "Generic skills for testing (FL-1.5.1) — flip to reveal",
      cards: [
        {
          front: "Testing knowledge",
          back: "Knowing test techniques, tools and methods increases the effectiveness of testing.",
        },
        {
          front: "Thoroughness, carefulness, curiosity, attention to detail",
          back: "Needed to identify defects, especially the ones that are hard to find.",
        },
        {
          front: "Good communication skills",
          back: "Essential for clear reporting of defects, and constructive discussion of defects and failures without alienating the author.",
        },
        {
          front: "Analytical & critical thinking",
          back: "Increases the effectiveness of testing by helping spot inconsistencies and reason about behavior.",
        },
        {
          front: "Creativity",
          back: "Needed to imagine scenarios and edge cases that would not be found by routine, mechanical testing.",
        },
        {
          front: "Technical & domain knowledge",
          back: "Good technical knowledge improves working with tools/environments; domain knowledge lets testers understand and communicate with end users and stakeholders.",
        },
        {
          front: "Interpersonal skills & diplomacy",
          back: "Testers often deliver unwelcome news. Communicating defects and results constructively, and giving and receiving feedback well, helps maintain good relationships.",
        },
      ],
    },
    {
      type: "list",
      heading: "Whole team approach (FL-1.5.2)",
      items: [
        "A practice (from Extreme Programming) where any team member with the necessary knowledge can perform any task, and everyone is responsible for quality.",
        "Team members share the same workspace (physical or virtual); colocation eases communication and interaction.",
        "Improves team dynamics, enhances communication and collaboration, and creates synergy between skills/viewpoints.",
        "Testers work closely with developers, business representatives and other stakeholders throughout — e.g. helping write better tests and building features collaboratively.",
        "Best suited to many contexts but not all — e.g. some safety-critical situations may require strong independence.",
      ],
      mnemonic:
        "Whole team = 'quality is everyone's job'. Benefit: better communication, collaboration and " +
        "synergy. Caveat: testers should still support and coach others in testing.",
    },
    {
      type: "table",
      heading: "Independence of testing (FL-1.5.3)",
      columns: ["Benefits", "Drawbacks"],
      rows: [
        ["Independent testers find different (and more) defects than the author, due to different backgrounds and biases", "Isolation from the dev team may cause a lack of collaboration, delayed feedback, or an adversarial relationship"],
        ["Can verify, challenge or disprove assumptions made during specification and implementation", "Developers may lose a sense of responsibility for quality ('the testers will catch it')"],
        ["An independent tester is unbiased by being the author of the work product", "Independent testers may be seen as a bottleneck, or be blamed for delays in release"],
        ["", "Independent testers may lack some important information (e.g. about the test object)"],
      ],
    },
    {
      type: "cards",
      heading: "Levels of independence (flip to reveal)",
      cards: [
        {
          front: "No independence",
          back: "The author tests their own code. Low independence — useful but limited by the author's own biases.",
        },
        {
          front: "Some independence",
          back: "Tests written by another person (e.g. a peer) on the same team.",
        },
        {
          front: "High independence",
          back: "A separate team within the organization, reporting to project management or executive management.",
        },
        {
          front: "Very high independence",
          back: "Testers from a different organization, or from outside the company (e.g. outsourced or certification bodies).",
        },
      ],
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "Why are communication and diplomacy important testing skills?",
          a: "Testers report defects and often deliver unwelcome news; communicating constructively keeps relationships good and helps defects get fixed rather than disputed.",
        },
        {
          q: "State one benefit and one drawback of independent testing.",
          a: "Benefit: independent testers find different defects and challenge assumptions free of author bias. Drawback: risk of isolation, delayed feedback, or developers feeling less responsible for quality.",
        },
        {
          q: "What is the whole-team approach and where does it come from?",
          a: "A practice (originating in Extreme Programming) where the whole team is responsible for quality and any qualified member can do any task — improving communication and collaboration.",
        },
      ],
    },
  ],
});
