let movesCount;
let moves = document.getElementById("moves");
if (localStorage.getItem("moves") == null) {
  movesCount = 0;
  localStorage.setItem("moves", movesCount);
}

function increaseMoves() {
  if (movesCount == 0 || movesCount == null) {
    movesCount = 1;
  } else {
    movesCount++;
  }
  localStorage.setItem("moves", movesCount);
  language === "EN"
    ? (moves.innerHTML = "Moves: " + movesCount)
    : (moves.innerHTML = "Ruchy: " + movesCount);
}

function resetMoves() {
  setTimeout(() => {
    movesCount = 0;
    localStorage.setItem("moves", movesCount);
  }, 550);
}

function setMovesToZeroInDOM() {
  language === "EN"
    ? (moves.innerHTML = "Moves: 0")
    : (moves.innerHTML = "Ruchy: 0");
}

function loadMovesFromLs() {
  movesCount = localStorage.getItem("moves");
  language === "EN"
    ? (moves.innerHTML = "Moves: " + movesCount)
    : (moves.innerHTML = "Ruchy: " + movesCount);
}

loadMovesFromLs();
