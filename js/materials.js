/* Study tab: interactive, memory-friendly study material per subchapter.
   renderMaterialsHome() lists chapters; renderStudy(subId) renders one
   "mixed study page" (big picture + flip cards + tables + mnemonics +
   self-checks). Content lives in data/materials/m-X-Y.js. */

function studyEl() {
  return document.getElementById("app");
}

/* Total number of learnable (flip) cards authored for a subchapter. */
function countCards(mat) {
  let n = 0;
  mat.blocks.forEach((b) => {
    if (b.type === "cards") n += b.cards.length;
  });
  return n;
}

/* ---- Study home: chapter / subchapter list ---- */
function renderMaterialsHome() {
  const chapters = SYLLABUS.map((ch) => {
    const subs = ch.subchapters
      .map((sub) => {
        const ready = hasMaterials(sub.id);
        let status, progress;
        if (ready) {
          const total = countCards(getMaterials(sub.id));
          const learned = countLearned(sub.id);
          const done = total > 0 && learned >= total;
          status = `<span class="badge ${done ? "good" : "none"}">${learned}/${total} learned</span>`;
        } else {
          status = `<span class="badge soon">Coming soon</span>`;
        }
        const inner = `
            <span class="sub-id">${sub.id}</span>
            <span class="sub-title">${escapeHtml(sub.title)}</span>
            ${status}`;
        return ready
          ? `<a class="sub-row" href="#/study/${sub.id}">${inner}</a>`
          : `<div class="sub-row disabled" aria-disabled="true">${inner}</div>`;
      })
      .join("");
    return `
      <section class="chapter">
        <h3>${ch.id}. ${escapeHtml(ch.title)}</h3>
        <div class="sub-list">${subs}</div>
      </section>`;
  }).join("");

  studyEl().innerHTML = `
    <div class="hero card">
      <div>
        <h2>Study material</h2>
        <p class="muted">Bite-size, memory-friendly notes for each subchapter — flip the cards, scan the
        comparisons, then test yourself in the Syllabus tab.</p>
      </div>
    </div>
    ${chapters}`;
}

/* ---- One study page ---- */
function renderStudy(subId) {
  const sub = getSubchapter(subId);
  const mat = getMaterials(subId);
  if (!sub) {
    studyEl().innerHTML = `<p>Unknown subchapter.</p><a class="btn" href="#/study">Study</a>`;
    return;
  }
  if (!mat) {
    studyEl().innerHTML = `
      <div class="crumbs"><a href="#/study">&larr; Study</a></div>
      <h2>${subId} ${escapeHtml(sub.title)}</h2>
      <div class="card"><p>Study material for this subchapter is coming soon.</p></div>`;
    return;
  }

  const total = countCards(mat);
  const learned = countLearned(subId);
  const los = (mat.los || [])
    .map((lo) => `<span class="lo-tag">${escapeHtml(lo)}</span>`)
    .join("");

  // Render blocks; keep a running global card index for stable learn keys.
  let cardIdx = 0;
  const blocks = mat.blocks
    .map((b) => {
      if (b.type === "cards") {
        const cards = b.cards
          .map((c) => {
            const key = learnKey(subId, cardIdx++);
            const done = isLearned(key);
            return `
              <div class="flip-card${done ? " learned" : ""}" data-flip>
                <div class="flip-body">
                  <div class="flip-front">
                    <div class="flip-term">${escapeHtml(c.front)}</div>
                    <div class="flip-hint">tap to reveal &#8635;</div>
                  </div>
                  <div class="flip-back">${escapeHtml(c.back)}</div>
                </div>
                <button class="flip-learn" type="button" data-learn="${key}">
                  ${done ? "&#10003; Learned" : "Mark learned"}
                </button>
              </div>`;
          })
          .join("");
        return `
          <h3>${escapeHtml(b.heading)}</h3>
          <div class="flip-grid">${cards}</div>`;
      }
      if (b.type === "table") {
        const head = b.columns.map((c) => `<th>${escapeHtml(c)}</th>`).join("");
        const body = b.rows
          .map(
            (r) => `<tr>${r.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`
          )
          .join("");
        return `
          <h3>${escapeHtml(b.heading)}</h3>
          <table class="cmp-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
      }
      if (b.type === "list") {
        const items = b.items.map((it) => `<li>${escapeHtml(it)}</li>`).join("");
        const mnem = b.mnemonic
          ? `<div class="mnemonic-box"><span class="mnemonic-tag">Remember</span> ${escapeHtml(
              b.mnemonic
            )}</div>`
          : "";
        return `
          <h3>${escapeHtml(b.heading)}</h3>
          <ul class="study-list">${items}</ul>
          ${mnem}`;
      }
      if (b.type === "mnemonic") {
        return `<div class="mnemonic-box"><span class="mnemonic-tag">Remember</span> ${escapeHtml(
          b.text
        )}</div>`;
      }
      if (b.type === "selfcheck") {
        const items = b.items
          .map(
            (it) => `
            <div class="selfcheck">
              <div class="selfcheck-q">${escapeHtml(it.q)}</div>
              <button class="btn small selfcheck-btn" type="button">Show answer</button>
              <div class="selfcheck-a">${escapeHtml(it.a)}</div>
            </div>`
          )
          .join("");
        return `
          <h3>${escapeHtml(b.heading || "Quick self-check")}</h3>
          ${items}`;
      }
      return "";
    })
    .join("");

  studyEl().innerHTML = `
    <div id="studyRoot">
      <div class="crumbs"><a href="#/study">&larr; Study</a></div>
      <h2>${subId} ${escapeHtml(sub.title)} ${los}</h2>
      <p class="muted study-progress">Cards learned: <strong id="studyProgress">${learned}</strong> / ${total}</p>
      <div class="card big-picture">
        <span class="bp-tag">Big picture</span>
        <p>${escapeHtml(mat.bigPicture)}</p>
      </div>
      ${blocks}
      <div class="quiz-actions">
        <a class="btn" href="#/study">All study material</a>
        ${hasContent(subId) ? `<a class="btn primary" href="#/sub/${subId}">Test yourself on ${subId}</a>` : ""}
      </div>
    </div>`;

  attachStudyHandlers(subId);
  window.scrollTo(0, 0);
}

/* Event delegation for flips, "mark learned", and self-check reveals.
   Bound to the freshly-rendered #studyRoot so listeners don't accumulate
   on the persistent #app element across navigations. */
function attachStudyHandlers(subId) {
  const root = document.getElementById("studyRoot");
  if (!root) return;
  root.addEventListener("click", (e) => {
    const learnBtn = e.target.closest(".flip-learn");
    if (learnBtn) {
      const key = learnBtn.getAttribute("data-learn");
      const card = learnBtn.closest(".flip-card");
      const now = !card.classList.contains("learned");
      setLearned(key, now);
      card.classList.toggle("learned", now);
      learnBtn.innerHTML = now ? "&#10003; Learned" : "Mark learned";
      const counter = document.getElementById("studyProgress");
      if (counter) counter.textContent = String(countLearned(subId));
      return;
    }
    const checkBtn = e.target.closest(".selfcheck-btn");
    if (checkBtn) {
      const block = checkBtn.closest(".selfcheck");
      const open = block.classList.toggle("revealed");
      checkBtn.textContent = open ? "Hide answer" : "Show answer";
      return;
    }
    const flip = e.target.closest(".flip-card[data-flip]");
    if (flip) {
      flip.classList.toggle("flipped");
    }
  });
}

window.renderMaterialsHome = renderMaterialsHome;
window.renderStudy = renderStudy;
