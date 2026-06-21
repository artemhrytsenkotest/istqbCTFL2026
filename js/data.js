/* Syllabus structure (ISTQB CTFL v4.0.1) and the in-memory question bank.
   Question data files (data/questions/q-X-Y.js) call registerQuestions() to
   populate QUESTION_BANK. Loaded via <script> tags so the app needs no server. */

const SYLLABUS = [
  {
    id: "1",
    title: "Fundamentals of Testing",
    subchapters: [
      { id: "1.1", title: "What is Testing?" },
      { id: "1.2", title: "Why is Testing Necessary?" },
      { id: "1.3", title: "Testing Principles" },
      { id: "1.4", title: "Test Activities, Testware and Test Roles" },
      { id: "1.5", title: "Essential Skills and Good Practices in Testing" },
    ],
  },
  {
    id: "2",
    title: "Testing Throughout the Software Development Lifecycle",
    subchapters: [
      { id: "2.1", title: "Testing in the Context of a SDLC" },
      { id: "2.2", title: "Test Levels and Test Types" },
      { id: "2.3", title: "Maintenance Testing" },
    ],
  },
  {
    id: "3",
    title: "Static Testing",
    subchapters: [
      { id: "3.1", title: "Static Testing Basics" },
      { id: "3.2", title: "Feedback and Review Process" },
    ],
  },
  {
    id: "4",
    title: "Test Analysis and Design",
    subchapters: [
      { id: "4.1", title: "Test Techniques Overview" },
      { id: "4.2", title: "Black-Box Test Techniques" },
      { id: "4.3", title: "White-Box Test Techniques" },
      { id: "4.4", title: "Experience-based Test Techniques" },
      { id: "4.5", title: "Collaboration-based Test Approaches" },
    ],
  },
  {
    id: "5",
    title: "Managing the Test Activities",
    subchapters: [
      { id: "5.1", title: "Test Planning" },
      { id: "5.2", title: "Risk Management" },
      { id: "5.3", title: "Test Monitoring, Test Control and Test Completion" },
      { id: "5.4", title: "Configuration Management" },
      { id: "5.5", title: "Defect Management" },
    ],
  },
  {
    id: "6",
    title: "Test Tools",
    subchapters: [
      { id: "6.1", title: "Tool Support for Testing" },
      { id: "6.2", title: "Benefits and Risks of Test Automation" },
    ],
  },
];

/* Populated by the data/questions/*.js files. Keyed by subchapter id:
   QUESTION_BANK["1.1"] = { title, sets: [ { name, questions: [...] } ] } */
const QUESTION_BANK = {};

function registerQuestions(id, data) {
  QUESTION_BANK[id] = data;
}

/* Returns the flat list of subchapter meta objects for a chapter. */
function getSubchapter(id) {
  for (const ch of SYLLABUS) {
    const sub = ch.subchapters.find((s) => s.id === id);
    if (sub) return sub;
  }
  return null;
}

/* True when a subchapter has at least one authored question set. */
function hasContent(id) {
  return !!(QUESTION_BANK[id] && QUESTION_BANK[id].sets && QUESTION_BANK[id].sets.length);
}

/* All authored questions across every loaded subchapter (for the mock exam),
   each tagged with its origin so the review can show where it came from. */
function allQuestions() {
  const out = [];
  for (const id of Object.keys(QUESTION_BANK)) {
    const bank = QUESTION_BANK[id];
    bank.sets.forEach((set, si) => {
      set.questions.forEach((q) => out.push({ ...q, _sub: id, _subTitle: bank.title }));
    });
  }
  return out;
}

window.SYLLABUS = SYLLABUS;
window.QUESTION_BANK = QUESTION_BANK;
window.registerQuestions = registerQuestions;
window.getSubchapter = getSubchapter;
window.hasContent = hasContent;
window.allQuestions = allQuestions;
