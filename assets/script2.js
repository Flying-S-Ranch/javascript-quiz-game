// DEPENDENCIES
var startBtn = document.querySelector("#start")
var timeEl = document.querySelector("#time")
var questionEl = document.querySelector("#question")
var answerA = document.querySelector("#a")
var answerB = document.querySelector("#b")
var answerC = document.querySelector("#c")
var answerD = document.querySelector("#d")
var scoreEl = document.querySelector("#score")

// DATA / STATE
var secondsLeft = 15;
var score = 0
var position = 0
var userAnswer;
var answerContentA;
var answerContentB;
var answerContentC;
var answerContentD;
var quizContent;
var timerInterval;

// tutor Scott McAnally advised me on the best way to organize the quiz content (lines 24-42)
var question1 = {
    content: "What HTML element is used to add JavaScript to an HTML file?",
    answers: ["<link>", "<script>", "<a>", "<div>"],
    correct: "B"
}

var question2 = {
    content: "Which of the following is not a useful division for JavaScript files?",
    answers: ["//DEPENDENCIES", "//USER INTERACTIONS", "//FUNCTIONS", "//STYLES"],
    correct: "D"
}

var question3 = {
    content: "Which of the following 'leaves an array unchanged, but adds selected elements to a new array'?",
    answers: ["Slice", "Split", "Splice", "Shift"],
    correct: "A"
}

var question4 = {
    content: "What is defined as 'a reusable block of code that performs a specific task'?",
    answers: ["a conditional", "a function", "an array", "a variable"],
    correct: "B"
}

var question5 = {
    content: "Which of these is most helpful if you want to store an ordered list of items?",
    answers: ["an array", "a variable", "a string", "a function"],
    correct: "A"
}

var quizQuestions = [question1, question2, question3, question4, question5]
console.log(quizQuestions.length);


console.log(quizQuestions[2]);

// FUNCTIONS
function runTimer() {
    timerInterval = setInterval(function() {
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
    quizContent = document.createElement("div")
    quizContent.textContent = quizQuestions[position].content;
    // console.log(quizQuestions[position].content);
    questionEl.appendChild(quizContent);
  }
  
  function displayAnswers() {
    // this code displays answer A
    answerContentA = document.createElement("p");
    answerContentA.textContent= "A: " + quizQuestions[position].answers[0];
  //   console.log(question1.a);
  answerA.appendChild(answerContentA);
  
    // this code displays answer B
    answerContentB = document.createElement("p");
    answerContentB.textContent= "B: " + quizQuestions[position].answers[1];
  //   console.log(question1.b);
  answerB.appendChild(answerContentB);
  
    // this code displays answer C
    answerContentC = document.createElement("p");
    answerContentC.textContent= "C: " + quizQuestions[position].answers[2];
  //   console.log(question1.c);
  answerC.appendChild(answerContentC);
  
    // this code displays answer D
    answerContentD = document.createElement("p");
    answerContentD.textContent= "D: " + quizQuestions[position].answers[3];
  //   console.log(question1.d);
  answerD.appendChild(answerContentD);
  }

  // tutor Scott McAnally advised me to iterate through the quizQuestions array by setting the index as a variable (lines 109-206)
  function resolveAnswer() {
    var position = 0
    answerA.addEventListener("click", function(){
        userAnswer = "A"
        console.log(userAnswer)
        evaluateAnswer();
        determinePosition();
    })
    
    answerB.addEventListener("click", function(){
        userAnswer = "B"
        console.log(userAnswer)
        evaluateAnswer();
        determinePosition();
    })
    
    answerC.addEventListener("click", function(){
        userAnswer = "C"
        console.log(userAnswer)
        evaluateAnswer();
        determinePosition();
    })
    
    answerD.addEventListener("click", function(){
        userAnswer = "D"
        console.log(userAnswer)
        evaluateAnswer();
        determinePosition();
    })
    //answer correct?
    function evaluateAnswer() {
        var isCorrect = (userAnswer === quizQuestions[position].correct);
        // if yes,
        if(isCorrect) {
        // add five points to score
        score = score + 5;
        scoreBox.textContent = " "
        displayScore();
        } else if (!isCorrect) {
        // if no, 
        // subtract 5 seconds from time
        secondsLeft = secondsLeft - 5;
      }
    }

    // are we at the end of the quiz?
    function determinePosition() {
        if (position === (quizQuestions.length - 1)) {
            console.log("game over!")
            questionEl.textContent = "That's all the questions :)";
            clearInterval(timerInterval)
            questionEl.setAttribute("style", "font-size: 50px")
            answerA.textContent = " "
            answerB.textContent = " "
            answerC.textContent = " "
            answerD.textContent = " "
            
        } else {
            questionEl.removeChild(quizContent);
            console.log(questionEl);
            answerA.removeChild(answerContentA);
            answerB.removeChild(answerContentB);
            answerC.removeChild(answerContentC);
            answerD.removeChild(answerContentD);

            position = position + 1;
            console.log(position);
            console.log(quizQuestions[position].content)
            quizContent = document.createElement("div")
            quizContent.textContent = quizQuestions[position].content;
            // console.log(quizQuestions[position].content);
            questionEl.appendChild(quizContent);
            // this code displays answer A
    answerContentA = document.createElement("p");
    answerContentA.textContent= "A: " + quizQuestions[position].answers[0];
  //   console.log(question1.a);
  answerA.appendChild(answerContentA);
  
    // this code displays answer B
    answerContentB = document.createElement("p");
    answerContentB.textContent= "B: " + quizQuestions[position].answers[1];
  //   console.log(question1.b);
  answerB.appendChild(answerContentB);
  
    // this code displays answer C
    answerContentC = document.createElement("p");
    answerContentC.textContent= "C: " + quizQuestions[position].answers[2];
  //   console.log(question1.c);
  answerC.appendChild(answerContentC);
  
    // this code displays answer D
    answerContentD = document.createElement("p");
    answerContentD.textContent= "D: " + quizQuestions[position].answers[3];
  //   console.log(question1.d);
  answerD.appendChild(answerContentD);
        }
    }
    
    // quizContent.textContent = ""
    // answerContentA.textContent = ""
    // answerContentB.textContent = ""
    // answerContentC.textContent = ""
    // answerContentD.textContent = ""

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

