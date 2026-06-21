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
               `<li><a href="#/sub/${w.id}">${w.id} ${escapeHtml(w.title)}</a> &middot; ${escapeHtml(
                 w.set
               )} ${w.best === null ? "(not attempted)" : "(" + w.best + "%)"}</li>`
           )
           .join("")}</ul>
       </div>`
    : `<div class="weak card"><h3>Focus areas</h3><p class="muted">All attempted sets are at or above 65%. 🎉</p></div>`;

  appEl().innerHTML = `
    <div class="hero card">
      <div>
        <h2>Practice by subchapter or take a full mock exam</h2>
        <p class="muted">Based on the ISTQB Certified Tester Foundation Level Syllabus v4.0.1.</p>
      </div>
      <a class="btn primary big" href="#/exam">
        Mock Exam${examBest !== null ? ` · best ${examBest}%` : ""}
      </a>
    </div>
    ${weakHtml}
    ${chapters}`;
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
  } else {
    renderHome();
  }
  highlightNav();
}

function highlightNav() {
  const onExam = location.hash.startsWith("#/exam");
  document.getElementById("navHome").classList.toggle("active", !onExam);
  document.getElementById("navExam").classList.toggle("active", onExam);
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
