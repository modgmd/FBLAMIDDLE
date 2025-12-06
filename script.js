// LEVEL QUESTIONS
const earlyComputers = [
  { q: "What year was ENIAC built?", a: ["1945", "1962", "1931"], c: 0 },
  { q: "What did early computers use for memory?", a: ["Vacuum tubes", "LED lights", "Plastic chips"], c: 0 },
  { q: "Who is the father of computing?", a: ["Charles Babbage", "Steve Jobs", "Elon Musk"], c: 0 },
  { q: "What is an abacus?", a: ["Ancient calculator", "A robot", "A computer virus"], c: 0 },
  { q: "Early computers were mostly used for:", a: ["Military math", "Music", "Gaming"], c: 0 },
  { q: "What replaced vacuum tubes?", a: ["Transistors", "Power cells", "Magnets"], c: 0 },
  { q: "Early computers filled:", a: ["Entire rooms", "Suitcases", "Phones"], c: 0 },
  { q: "What does CPU stand for?", a: ["Central Processing Unit", "Computer Power Utility", "Core Program Unit"], c: 0 },
  { q: "The first programming language was:", a: ["Assembly", "Python", "Java"], c: 0 },
  { q: "Punch cards were used to:", a: ["Input data", "Play sound", "Print images"], c: 0 }
];

const quantumEra = [
  { q: "Quantum computers use:", a: ["Qubits", "Megabytes", "CPU cores"], c: 0 },
  { q: "A qubit can be:", a: ["0, 1, or both", "Only 0", "Only 1"], c: 0 },
  { q: "Quantum computers excel at:", a: ["Huge calculations", "Minecraft", "Drawing"], c: 0 },
  { q: "Superposition means:", a: ["0 and 1 at the same time", "The chip is broken", "It overheats"], c: 0 },
  { q: "Which company builds quantum computers?", a: ["IBM", "Nike", "Netflix"], c: 0 },
  { q: "Quantum computing is based on:", a: ["Physics", "Art", "Sports"], c: 0 },
  { q: "Quantum computers must stay:", a: ["Extremely cold", "Extremely hot", "Room temperature"], c: 0 },
  { q: "Entanglement means qubits:", a: ["Affect each other instantly", "Break apart", "Multiply"], c: 0 },
  { q: "Quantum computers are used for:", a: ["Research", "Social media", "Music"], c: 0 },
  { q: "Normal bits are always:", a: ["0 or 1", "Both", "Random"], c: 0 }
];

// DOM ELEMENTS
const menu = document.getElementById("menu");
const how = document.getElementById("how");
const howto = document.getElementById("howto");
const back = document.getElementById("back");

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("next");

const result = document.getElementById("result");
const scoreText = document.getElementById("score");

let currentLevel = [];
let index = 0;
let score = 0;

// ---- MENU BUTTONS ----
how.onclick = () => {
  menu.classList.add("hidden");
  howto.classList.remove("hidden");
};

back.onclick = () => {
  howto.classList.add("hidden");
  menu.classList.remove("hidden");
};

// ---- START LEVEL ----
function startLevel(level) {
  currentLevel = level === 1 ? earlyComputers : quantumEra;

  menu.classList.add("hidden");
  howto.classList.add("hidden");
  quiz.classList.remove("hidden");

  index = 0;
  score = 0;

  loadQuestion();
}

// ---- LOAD QUESTION ----
function loadQuestion() {
  const q = currentLevel[index];
  question.textContent = q.q;

  options.innerHTML = "";
  q.a.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = ans;

    btn.onclick = () => choose(i);

    options.appendChild(btn);
  });
}

// ---- CHOOSE ANSWER ----
function choose(i) {
  if (i === currentLevel[index].c) {
    score++;
  }

  nextBtn.classList.remove("hidden");
}

// ---- NEXT QUESTION ----
function nextQuestion() {
  index++;
  nextBtn.classList.add("hidden");

  if (index >= currentLevel.length) {
    endQuiz();
  } else {
    loadQuestion();
  }
}

// ---- END GAME ----
function endQuiz() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  const percent = Math.round((score / currentLevel.length) * 100);

  scoreText.innerHTML = `
    Score: ${score} / ${currentLevel.length}<br>
    Percentage: ${percent}%
  `;
}
