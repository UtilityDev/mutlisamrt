// Elements
let math = document.getElementById("math");
let submit = document.getElementById("submit");
let inputField = document.getElementById("input");
let message01 = document.getElementById("message01");
let level = document.getElementById("level");
let next = document.getElementById("next");
let tasktext = document.getElementById("taskcount");
let time = document.getElementById("time");

// Links
let x = location.href;

// Values
let level_val = 1;
var task = 0;
let timeleft = 60;
let op;

let themes = ["https://bit.ly/3oOmzab", "https://i.pinimg.com/originals/b5/7b/66/b57b666c6de1778896a77e25bad990bb.jpg"];
let currentTheme;

// Operators and Task stuff
operators = ["+", "x", "-"];
names =
["Julian", "Alecsandro", "Oliver", "Amalie", "Noah", "Håkon", "Tormod", "Ørjan", "Amanda", "Søren Mathias",
"Rafael", "Jonatan", "Julian Albert", "Ingrid", "Maja", "Saulius", "Arnfinn", "Marina", "Eivind"];

// Setting the timer to the time left before it starts counting down to prevent it from showing the HTML
time.innerHTML = timeleft + " minutter igjen denne uka!";

// Timer
setInterval(function() {
  timeleft--;
  time.innerHTML = timeleft + " minutter igjen denne uka!";
  console.log(timeleft);
  }, 60000)

if (timeleft <= 0) {
  time.innerHTML = "0 minutter igjen denne uka!";
}

message01.style.display = 'none';

// Randomizing the numbers
function randomize() {
  op = Math.floor(Math.random() * operators.length);
  a = Math.floor(Math.random() * 50);
  b = Math.floor(Math.random() * 50);
  
  c = Math.floor(Math.random() * 7);
  
  // TODO: Add more stuff, and make the randomness just a tiny bit better ;)
  if (c != 1) {
    math.innerHTML = a + ' ' + operators[op] + ' ' + b;
  } else {
    let name1 = Math.floor(Math.random() * names.length);
    let name2 = Math.floor(Math.random() * names.length);
    var iq1 = Math.floor(Math.random() * 105);
    var iq2 = Math.floor(Math.random() * 105);

    var iqSum;

    math.innerHTML = names[name1] + ' har en iq på ' + iq1 + '. ' + names[name2] + ' har en iq på ' + iq2 + '. Hvor mye har de til sammen?';
    var num1 = Math.floor(Math.random() * 110);
    var num2 = Math.floor(Math.random() * 110);
    math.innerHTML = names[name1] + " har en iq på " + num1 + ". " + names[name2] + " har en iq på " + num2 + ". Hvor stor iq har de til sammen?";
}
  // Checking the operators
  if (operators[op] == "+") { sum = a + b; }
  if (operators[op] == "x") { sum = a * b; }
  if (operators[op] == "-") { sum = a - b; }
  if (c == 1) { sum = iq1 + iq2; }
}

randomize();

// Checking the answer
function checkAnswer() {
  if (inputField.value == sum || inputField.value == 69 || inputField.value == 420 || inputField.value == "ur mom" || inputField.value == 42 || inputField.value == 69420 || inputField.value == "" + a + b) {
    submit.style.backgroundColor = 'lime';
    
    message01.style.display = 'block';
    message01.style.color = 'lime';
    message01.innerHTML = 'riktig';

    setTimeout(nextTask, 1000);
  } else {
    submit.style.backgroundColor = 'red';
    message01.style.display = 'block';
    message01.style.color = 'red';
    message01.innerHTML = 'feil';
  }
  if (inputField.value == '') {
    message01.style.display = 'block';
    message01.innerHTML = 'du må skrive inn et svar.'
    message01.style.color = 'red';
  }
}

// Checking answer with enter
document.addEventListener("keydown", event => {
  if (event.keyCode === 13) {
    checkAnswer();
  }
});

// Happens when you press the 'neste oppgave' button
function nextTask() {
  if (message01.innerHTML == 'riktig') {
    randomize();
    message01.style.display = 'none';
    submit.style.backgroundColor = 'white';
    inputField.value = '';
    message01.innerHTML = '';
    task++;
    tasktext.innerHTML = 'oppgave: ' + task;
  }
}

function theme() {
  document.body.classList.toggle("gamer-theme");
}