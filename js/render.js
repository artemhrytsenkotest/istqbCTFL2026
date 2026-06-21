/* Shared rendering for questions and review cards, used by quiz.js and exam.js.
   Mirrors the official ISTQB sample-exam style: scenario stems, single- and
   multi-select, roman-numeral item lists, LO/K-level tags, and per-option
   justifications shown on review. */

function letter(i) {
  return String.fromCharCode(65 + i);
}

function numberWord(n) {
  return ["zero", "ONE", "TWO", "THREE", "FOUR", "FIVE"][n] || String(n);
}

/* "Select ONE option." / "Select TWO options." */
function selectHint(q) {
  const n = answerArray(q).length;
  return q.type === "multi"
    ? `Select ${numberWord(n)} options.`
    : "Select ONE option.";
}

function loTag(q) {
  const parts = [];
  if (q.lo) parts.push(q.lo);
  if (q.k) parts.push(q.k);
  return parts.length ? `<span class="lo-tag">${escapeHtml(parts.join(" · "))}</span>` : "";
}

/* Scenario block + question stem + optional roman-numeral item list. */
function renderStem(q) {
  let html = "";
  if (q.scenario) html += `<div class="scenario">${escapeHtml(q.scenario)}</div>`;
  html += `<div class="qtext">${escapeHtml(q.q)}</div>`;
  if (q.items && q.items.length) {
    const items = q.items
      .map((it, i) => `<li><span class="roman-i">${roman(i + 1)}.</span> ${escapeHtml(it)}</li>`)
      .join("");
    html += `<ul class="roman-list">${items}</ul>`;
  }
  return html;
}

function roman(n) {
  return ["", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii"][n] || String(n);
}

/* Interactive option inputs (radios for single, checkboxes for multi). */
function renderOptionInputs(q, qi) {
  const inputType = q.type === "multi" ? "checkbox" : "radio";
  return q.options
    .map(
      (opt, oi) => `
      <label class="option" data-q="${qi}" data-o="${oi}">
        <input type="${inputType}" name="q${qi}" value="${oi}">
        <span class="opt-letter">${letter(oi)}</span>
        <span class="opt-text">${escapeHtml(opt)}</span>
      </label>`
    )
    .join("");
}

/* A full interactive question card. */
function renderQuestionCard(q, qi, total, showSource) {
  const src = showSource && q._sub ? `<span class="qsrc">${q._sub} ${escapeHtml(q._subTitle)}</span>` : "";
  return `
    <div class="qcard" id="qcard-${qi}">
      <div class="qnum">Question ${qi + 1} <span class="qof">/ ${total}</span> ${loTag(q)} ${src}</div>
      ${renderStem(q)}
      <div class="select-hint">${selectHint(q)}</div>
      <div class="options">${renderOptionInputs(q, qi)}</div>
      <div class="hint-row">
        <button type="button" class="btn ghost small hint-btn" data-q="${qi}">💡 Hint</button>
        <span class="hint-text" data-q="${qi}" hidden></span>
      </div>
    </div>`;
}

/* Wire the per-question Hint buttons. Reveals the correct option(s) by
   marking them and naming the letters, so the learner can self-check before
   submitting. Toggling hides it again. */
function attachHintHandlers(container, questions) {
  container.querySelectorAll(".hint-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const qi = +btn.dataset.q;
      const q = questions[qi];
      const card = container.querySelector(`#qcard-${qi}`);
      const textEl = card.querySelector(".hint-text");
      const opts = card.querySelectorAll(".option");
      const showing = btn.classList.toggle("revealed");
      const ans = answerArray(q);
      opts.forEach((o) => o.classList.toggle("hint-correct", showing && ans.includes(+o.dataset.o)));
      if (showing) {
        const letters = ans.slice().sort((a, b) => a - b).map(letter).join(" & ");
        textEl.textContent = `Correct: ${letters}`;
        textEl.hidden = false;
        btn.textContent = "💡 Hide hint";
      } else {
        textEl.hidden = true;
        btn.textContent = "💡 Hint";
      }
    });
  });
}

/* Wire change handlers so selections[] always holds an array of chosen indices. */
function attachSelectionHandlers(container, questions, selections, onChange) {
  container.querySelectorAll(".option input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const label = e.target.closest(".option");
      const qi = +label.dataset.q;
      const oi = +label.dataset.o;
      if (e.target.type === "radio") {
        selections[qi] = [oi];
        container
          .querySelectorAll(`.option[data-q="${qi}"]`)
          .forEach((l) => l.classList.remove("selected"));
        label.classList.add("selected");
      } else {
        const set = new Set(selections[qi] || []);
        if (e.target.checked) set.add(oi);
        else set.delete(oi);
        selections[qi] = [...set];
        label.classList.toggle("selected", e.target.checked);
      }
      if (onChange) onChange();
    });
  });
}

/* Count questions that have at least one selection. */
function countAnswered(selections) {
  return selections.filter((s) => s && s.length > 0).length;
}

/* A review card showing every option with its justification, the correct
   answer(s) marked, and the user's choice(s) highlighted. */
function renderReviewCard(q, qi, selection) {
  const ans = new Set(answerArray(q));
  const sel = new Set(selection || []);
  const isCorrect = sameSelection([...ans], [...sel]);

  const opts = q.options
    .map((opt, oi) => {
      const correct = ans.has(oi);
      const chosen = sel.has(oi);
      let cls = "rev-opt";
      if (correct) cls += " correct";
      if (chosen && !correct) cls += " chosen-wrong";
      const mark = correct ? "✔" : chosen ? "✘" : "";
      const tags =
        (chosen ? '<span class="chip you">your choice</span>' : "") +
        (correct ? '<span class="chip ok">correct</span>' : "");
      const just = q.justifications && q.justifications[oi]
        ? `<div class="rev-just">${escapeHtml(q.justifications[oi])}</div>`
        : "";
      return `
        <li class="${cls}">
          <div class="rev-line">
            <span class="rev-letter">${letter(oi)}</span>
            <span class="rev-text">${escapeHtml(opt)}</span>
            <span class="rev-mark">${mark}</span>
          </div>
          <div class="rev-tags">${tags}</div>
          ${just}
        </li>`;
    })
    .join("");

  const src = q._sub ? `<span class="qsrc">${q._sub}</span>` : "";
  return `
    <div class="review-card ${isCorrect ? "right" : "wrong"}">
      <div class="qnum">Question ${qi + 1} ${loTag(q)} ${src}</div>
      ${renderStem(q)}
      <ul class="rev-opts">${opts}</ul>
    </div>`;
}

window.letter = letter;
window.selectHint = selectHint;
window.renderQuestionCard = renderQuestionCard;
window.attachHintHandlers = attachHintHandlers;
window.attachSelectionHandlers = attachSelectionHandlers;
window.countAnswered = countAnswered;
window.renderReviewCard = renderReviewCard;
