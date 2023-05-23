// DEPENDENCIES
var startBtn = document.querySelector("#start")
var timeEl = document.querySelector("#time")
var questionEl = document.querySelector("#question")
var answerA = document.querySelector("#a")
var answerB = document.querySelector("#b")
var answerC = document.querySelector("#c")
var answerD = document.querySelector("#d")

// DATA / STATE
var secondsLeft = 5;

var question1 = {
    content: "this is the content of question one",
    a: "this is answer option A",
    b: "this is answer option B",
    c: "this is answer option C",
    d: "this is answer option D"
}

var question2 = {
    content: "this is the content of question two",
    a: "this is answer option A",
    b: "this is answer option B",
    c: "this is answer option C",
    d: "this is answer option D"
}

var question3 = {
    content: "this is the content of question three",
    a: "this is answer option A",
    b: "this is answer option B",
    c: "this is answer option C",
    d: "this is answer option D"
}

var quizQuestions = [question1, question2, question3]
var quizAnswers= ["B", "C", "A"]


console.log(quizQuestions[0]);

// FUNCTIONS
function runTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = ":"+ secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            alarmClock()
        }
    }, 1000)
}

function alarmClock() {
    timeEl.textContent = "Time's Up!";
    timeEl.setAttribute("style", "font-size: 50px")
    questionEl.textContent = " "
    answerA.textContent = " "
    answerB.textContent = " "
    answerC.textContent = " "
    answerD.textContent = " "
}

function displayQuestion() {
  var quizContent = document.createElement("div")
  quizContent.textContent = question1.content;
  console.log(question1.content);
  questionEl.appendChild(quizContent);
}

function displayAnswers() {
  // this code displays answer A
  var answerContentA = document.createElement("p");
  answerContentA.textContent= question1.a;
  console.log(question1.a);
  answerA.appendChild(answerContentA);

  // this code displays answer B
  var answerContentB = document.createElement("p");
  answerContentB.textContent= question1.b;
  console.log(question1.b);
  answerB.appendChild(answerContentB);

  // this code displays answer C
  var answerContentC = document.createElement("p");
  answerContentC.textContent= question1.c;
  console.log(question1.c);
  answerC.appendChild(answerContentC);

  // this code displays answer D
  var answerContentD = document.createElement("p");
  answerContentD.textContent= question1.d;
  console.log(question1.d);
  answerD.appendChild(answerContentD);
}

// USER INTERACTIONS
// user clicks start button
startBtn.addEventListener("click", function(){
  // timer begins
    runTimer();
    // question appears
    displayQuestion();
    // answers appear
    displayAnswers();
} )
  

// user clicks on answer
  //answer correct?
    // if yes,
      // add five points
      // move on to next question
    // if no, 
      // subtract 10 seconds from time
      // move on to next question

// INITIALIZATIONS
// nothing begins immediately when the page is loaded