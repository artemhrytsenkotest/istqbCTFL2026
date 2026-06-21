/* App shell: hash router, home + subchapter screens, theme toggle. */

function appEl() {
  return document.getElementById("app");
}

function scoreBadge(key) {
  const best = getBestScore(key);
  if (best === null) return `<span class="badge none">Not attempted</span>`;
  const cls = best >= 65 ? "good" : "low";
  return `<span class="badge ${cls}">Best ${best}%</span>`;
}

/* ---- Home ---- */
function renderHome() {
  const examBest = getBestScore("exam");

  // Weak areas: authored sets where best score < 65% (or never attempted).
  const weak = [];
  SYLLABUS.forEach((ch) =>
    ch.subchapters.forEach((sub) => {
      if (!hasContent(sub.id)) return;
      QUESTION_BANK[sub.id].sets.forEach((set, si) => {
        const best = getBestScore(quizKey(sub.id, si));
        if (best === null || best < 65) {
          weak.push({ id: sub.id, title: sub.title, set: set.name, best });
        }
      });
    })
  );

  const chapters = SYLLABUS.map((ch) => {
    const subs = ch.subchapters
      .map((sub) => {
        const ready = hasContent(sub.id);
        const status = ready
          ? `<span class="badge good">${QUESTION_BANK[sub.id].sets.length} sets</span>`
          : `<span class="badge soon">Coming soon</span>`;
        const inner = `
            <span class="sub-id">${sub.id}</span>
            <span class="sub-title">${escapeHtml(sub.title)}</span>
            ${status}`;
        return ready
          ? `<a class="sub-row" href="#/sub/${sub.id}">${inner}</a>`
          : `<div class="sub-row disabled" aria-disabled="true">${inner}</div>`;
      })
      .join("");
    return `
      <section class="chapter">
        <h3>${ch.id}. ${escapeHtml(ch.title)}</h3>
        <div class="sub-list">${subs}</div>
      </section>`;
  }).join("");

  const weakHtml = weak.length
    ? `<div class="weak card">
         <h3>Focus areas <span class="count">${weak.length}</span></h3>
         <p class="muted">Quiz sets below the 65% pass mark (or not yet attempted):</p>
         <ul class="weak-list">${weak
           .map(
             (w) =>
               `<li><a href="#/sub/${w.id}">${w.id} ${escapeHtml(w.title)}</a><span class="weak-set">${escapeHtml(
                 w.set
               )} ${w.best === null ? "(not attempted)" : "(" + w.best + "%)"}</span></li>`
           )
           .join("")}</ul>
       </div>`
    : `<div class="weak card"><h3>Focus areas</h3><p class="muted">All attempted sets are at or above 65%. 🎉</p></div>`;

  const attempts = getHistory().length;

  appEl().innerHTML = `
    <div class="hero card">
      <div>
        <h2>Practice by subchapter or take a full mock exam</h2>
        <p class="muted">Based on the ISTQB Certified Tester Foundation Level Syllabus v4.0.1.</p>
      </div>
      <div class="hero-actions">
        <a class="btn primary big" href="#/exam">
          Mock Exam${examBest !== null ? ` · best ${examBest}%` : ""}
        </a>
        <a class="btn" href="#/history">History${attempts ? ` (${attempts})` : ""}</a>
        <button class="btn ghost danger" id="resetBtn" type="button">Reset progress</button>
      </div>
    </div>
    ${weakHtml}
    ${chapters}`;

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (
      confirm(
        "Reset all progress?\n\nThis permanently deletes your best scores and your test history on this device. This cannot be undone."
      )
    ) {
      resetProgress();
      renderHome();
    }
  });
}

/* ---- History list ---- */
function fmtDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function renderHistory() {
  const history = getHistory();
  const rows = history
    .map((h, i) => {
      const passed = h.kind === "exam" ? h.correct >= 26 : h.pct >= 65;
      return `
        <a class="hist-row" href="#/history/${i}">
          <span class="hist-kind ${h.kind}">${h.kind === "exam" ? "Exam" : "Quiz"}</span>
          <span class="hist-title">${escapeHtml(h.title)}</span>
          <span class="hist-score badge ${passed ? "good" : "low"}">${h.pct}% · ${h.correct}/${h.total}</span>
          <span class="hist-date muted">${fmtDate(h.date)}</span>
        </a>`;
    })
    .join("");

  appEl().innerHTML = `
    <div class="crumbs"><a href="#/">&larr; Home</a></div>
    <h2>Test History</h2>
    ${
      history.length
        ? `<p class="muted">Your last ${history.length} completed attempt(s). Open any to review every question and explanation.</p>
           <div class="hist-list">${rows}</div>`
        : `<div class="card"><p>No completed tests yet. Finish a quiz set or a mock exam and it will appear here.</p></div>`
    }`;
}

