let infoGameBlocks = document.querySelectorAll(".block");
const infoGameField = document.querySelector(".gamePresentation");
let isPuzzleSolved = false;
let isTimerRunning = false;
let countdownTimerInterval = null;
let timerPresentation = document.getElementById("timerPresentation");
let infoGameState = [
  [infoGameBlocks[0], infoGameBlocks[1], infoGameBlocks[2]],
  [infoGameBlocks[3], infoGameBlocks[4], infoGameBlocks[5]],
  [infoGameBlocks[6], infoGameBlocks[7], infoGameBlocks[8]],
];

let infoMovesCount = 0;
let interval = null;
let infoMoves = document.getElementById("moves");

function startIncreasingMoves() {
  function increaseMoves() {
    infoMovesCount++;
    if (language == "PL") {
      infoMoves.innerText = "Ruchy: " + infoMovesCount;
    } else {
      infoMoves.innerText = "Moves: " + infoMovesCount;
    }
  }
  function generateRandomNumber() {
    return 1000 * Math.floor(Math.random() * 150) + 10;
  }

  function increaseMove() {
    setTimeout(() => {
      increaseMoves();
    }, generateRandomNumber());
  }
  async function asyncCall() {
    for (let i = 0; i < 215; i++) {
      await increaseMove();
    }
  }
  asyncCall();
}

let countdownTimer = 0;
let infoTimer = document.getElementById("timer");

function infoFormatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = (time % 60).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function runCountdown() {
  countdownTimerInterval = setInterval(() => {
    countdownTimer++;
    let formattedCountdownTimer = countdownTimer;
    formattedCountdownTimer = infoFormatTime(formattedCountdownTimer);
    if (language == "PL") {
      infoTimer.innerText = "Czas: " + formattedCountdownTimer;
    } else {
      infoTimer.innerText = "Time: " + formattedCountdownTimer;
    }
  }, 1000);
  stopIntervalAfterTime();
}

function stopIntervalAfterTime() {
  setTimeout(() => {
    clearInterval(countdownTimerInterval);
    countdownTimerInterval = null;
  }, 1200000);
}

function applyWin() {
  if (isPuzzleSolved === false) {
    let winInfo = document.querySelector("#winInfo");
    winInfo.classList.add("bounce-win");
    winInfo.classList.remove("invisible");
    setTimeout(() => {
      winInfo.classList.add("invisible");
      winInfo.classList.remove("bounce-win");
    }, 3600);
    isPuzzleSolved = true;
  }
}

function solvePuzzle() {
  setTimeout(() => {
    infoGameBlocks[7].style.top = "200px";
  }, 600);
  setTimeout(() => {
    infoGameBlocks[5].style.top = "100px";
  }, 800);
  setTimeout(() => {
    infoGameBlocks[2].style.left = "200px";
  }, 1000);
  setTimeout(() => {
    infoGameBlocks[1].style.top = "0px";
  }, 1200);
  setTimeout(() => {
    infoGameBlocks[4].style.top = "100px";
  }, 1400);
  setTimeout(() => {
    infoGameBlocks[7].style.left = "100px";
  }, 1600);
  setTimeout(() => {
    applyWin();
  }, 1900);
}

function renderMainPresentation(infoGameState) {
  px = 100;
  infoGameState.forEach((rowElement, rowIndex) => {
    rowElement.forEach((columnElement, columnIndex) => {
      columnElement.style["background-position-y"] = `-${rowIndex * px}px`;
      columnElement.style["background-position-x"] = `-${columnIndex * px}px`;
    });
  });

  infoGameBlocks[0].style.top = "0px";
  infoGameBlocks[0].style.left = "0px";
  infoGameBlocks[1].style.top = "100px";
  infoGameBlocks[1].style.left = "100px";
  infoGameBlocks[2].style.top = "0px";
  infoGameBlocks[2].style.left = "100px";

  infoGameBlocks[3].style.top = "100px";
  infoGameBlocks[3].style.left = "0px";
  infoGameBlocks[4].style.top = "200px";
  infoGameBlocks[4].style.left = "100px";
  infoGameBlocks[5].style.top = "0px";
  infoGameBlocks[5].style.left = "200px";

  infoGameBlocks[6].style.top = "200px";
  infoGameBlocks[6].style.left = "0px";
  infoGameBlocks[7].style.top = "100px";
  infoGameBlocks[7].style.left = "200px";
  infoGameBlocks[8].style.top = "200px";
  infoGameBlocks[8].style.left = "200px";

  document.addEventListener("mouseenter", () => {
    solvePuzzle();
  });
  document.addEventListener("click", () => {
    solvePuzzle();
  });
  document.addEventListener("focus", () => {
    solvePuzzle();
  });
  document.addEventListener("touchmove", () => {
    solvePuzzle();
  });
  document.addEventListener("scroll", () => {
    solvePuzzle();
  });

  let observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true && isTimerRunning === false) {
        startIncreasingMoves();
        runCountdown();
        isTimerRunning = true;
      }
    },
    { threshold: [1] }
  );
  observer.observe(timerPresentation);
}
renderMainPresentation(infoGameState);
