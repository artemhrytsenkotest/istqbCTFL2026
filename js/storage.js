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

/* ---- History of completed attempts ----
   Each entry snapshots enough to re-render the full review later:
   { kind, title, sub, pct, correct, total, date, timedOut?, questions, selections } */
const HISTORY_CAP = 100;

function recordAttempt(entry) {
  const s = loadState();
  s.history = s.history || [];
  s.history.unshift({ ...entry, date: Date.now() });
  if (s.history.length > HISTORY_CAP) s.history.length = HISTORY_CAP;
  saveState(s);
}

function getHistory() {
  return loadState().history || [];
}

function getAttempt(index) {
  const h = getHistory();
  return index >= 0 && index < h.length ? h[index] : null;
}

/* ---- Study material "learned" state ----
   A flat map of card keys the user has marked as learned: { "learn:1.1:0": true } */
function learnKey(subId, idx) {
  return "learn:" + subId + ":" + idx;
}

function setLearned(key, val) {
  const s = loadState();
  s.learned = s.learned || {};
  if (val) s.learned[key] = true;
  else delete s.learned[key];
  saveState(s);
}

function isLearned(key) {
  const s = loadState();
  return !!(s.learned && s.learned[key]);
}

/* Number of learned cards for a subchapter (keys "learn:<subId>:*"). */
function countLearned(subId) {
  const s = loadState();
  if (!s.learned) return 0;
  const prefix = "learn:" + subId + ":";
  return Object.keys(s.learned).filter((k) => k.startsWith(prefix)).length;
}

/* Wipe all scores, history, and learned state (keeps theme). */
function resetProgress() {
  const s = loadState();
  delete s.scores;
  delete s.history;
  delete s.learned;
  saveState(s);
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
window.learnKey = learnKey;
window.setLearned = setLearned;
window.isLearned = isLearned;
window.countLearned = countLearned;
window.recordAttempt = recordAttempt;
window.getHistory = getHistory;
window.getAttempt = getAttempt;
window.resetProgress = resetProgress;
window.getTheme = getTheme;
window.setTheme = setTheme;
