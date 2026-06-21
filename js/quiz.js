/* Quiz engine: answer-at-end. Renders all questions, waits for Submit, then
   scores (single- and multi-select) and shows per-option justifications for
   the questions answered incorrectly. */

function renderQuiz(container, subId, setIdx) {
  const bank = QUESTION_BANK[subId];
  if (!bank || !bank.sets[setIdx]) {
    container.innerHTML = "<p>Quiz not found.</p>";
    return;
  }
  const sub = getSubchapter(subId);
  const set = bank.sets[setIdx];

  // Shuffle question order and each question's options for this attempt.
  const questions = shuffle(set.questions).map(shuffleOptions);
  const selections = questions.map(() => []);

  function updateProgress() {
    container.querySelector("#progressline").textContent =
      `Answered ${countAnswered(selections)} / ${questions.length}`;
  }

  function renderForm() {
    const cards = questions.map((q, qi) => renderQuestionCard(q, qi, questions.length, false)).join("");
    container.innerHTML = `
      <div class="crumbs"><a href="#/sub/${subId}">&larr; ${escapeHtml(sub.title)}</a></div>
      <h2>${subId} ${escapeHtml(sub.title)} &middot; ${escapeHtml(set.name)}</h2>
      <p class="muted">Answer all ${questions.length} questions, then submit to see your score and explanations for anything you missed.</p>
      <div id="progressline" class="progressline muted">Answered 0 / ${questions.length}</div>
      ${cards}
      <div class="quiz-actions">
        <button class="btn primary" id="submitBtn">Submit answers</button>
        <a class="btn" href="#/sub/${subId}">Cancel</a>
      </div>`;

    attachSelectionHandlers(container, questions, selections, updateProgress);
    container.querySelector("#submitBtn").addEventListener("click", () => {
      const unanswered = questions.length - countAnswered(selections);
      if (unanswered > 0) {
        if (!confirm(`${unanswered} question(s) are unanswered and will be marked wrong. Submit anyway?`)) return;
      }
      showResults();
    });
    window.scrollTo(0, 0);
  }

  function showResults() {
    let correct = 0;
    const wrong = [];
    questions.forEach((q, qi) => {
      if (sameSelection(answerArray(q), selections[qi])) correct++;
      else wrong.push(qi);
    });
    const total = questions.length;
    const pct = Math.round((correct / total) * 100);
    recordScore(quizKey(subId, setIdx), pct);
    const passed = pct >= 65;

    const reviewItems = wrong.map((qi) => renderReviewCard(questions[qi], qi, selections[qi])).join("");

    container.innerHTML = `
      <div class="crumbs"><a href="#/sub/${subId}">&larr; ${escapeHtml(sub.title)}</a></div>
      <h2>${subId} ${escapeHtml(sub.title)} &middot; ${escapeHtml(set.name)}</h2>
      <div class="score-banner ${passed ? "pass" : "fail"}">
        <div class="score-pct">${pct}%</div>
        <div class="score-detail">
          <div>${correct} / ${total} correct</div>
          <div class="score-tag">${passed ? "Pass (≥ 65%)" : "Below 65% pass mark"}</div>
        </div>
      </div>
      ${
        wrong.length
          ? `<h3>Review &mdash; ${wrong.length} to revisit</h3>
             <p class="muted">Every option is explained below; ✔ marks correct answers, ✘ marks your incorrect picks.</p>
             ${reviewItems}`
          : `<div class="all-correct">Perfect score! Every question correct. ✅</div>`
      }
      <div class="quiz-actions">
        <button class="btn primary" id="retryBtn">Retry this set</button>
        <a class="btn" href="#/sub/${subId}">Back to subchapter</a>
        <a class="btn" href="#/">Home</a>
      </div>`;
    container.querySelector("#retryBtn").addEventListener("click", () => renderQuiz(container, subId, setIdx));
    window.scrollTo(0, 0);
  }

  renderForm();
}

window.renderQuiz = renderQuiz;
