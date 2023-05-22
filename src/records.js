let recordsBtn = document.getElementById("recordsBtn");
let recordsDiv = document.getElementById("recordsDiv");
let movesForRecords = localStorage.getItem("movesRecord");
let timeForRecords = localStorage.getItem("timeRecord");
let isGameMixedForHighScore = localStorage.getItem("isGameMixedForHighScore");
let monitoringHighScoreInterval;

if (localStorage.getItem("movesRecord") == null) {
  movesForRecords = 0;
  localStorage.setItem("movesRecord", movesForRecords);
}
if (localStorage.getItem("timeRecord") == null) {
  timeForRecords = 0;
  localStorage.setItem("timeRecord", timeForRecords);
}
if (
  localStorage.getItem("isGameMixedForHighScore") == null ||
  localStorage.getItem("isGameMixedForHighScore") == "false"
) {
  isGameMixedForHighScore = "false";
  localStorage.setItem("isGameMixedForHighScore", "false");
}

recordsBtn.addEventListener("click", () => {
  recordsDiv.classList.toggle("opacity0WithTranslate");
  setTimeout(() => {
    if (!recordsDiv.classList.contains("opacity0WithTranslate")) {
      recordsDiv.classList.add("opacity0WithTranslate");
    }
  }, 5000);
});

function addRecordToLocalStorage() {
  if (isGameMixedForHighScore === "true") {
    setTimeout(() => {
      localStorage.setItem("movesRecord", movesForRecords);
      localStorage.setItem("timeRecord", timeForRecords);
      clearInterval(monitoringHighScoreInterval);
      updateRecordsInDOM();
      isGameMixedForHighScore = "false";
      localStorage.setItem("isGameMixedForHighScore", "false");
    }, 500);
  }
}

function updateRecordsInDOM() {
  if (
    movesForRecords == 0 ||
    timeForRecords == 0 ||
    movesForRecords == null ||
    timeForRecords == null
  ) {
    if (language === "PL") {
      recordsDiv.children[0].innerText = "Nie masz rekordu";
      recordsDiv.children[1].innerText = "";
    } else {
      recordsDiv.children[0].innerText = "You Don't have record";
      recordsDiv.children[1].innerText = "";
    }
  } else {
    if (language === "PL") {
      recordsDiv.children[0].innerText =
        "Twoja najmniejsza liczba ruchów to " + movesForRecords;
      recordsDiv.children[1].innerText =
        "Twój najlepszy czas to " + formatTime(timeForRecords);
    } else {
      recordsDiv.children[0].innerText =
        "Your least number of moves is " + movesForRecords;
      recordsDiv.children[1].innerText =
        "Your best time is " + formatTime(timeForRecords);
    }
  }
}

function startMonitoringHighScore() {
  isGameMixedForHighScore = "true";
  localStorage.setItem("isGameMixedForHighScore", "true");
  monitoringHighScoreInterval = setInterval(() => {
    movesForRecords = movesCount;
    timeForRecords = countdownTime;
  }, 500);
}

setTimeout(() => {
  if (localStorage.getItem("isGameMixedForHighScore") === "true") {
    startMonitoringHighScore();
  }
}, 10);

updateRecordsInDOM();
