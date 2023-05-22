// DEPENDENCIES
var startBtn = document.querySelector("#start")
var timeEl = document.querySelector("#time")

// DATA / STATE
var secondsLeft = 90;

// FUNCTIONS
function runTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = ":"+ secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)

}

// USER INTERACTIONS
// user clicks start button
startBtn.addEventListener("click", function(){
    // timer begins
    runTimer();
} )
  
  // question appears

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