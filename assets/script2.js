// DEPENDENCIES
var startBtn = document.querySelector("#start")
var timeEl = document.querySelector("#time")
var questionEl = document.querySelector("#question")
var answersEl = document.querySelectorAll(".answers")
console.log(answersEl)
var answerA = document.querySelector("#a")
var answerB = document.querySelector("#b")
var answerC = document.querySelector("#c")
var answerD = document.querySelector("#d")
var scoreEl = document.querySelector("#score")

// DATA / STATE
var secondsLeft = 15;
var score = 0
var userAnswer;
var answerContentA;
var answerContentB;
var answerContentC;
var answerContentD;

// a tutor advised me on the best way to organize the quiz content
var question1 = {
    content: "this is the content of question one",
    answers: ["question 1 option A", "question 1 option B", "question 1 option C", "question 1 option D"],
    correct: "B"
}

var question2 = {
    content: "this is the content of question two",
    answers: ["question 2 option A", "question 2 option B", "question 2 option C", "question 2 option D"],
    correct: "D"
}

var question3 = {
    content: "this is the content of question three",
    answers: ["question 3 option A", "question 3 option B", "question 3 option C", "question 3 option D"],
    correct: "A"
}

var quizQuestions = [question1, question2, question3]


console.log(quizQuestions[2]);

// FUNCTIONS
function runTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = ":"+ secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval)
            alarmClock()
        }
    }, 1000)
}

function displayScore() {
  scoreBox = document.createElement("p");
  scoreBox.textContent = "Score: " + score
  scoreEl.appendChild(scoreBox)
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
    quizContent.textContent = quizQuestions[0].content;
    console.log(quizQuestions[0].content);
    questionEl.appendChild(quizContent);
  }
  
  function displayAnswers() {
    // this code displays answer A
    answerContentA = document.createElement("p");
    answerContentA.textContent= "A: " + quizQuestions[0].answers[0];
  //   console.log(question1.a);
  answerA.appendChild(answerContentA);
  
    // this code displays answer B
    answerContentB = document.createElement("p");
    answerContentB.textContent= "B: " + question1.answers[1];
  //   console.log(question1.b);
  answerB.appendChild(answerContentB);
  
    // this code displays answer C
    answerContentC = document.createElement("p");
    answerContentC.textContent= "C: " + question1.answers[2];
  //   console.log(question1.c);
  answerC.appendChild(answerContentC);
  
    // this code displays answer D
    answerContentD = document.createElement("p");
    answerContentD.textContent= "D: " + question1.answers[3];
  //   console.log(question1.d);
  answerD.appendChild(answerContentD);
  }

  function resolveAnswer() {
    //answer correct?
    var isCorrect = (userAnswer === "B");
    // if yes,
    if(isCorrect) {
    // add five points to score
    score = score + 5;
    console.log(score)
    scoreBox.textContent = " "
    displayScore();
    } else {
    // if no, 
    // subtract 5 seconds from time
    secondsLeft = secondsLeft - 5;
    }

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
      // score appears
      displayScore();
      // first answer resolved after user clicks
      resolveAnswer();
  } )

// user clicks on answer

answerA.addEventListener("click", function(){
    userAnswer = "A"
    console.log(userAnswer)
    resolveAnswer();
})

answerB.addEventListener("click", function(){
    userAnswer = "B"
    console.log(userAnswer)
    resolveAnswer();
})

answerC.addEventListener("click", function(){
    userAnswer = "C"
    console.log(userAnswer)
    resolveAnswer();
})

answerD.addEventListener("click", function(){
    userAnswer = "D"
    console.log(userAnswer)
    resolveAnswer();
})