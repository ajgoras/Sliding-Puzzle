let countdownRun = false;
let countdownTime;
let updateTimeInterval = null;
let timer = document.getElementById("timer");
function loadTimerFromLs() {
  if (
    localStorage.getItem("time") != null &&
    localStorage.getItem("moves") != 0
  ) {
    setTimeout(() => {
      countdownTime = localStorage.getItem("time");
      startCountdown();
    }, 330);
  }
}
function checkCountdown() {
  if (countdownRun == false) {
    countdownTime = 0;
    language === "EN"
      ? (timer.innerHTML = "Time: 0:00")
      : (timer.innerHTML = "Czas: 0:00");
    startCountdown();
  }
}

function startCountdown() {
  if (updateTimeInterval !== null) return;
  countdownRun = true;
  updateTimeInterval = setInterval(() => {
    updateDOMCountdown();
  }, 1000);
}

function stopCountdown() {
  countdownRun = false;
  clearInterval(updateTimeInterval);
  updateTimeInterval = null;
}

function resetCountdown() {
  countdownTime = 0;
  localStorage.setItem("time", countdownTime);
  language === "EN"
    ? (timer.innerHTML = "Time: 0:00")
    : (timer.innerHTML = "Czas: 0:00");
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = (time % 60).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function updateDOMCountdown() {
  countdownTime++;
  let formattedTime = countdownTime;
  formattedTime = formatTime(formattedTime);
  language === "EN"
    ? (timer.innerHTML = "Time: " + formattedTime)
    : (timer.innerHTML = "Czas: " + formattedTime);
  localStorage.setItem("time", countdownTime);
}

loadTimerFromLs();
