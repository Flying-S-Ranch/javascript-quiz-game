// DEPENDENCIES
var startBtn = document.querySelector("#start")
var timeEl = document.querySelector("#time")
var questionEl = document.querySelector("#question")

// DATA / STATE
var secondsLeft = 5;

var question1 = {
    content: "this is the content of question one",
    a: "this is answer option A",
    b: "this is answer option B",
    c: "this is answer option C",
    d: "this is answer option d"
}

var question2 = {
    content: "this is the content of question two",
    a: "this is answer option A",
    b: "this is answer option B",
    c: "this is answer option C",
    d: "this is answer option d"
}

var question3 = {
    content: "this is the content of question three",
    a: "this is answer option A",
    b: "this is answer option B",
    c: "this is answer option C",
    d: "this is answer option d"
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
}

function displayQuestion() {
  var quizContent = document.createElement("div")
  quizContent.textContent = question1.content;
  console.log(question1.content);
  questionEl.appendChild(quizContent);
}

// USER INTERACTIONS
// user clicks start button
startBtn.addEventListener("click", function(){
  // timer begins
    runTimer();
    // question appears
    displayQuestion();
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