/* Mock exam: real ISTQB CTFL format — 40 random questions across all authored
   subchapters, 75-minute countdown, auto-submit on timeout, 65% (26/40) pass.
   Full per-option review afterwards. */

const EXAM_SIZE = 40;
const EXAM_MINUTES = 75;
const EXAM_PASS = 26; // 65% of 40

function renderExam(container) {
  const pool = allQuestions();

  function renderIntro() {
    const enough = pool.length >= EXAM_SIZE;
    const best = getBestScore("exam");
    container.innerHTML = `
      <div class="crumbs"><a href="#/">&larr; Home</a></div>
      <h2>Mock Exam</h2>
      <div class="exam-info card">
        <ul>
          <li><strong>${EXAM_SIZE}</strong> questions drawn at random from all available subchapters</li>
          <li><strong>${EXAM_MINUTES} minutes</strong> &mdash; a countdown timer auto-submits when time runs out</li>
          <li>Pass mark: <strong>${EXAM_PASS} / ${EXAM_SIZE} (65%)</strong>, matching the real CTFL exam</li>
          <li>Mix of single- and multi-select questions; full per-option explanations in the review</li>
        </ul>
        ${best !== null ? `<p class="muted">Your best mock-exam score: <strong>${best}%</strong></p>` : ""}
        ${
          enough
            ? `<button class="btn primary" id="startExam">Start exam</button>`
            : `<p class="warn">Only ${pool.length} questions are currently available. The mock exam needs ${EXAM_SIZE}. Add more chapter content to unlock it.</p>`
        }
      </div>`;
    if (enough) container.querySelector("#startExam").addEventListener("click", runExam);
  }

  function runExam() {
    const questions = sample(pool, EXAM_SIZE).map(shuffleOptions);
    const selections = questions.map(() => []);
    let remaining = EXAM_MINUTES * 60;
    let timerId = null;

    function fmt(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return m + ":" + String(s).padStart(2, "0");
    }
    function updateAnswered() {
      const el = container.querySelector("#examAnswered");
      if (el) el.textContent = `${countAnswered(selections)} / ${questions.length}`;
    }

    function render() {
      const cards = questions.map((q, qi) => renderQuestionCard(q, qi, questions.length, true)).join("");
      container.innerHTML = `
        <div class="exam-bar" id="examBar">
          <span>Mock Exam</span>
          <span class="timer" id="timer">${fmt(remaining)}</span>
          <span id="examAnswered">0 / ${questions.length}</span>
          <button class="btn primary small" id="finishBtn">Finish</button>
        </div>
        <div class="exam-body">
          ${cards}
          <div class="quiz-actions">
            <button class="btn primary" id="finishBtn2">Finish exam</button>
          </div>
        </div>`;

      attachSelectionHandlers(container, questions, selections, updateAnswered);
      attachHintHandlers(container, questions);
      const finish = () => {
        if (confirm("Finish the exam and see your result?")) submit(false);
      };
      container.querySelector("#finishBtn").addEventListener("click", finish);
      container.querySelector("#finishBtn2").addEventListener("click", finish);
      window.scrollTo(0, 0);
    }

    function tick() {
      remaining--;
      const t = container.querySelector("#timer");
      if (t) {
        t.textContent = fmt(remaining);
        if (remaining <= 60) t.classList.add("urgent");
      }
      if (remaining <= 0) {
        clearInterval(timerId);
        submit(true);
      }
    }

    function submit(timedOut) {
      clearInterval(timerId);
      let correct = 0;
      questions.forEach((q, qi) => {
        if (sameSelection(answerArray(q), selections[qi])) correct++;
      });
      const review = questions.map((q, qi) => renderReviewCard(q, qi, selections[qi])).join("");
      const pct = Math.round((correct / questions.length) * 100);
      const passed = correct >= EXAM_PASS;
      recordScore("exam", pct);
      recordAttempt({
        kind: "exam",
        title: "Mock Exam",
        pct, correct, total: questions.length,
        timedOut,
        questions, selections,
      });

      container.innerHTML = `
        <div class="crumbs"><a href="#/">&larr; Home</a></div>
        <h2>Mock Exam Result</h2>
        ${timedOut ? `<p class="warn">Time expired — the exam was submitted automatically.</p>` : ""}
        <div class="score-banner ${passed ? "pass" : "fail"}">
          <div class="score-pct">${pct}%</div>
          <div class="score-detail">
            <div>${correct} / ${questions.length} correct</div>
            <div class="score-tag">${passed ? "PASS" : "FAIL"} — pass mark ${EXAM_PASS}/${questions.length}</div>
          </div>
        </div>
        <h3>Full review</h3>
        ${review}
        <div class="quiz-actions">
          <button class="btn primary" id="againBtn">New mock exam</button>
          <a class="btn" href="#/">Home</a>
        </div>`;
      container.querySelector("#againBtn").addEventListener("click", () => renderExam(container));
      window.scrollTo(0, 0);
    }

    render();
    timerId = setInterval(tick, 1000);
  }

  renderIntro();
}

window.renderExam = renderExam;
