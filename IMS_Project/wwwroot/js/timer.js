var startTimerButton = document.querySelector('.timerButton');
var pauseTimerButton = document.querySelector('.timerButton');
var timerDisplay = document.getElementById('timerText');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;
var benchmark = 0;
function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
// change 1 to 1000 above to run script every second instead of every millisecond. one other change will be needed in the getShowTime() function below for this to work. see comment there.   
	startTimerButton.setAttribute("onclick","resetTimer()");
	startTimerButton.innerHTML = "Reset";
    paused = 0;
    running = 1;
  }
}
function pauseTimer(){
  if (!difference){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    startTimerButton.innerHTML = "Paused";
    startTimerButton.style.padding = "initial 20px";
    paused = 1;
    running = 0;
  } else {
// if the timer was already paused, when they click pause again, start the timer again
startTimer();
  }
}
function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  startTimerButton.setAttribute("onclick","startTimer()");
  startTimerButton.innerHTML = "Start";
  timerDisplay.innerHTML = "00:00:00";
}
function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds;
  switch (minutes){
      case '10':
          if (benchmark < 1) {
              pauseTimer();
              showPARCheck();
              benchmark += 1;
          }
          break;
      case '20':
          if (benchmark < 2) {
              pauseTimer();
              showPARCheck();
              benchmark += 1;
          }
          break;
      case '30':
          if (benchmark < 3) {
              pauseTimer();
              showPARCheck();
              benchmark += 1;
          }
          break;
      case '40':
          if (benchmark < 4) {
              pauseTimer();
              showPARCheck();
              benchmark += 1;
          }
          break;
      case '50':
          if (benchmark < 4) {
              pauseTimer();
              showPARCheck();
              benchmark += 1;
          }
          break;
      case '59':
          if (benchmark < 4) {
              pauseTimer();
              showPARCheck();
              benchmark += 1;
          }
          break;
    }
}

function showPARCheck() {
    document.getElementById("popupContainer").classList.remove("hidden");
}

function confirmParCheck() {
    document.getElementById("popupContainer").classList.add("hidden");
    startTimer();
}