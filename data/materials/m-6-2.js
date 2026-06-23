/* 6.2 Benefits and Risks of Test Automation — study material (ISTQB CTFL v4.0.1)
   LOs: FL-6.2.1 (K1) recall the benefits and risks of test automation. */

registerMaterials("6.2", {
  title: "Benefits and Risks of Test Automation",
  los: ["FL-6.2.1"],
  bigPicture:
    "Test automation can bring real benefits — saving effort on repetitive work, improving consistency, " +
    "and giving fast feedback — but it is not free and not always worthwhile. Automation has real costs " +
    "and risks, and must be justified and maintained. Simply acquiring a tool does not guarantee success.",
  blocks: [
    {
      type: "table",
      heading: "Benefits vs Risks of automation (FL-6.2.1)",
      columns: ["Potential benefits", "Potential risks"],
      rows: [
        ["Reduction in repetitive manual work, saving time (e.g. regression, re-running, data entry)", "Unrealistic expectations about what the tool can do"],
        ["Greater consistency and repeatability — tests run the same way every time", "Inaccurate estimates of time, cost, effort to introduce, maintain and own the tool"],
        ["More objective assessment (e.g. coverage measures) and easier-to-access information for measurement", "Using a tool when manual testing is more appropriate"],
        ["Faster feedback on quality (e.g. in CI/CD pipelines)", "Over-reliance on the tool (forgetting that tools support, not replace, testers)"],
        ["Frees testers to do more valuable, exploratory and creative testing", "The relationship and compatibility issues between the tool and other tools/software"],
        ["", "Tool vendor going out of business, ending support, or selling the tool; poor vendor response for fixes/upgrades"],
        ["", "Risk with open-source projects (may be abandoned, or have limited support)"],
        ["", "The automation tool not being compatible with the development platform"],
        ["", "Choosing an unsuitable tool that doesn't meet requirements (e.g. regulatory/safety)"],
      ],
    },
    {
      type: "cards",
      heading: "Key automation ideas (flip to reveal)",
      cards: [
        {
          front: "Automation is an investment",
          back: "It has up-front and ongoing costs: acquiring/building, learning, scripting, and especially MAINTAINING the tests as the product changes. Benefits must outweigh these costs over time.",
        },
        {
          front: "Maintenance matters",
          back: "Automated tests must be kept in step with the changing software, or they become unreliable (false alarms) and lose value. Maintenance effort is a major, often under-estimated cost.",
        },
        {
          front: "Not everything should be automated",
          back: "Some testing is better done manually (e.g. exploratory testing, usability). Choose automation where the return is high — typically stable, repetitive, high-value checks like regression.",
        },
        {
          front: "A tool is not a strategy",
          back: "Buying a tool does not by itself improve testing. Success needs the right process, skills, and realistic expectations around the tool.",
        },
      ],
    },
    {
      type: "mnemonic",
      text:
        "Automation trade-off: BENEFITS = save repetitive effort, consistency, objectivity, fast " +
        "feedback, frees testers for creative work. RISKS = unrealistic expectations, under-estimated " +
        "cost/maintenance, over-reliance, tool/vendor & compatibility issues, automating the wrong things.",
    },
    {
      type: "selfcheck",
      heading: "Quick self-check",
      items: [
        {
          q: "Name three benefits of test automation.",
          a: "Any three of: reduced repetitive manual work, greater consistency/repeatability, more objective assessment (e.g. coverage), faster feedback, and freeing testers for higher-value testing.",
        },
        {
          q: "Why is maintenance a key risk of automation?",
          a: "Automated tests must be continually updated as the software changes; if not, they produce false alarms and lose value — and maintenance cost is often under-estimated.",
        },
        {
          q: "Is buying a good tool enough to improve testing?",
          a: "No. A tool supports testing but doesn't replace good process, skills, and realistic expectations; success depends on how it's introduced and used.",
        },
        {
          q: "Give an example of a vendor/sourcing risk for test tools.",
          a: "The vendor going out of business, ending or selling off support, slow response to fixes/upgrades, or an open-source project being abandoned.",
        },
      ],
    },
  ],
});
