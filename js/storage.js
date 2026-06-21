/* Thin wrapper over localStorage for theme + best scores. Fails safe when
   localStorage is unavailable (e.g. some file:// privacy settings). */

const STORAGE_KEY = "istqb_prep_v1";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    /* ignore: progress simply won't persist */
  }
}

/* Record a percentage (0-100) for a quiz/exam key, keeping only the best. */
function recordScore(key, pct) {
  const s = loadState();
  s.scores = s.scores || {};
  if (!(key in s.scores) || pct > s.scores[key]) {
    s.scores[key] = pct;
    saveState(s);
  }
}

function getBestScore(key) {
  const s = loadState();
  return s.scores && key in s.scores ? s.scores[key] : null;
}

function quizKey(subId, setIdx) {
  return "quiz:" + subId + ":" + setIdx;
}

function getTheme() {
  return loadState().theme || "light";
}

function setTheme(theme) {
  const s = loadState();
  s.theme = theme;
  saveState(s);
}

window.recordScore = recordScore;
window.getBestScore = getBestScore;
window.quizKey = quizKey;
window.getTheme = getTheme;
window.setTheme = setTheme;
