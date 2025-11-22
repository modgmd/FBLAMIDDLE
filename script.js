const questions = [
  { q: "What does CPU stand for?", opts: ["Central Power Unit", "Central Processing Unit", "Computer Processing Unit", "Control Processing User"], a: 1 },
  { q: "Which language is mainly used for styling web pages?", opts: ["Python", "CSS", "C++", "SQL"], a: 1 },
  { q: "What does HTML stand for?", opts: ["HyperText Markup Language", "Hyper Trainer Markup Language", "Home Tool Markup Language", "HyperText Markdown Logic"], a: 0 },
  { q: "Which keyword starts a function in JavaScript?", opts: ["func", "def", "function", "define"], a: 2 },
  { q: "True or False: JavaScript is case sensitive.", opts: ["True", "False"], a: 0 },
  { q: "Which symbol is used for comments in JavaScript?", opts: ["//", "#", "/* */", "<!-- -->"], a: 0 },
  { q: "Which data type is True/False in JavaScript?", opts: ["Number", "Boolean", "String", "Object"], a: 1 },
  { q: "What is the output of `2 + 3 * 2`?", opts: ["10", "8", "12", "7"], a: 1 },
  { q: "What do we call a mistake in code?", opts: ["Bug", "Glitch", "Error", "All of the above"], a: 3 },
  { q: "What is HTML used for?", opts: ["Structuring web pages", "Styling web pages", "Programming logic", "Database management"], a: 0 }
];

let current = 0;
let score = 0;

const menuEl = document.getElementById('menu');
const quizEl = document.getElementById('quiz');
const resultEl = document.getElementById('result');
const howtoEl = document.getElementById('howto');

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart');
const howBtn = document.getElementById('how');
const backBtn = document.getElementById('back');
const startBtn = document.getElementById('start');

startBtn.onclick = () => {
  menuEl.classList.add('hidden');
  quizEl.classList.remove('hidden');
  showQuestion();
};

howBtn.onclick = () => {
  menuEl.classList.add('hidden');
  howtoEl.classList.remove('hidden');
};

backBtn.onclick = () => {
  howtoEl.classList.add('hidden');
  menuEl.classList.remove('hidden');
};

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

restartBtn.onclick = () => {
  current = 0;
  score = 0;
  resultEl.classList.add('hidden');
  menuEl.classList.remove('hidden');
};

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === q.a) {
        score++;
      }
      nextBtn.click();
    };
    optionsEl.appendChild(btn);
  });
}

function showResult() {
  quizEl.classList.add('hidden');
  resultEl.classList.remove('hidden');
  const percent = (score / questions.length) * 100;
  scoreEl.textContent = `You scored ${score} out of ${questions.length} (${percent.toFixed(2)}%)`;
}
