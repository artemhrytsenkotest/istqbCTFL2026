/* Small shared helpers used across the app. */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* Fisher-Yates shuffle, returns a new array. */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Pick n random distinct items from arr (or all if fewer than n). */
function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}

/* Build a question with its options shuffled, keeping the correct answer(s)
   and the parallel per-option justifications in sync. Supports single-answer
   (answer is a number) and multi-select (answer is an array of numbers). */
function shuffleOptions(q) {
  const order = shuffle(q.options.map((_, i) => i));
  const options = order.map((i) => q.options[i]);
  const justifications = q.justifications ? order.map((i) => q.justifications[i]) : null;
  let answer;
  if (Array.isArray(q.answer)) {
    answer = q.answer.map((a) => order.indexOf(a)).sort((x, y) => x - y);
  } else {
    answer = order.indexOf(q.answer);
  }
  return { ...q, options, answer, justifications };
}

/* Normalize a question's answer to an array of indices. */
function answerArray(q) {
  return Array.isArray(q.answer) ? q.answer : [q.answer];
}

/* True when two index arrays contain exactly the same values. */
function sameSelection(a, b) {
  if (a.length !== b.length) return false;
  const setB = new Set(b);
  return a.every((x) => setB.has(x));
}

window.escapeHtml = escapeHtml;
window.shuffle = shuffle;
window.sample = sample;
window.shuffleOptions = shuffleOptions;
window.answerArray = answerArray;
window.sameSelection = sameSelection;
