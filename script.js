const questions = [
  { q: "What does FBLA stand for?", opts: ["Future Business Leaders of America", "Federal Business Leaders of America", "Future Banking Leaders of America", "Federal Banking Leaders of America"], a: 0 },
  { q: "Which FBLA level is for middle school students?", opts: ["High School", "Middle Level", "Collegiate", "Professional"], a: 1 },
  { q: "Which year was FBLA founded?", opts: ["1940", "1950", "1960", "1970"], a: 0 },
  { q: "What is the mission of FBLA?", opts: ["To prepare students for careers in business", "To train students for sports leadership", "To provide entertainment opportunities", "To organize school clubs"], a: 0 },
  { q: "In the Exploring Coding & Programming event, how many members can a team have?", opts: ["Only 1", "1-3 members", "4-6 members", "5 members only"], a: 1 },
  { q: "Exceeds expectations in code quality means:", opts: ["Logical, readable code with good comments", "Code that barely runs", "No need for comments", "Code that only the programmer understands"], a: 0 },
  { q: "User input validation is:", opts: ["Not required", "Scored in the rubric", "Optional", "Only for graphics"], a: 1 },
  { q: "Which of the following is part of user experience in the rubric?", opts: ["Intuitive interface and instructions", "Background music", "Number of lines of code", "Color of buttons only"], a: 0 },
  { q: "The program must address:", opts: ["Only one part of the prompt", "All parts of the prompt", "Optional features", "Graphics only"], a: 1 },
  { q: "Randomizing question order in a quiz demonstrates:", opts: ["Advanced functionality", "Minimal effort", "Poor code quality", "Unnecessary complexity"], a: 0 },
  { q: "What is considered modular programming?", opts: ["Code broken into functions that perform one task", "All code in one large function", "Copying code from the internet", "Using global variables only"], a: 0 },
  { q: "Which is a scoring method in the FBLA rubric?", opts: ["Percentage correct", "Time taken only", "Graphics quality", "Number of lines of code"], a: 0 },
  { q: "For data storage, variables should:", opts: ["Store one job, with correct data type", "Store multiple unrelated things", "Be unnamed", "Not be used"], a: 0 },
  { q: "Which advanced data storage can be used in the quiz?", opts: ["Arrays and lists", "Only global variables", "No storage", "Random numbers only"], a: 0 },
  { q: "Program reports should be:", opts: ["Error-free and provide necessary info", "Unavailable", "Minimal", "Optional"], a: 0 },
  { q: "Which skill does the Exploring Coding & Programming event highlight?", opts: ["Problem-solving with code", "Only typing speed", "Art skills", "Sports strategy"], a: 0 },
  { q: "Exceeds expectations in user interface means:", opts: ["Program is intuitive with clear instructions", "No instructions needed", "Hidden buttons", "Only colors matter"], a: 0 },
  { q: "Comments in code should be:", opts: ["Logical and helpful to judges", "Random text", "Not present", "Only for decoration"], a: 0 },
  { q: "A well-designed program in FBLA rubric is:", opts: ["Functional, modular, and readable", "Broken and confusing", "Unrelated to prompt", "Minimal effort code"], a: 0 },
  { q: "What is the purpose of the Exploring Coding & Programming presentation?", opts: ["To show your program works and explain design", "To copy someone else's program", "To only show code", "To present graphics only"], a: 0 }
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
  shuffleQuestions();
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

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === q.a) score++;
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
