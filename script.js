const earlyComputers = [
  { q: "What year was ENIAC built?", a: ["1945", "1961", "1928"], c: 0 },
  { q: "What did early computers use for memory?", a: ["Vacuum tubes", "Touchscreens", "Fiber optics"], c: 0 },
  { q: "Who is the father of computing?", a: ["Charles Babbage", "Steve Jobs", "Nikola Tesla"], c: 0 },
  { q: "What is an abacus?", a: ["Ancient calculator", "A robot", "A keyboard"], c: 0 },
  { q: "Early computers were mostly used for:", a: ["Military math", "Gaming", "Music"], c: 0 },
  { q: "What replaced vacuum tubes?", a: ["Transistors", "AI chips", "Cameras"], c: 0 },
  { q: "Early computers filled:", a: ["Entire rooms", "Backpacks", "Pockets"], c: 0 },
  { q: "What does CPU stand for?", a: ["Central Processing Unit", "Computer Power Utility", "Calculation Program Unit"], c: 0 },
  { q: "What was the first coding language?", a: ["Assembly", "Python", "Swift"], c: 0 },
  { q: "Punch cards were used to:", a: ["Input data", "Play music", "Print color"], c: 0 }
];

const quantumEra = [
  { q: "Quantum computers use:", a: ["Qubits", "Megabits", "Atoms of RAM"], c: 0 },
  { q: "A qubit can be:", a: ["0, 1, or both", "Only 0", "Only 1"], c: 0 },
  { q: "Quantum computers are good at:", a: ["Huge problems fast", "Playing games", "Drawing"], c: 0 },
  { q: "Superposition means a qubit:", a: ["Can be 0 and 1", "Stops working", "Explodes"], c: 0 },
  { q: "Who builds quantum computers?", a: ["IBM", "Python", "Node.js"], c: 0 },
  { q: "Quantum computing relates to:", a: ["Physics", "Sports", "Cooking"], c: 0 },
  { q: "Quantum computers must stay:", a: ["Extremely cold", "Hot", "Room temp"], c: 0 },
  { q: "Entanglement means qubits:", a: ["Affect each other instantly", "Break", "Shrink"], c: 0 },
  { q: "Quantum computers are used for:", a: ["Research", "Watchiing Videos", "Coding"], c: 0 },
  { q: "Normal bits can be:", a: ["0 or 1", "Both", "Random"], c: 0 }
];

let questions = [];
let index = 0;
let score = 0;

function startLevel(level) {
  questions = level === 1 ? earlyComputers : quantumEra;
  document.getElementById("start").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[index];
  document.getElementById("question").innerText = q.q;

  let ansHTML = "";
  q.a.forEach((answer, i) => {
    ansHTML += `<button class="btn" onclick="choose(${i})">${answer}</button><br>`;
  });

  document.getElementById("answers").innerHTML = ansHTML;
}

function choose(i) {
  if (i === questions[index].c) score++;
  index++;

  if (index >= questions.length) endGame();
  else showQuestion();
}

function endGame() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("end").classList.remove("hidden");
  document.getElementById("score").innerText = `${score} / ${questions.length}`;
}

