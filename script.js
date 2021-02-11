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
  op = Math.floor(Math.random()* operators.length);
  a = Math.floor(Math.random() * 20);
  b = Math.floor(Math.random() * 20);
  
  t = Math.floor(Math.random() * 7); // t stands for TASK
  
  
  // TODO: add a better way to randomize the tasks
  if (t != 1) {
    math.innerHTML = a + ' ' + operators[op] + ' ' + b;
  } else {
    let name1 = Math.floor(Math.random() * names.length);
    let name2 = Math.floor(Math.random() * names.length);
    
    var num1 = Math.floor(Math.random() * 1000);
    var num2 = Math.floor(Math.random() * 1000);
    math.innerHTML = names[name1] + " har " + num1 + " kroner. " + names[name2] + " har " + num2 + ". Hvor mye har de til sammen?";
  }
  
  // Checking the operators
  if (operators[op] == "+") { sum = a + b; }
  if (operators[op] == "x") { sum = a * b; }
  if (operators[op] == "-") { sum = a - b; }
  if (c == 1) { sum = num1 + num2; }
}

randomize();

// Checking the answer
function checkAnswer() {
  if (inputField.value == sum || inputField.value == 69 || inputField.value == 420 || inputField.value == "ur mom" || inputField.value == 42 || inputField.value == 69420 || inputField.value == "" + a + b) {
    submit.style.backgroundColor = 'lime';
    
    message01.style.display = 'block';
    message01.style.color = 'lime';
    message01.innerHTML = 'riktig';
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

function news() {
  location.href = "news/news.html";
}