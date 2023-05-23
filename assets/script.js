// DEPENDENCIES
var startBtn = document.querySelector("#start")
var timeEl = document.querySelector("#time")
var questionEl = document.querySelector("#question")
var answerA = document.querySelector("#a")
var answerB = document.querySelector("#b")
var answerC = document.querySelector("#c")
var answerD = document.querySelector("#d")

// DATA / STATE
var secondsLeft = 15;
var score = 0
var userAnswer;
var answerContentA;
var answerContentB;
var answerContentC;
var answerContentD;

var question1 = {
    content: "this is the content of question one",
    a: "question 1 option A",
    b: "question 1 option B",
    c: "question 1 option C",
    d: "question 1 option D"
}

var question2 = {
    content: "this is the content of question two",
    a: "question 2 option A",
    b: "question 2 option B",
    c: "question 2 option C",
    d: "question 2 option D"
}

var question3 = {
    content: "this is the content of question three",
    a: "question 3 option A",
    b: "question 3 option B",
    c: "question 3 option C",
    d: "question 3 option D"
}

var quizQuestions = [question1, question2, question3]
var quizAnswers= ["B", "C", "A"]


console.log(quizQuestions[0]);

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

function alarmClock() {
    timeEl.textContent = "Time's Up!";
    timeEl.setAttribute("style", "font-size: 50px")
    questionEl.textContent = " "
    answerA.textContent = " "
    answerB.textContent = " "
    answerC.textContent = " "
    answerD.textContent = " "
}



// function runQuiz() {
//   for(i = 0; i < quizQuestions.length; i++) {
//     function displayQuestion() {
//             var quizContent = document.createElement("div")
//             quizContent.textContent = quizQuestions[i].content;
//           //   console.log(question1.content);
//             questionEl.appendChild(quizContent);
//       return
//     }
// }
// }

function displayQuestion() {
  var quizContent = document.createElement("div")
  quizContent.textContent = quizQuestions[0].content;
//   console.log(question1.content);
  questionEl.appendChild(quizContent);
}

function displayAnswers() {
  // this code displays answer A
  answerContentA = document.createElement("p");
  answerContentA.textContent= "A: " + quizQuestions[0].a;
//   console.log(question1.a);
  answerA.appendChild(answerContentA);

  // this code displays answer B
  answerContentB = document.createElement("p");
  answerContentB.textContent= "B: " + quizQuestions[0].b;
//   console.log(question1.b);
  answerB.appendChild(answerContentB);

  // this code displays answer C
  answerContentC = document.createElement("p");
  answerContentC.textContent= "C: " + quizQuestions[0].c;
//   console.log(question1.c);
  answerC.appendChild(answerContentC);

  // this code displays answer D
  answerContentD = document.createElement("p");
  answerContentD.textContent= "D: " + quizQuestions[0].d;
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
} else {
// if no, 
  // subtract 10 seconds from time
  secondsLeft = secondsLeft - 5;
}
// move on to next question
questionEl.textContent = quizQuestions[1].content;
answerContentA.textContent= "A: " + quizQuestions[1].a;
answerContentB.textContent= "B: " + quizQuestions[1].b;
answerContentC.textContent= "C: " + quizQuestions[1].c;
answerContentD.textContent= "D: " + quizQuestions[1].d;
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
    // runQuiz();
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
  
// INITIALIZATIONS
// nothing begins immediately when the page is loaded