/* ---- History detail (re-render the stored review) ---- */
function renderHistoryDetail(index) {
  const a = getAttempt(index);
  if (!a) {
    appEl().innerHTML = `<div class="crumbs"><a href="#/history">&larr; History</a></div><p>Attempt not found.</p>`;
    return;
  }
  const passed = a.kind === "exam" ? a.correct >= 26 : a.pct >= 65;
  const review = a.questions.map((q, qi) => renderReviewCard(q, qi, a.selections[qi])).join("");
  appEl().innerHTML = `
    <div class="crumbs"><a href="#/history">&larr; History</a></div>
    <h2>${escapeHtml(a.title)}</h2>
    <p class="muted">${fmtDate(a.date)}${a.timedOut ? " · time expired" : ""}</p>
    <div class="score-banner ${passed ? "pass" : "fail"}">
      <div class="score-pct">${a.pct}%</div>
      <div class="score-detail">
        <div>${a.correct} / ${a.total} correct</div>
        <div class="score-tag">${passed ? "Pass" : "Below pass mark"}</div>
      </div>
    </div>
    <h3>Full review</h3>
    ${review}
    <div class="quiz-actions">
      <a class="btn" href="#/history">Back to history</a>
      <a class="btn" href="#/">Home</a>
    </div>`;
  window.scrollTo(0, 0);
}

/* ---- Subchapter (3 sets) ---- */
function renderSubchapter(subId) {
  const sub = getSubchapter(subId);
  if (!sub) {
    appEl().innerHTML = `<p>Unknown subchapter.</p><a class="btn" href="#/">Home</a>`;
    return;
  }
  if (!hasContent(subId)) {
    appEl().innerHTML = `
      <div class="crumbs"><a href="#/">&larr; Home</a></div>
      <h2>${subId} ${escapeHtml(sub.title)}</h2>
      <div class="card"><p>Questions for this subchapter are coming soon.</p></div>`;
    return;
  }
  const bank = QUESTION_BANK[subId];
  const sets = bank.sets
    .map(
      (set, si) => `
      <a class="set-card" href="#/quiz/${subId}/${si}">
        <div class="set-name">${escapeHtml(set.name)}</div>
        <div class="set-meta">${set.questions.length} questions</div>
        ${scoreBadge(quizKey(subId, si))}
      </a>`
    )
    .join("");

  appEl().innerHTML = `
    <div class="crumbs"><a href="#/">&larr; Home</a></div>
    <h2>${subId} ${escapeHtml(sub.title)}</h2>
    <p class="muted">Choose a quiz set. Each has ${bank.sets[0].questions.length} questions; you'll see explanations for anything you miss.</p>
    <div class="set-list">${sets}</div>`;
}

/* ---- Router ---- */
function router() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean); // e.g. ["sub","1.1"]
  const root = appEl();

  if (parts.length === 0) {
    renderHome();
  } else if (parts[0] === "sub" && parts[1]) {
    renderSubchapter(parts[1]);
  } else if (parts[0] === "quiz" && parts[1] != null && parts[2] != null) {
    renderQuiz(root, parts[1], +parts[2]);
  } else if (parts[0] === "exam") {
    renderExam(root);
  } else if (parts[0] === "history" && parts[1] != null) {
    renderHistoryDetail(+parts[1]);
  } else if (parts[0] === "history") {
    renderHistory();
  } else {
    renderHome();
  }
  highlightNav();
}

function highlightNav() {
  const hash = location.hash;
  const onExam = hash.startsWith("#/exam");
  const onHistory = hash.startsWith("#/history");
  document.getElementById("navHome").classList.toggle("active", !onExam && !onHistory);
  document.getElementById("navExam").classList.toggle("active", onExam);
  document.getElementById("navHistory").classList.toggle("active", onHistory);
}

/* ---- Theme ---- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
}

function initTheme() {
  applyTheme(getTheme());
  document.getElementById("themeBtn").addEventListener("click", () => {
    const next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  });
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  router();
});
