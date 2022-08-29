let movesCount;
let moves = document.getElementById('moves');
if (localStorage.getItem('moves') == null) {
    movesCount = 0;
    localStorage.setItem('moves', movesCount);
}

function increaseMoves() {
    if (movesCount==0 || movesCount ==null) {
        movesCount = 1;
    }
    else {
        movesCount++;
    }
    localStorage.setItem('moves', movesCount);
    moves.innerHTML = 'Moves: ' + movesCount;
}

function resetMoves() {
    movesCount = 0;
    localStorage.setItem('moves', movesCount);
}

function loadMovesFromLs() {
    movesCount = localStorage.getItem('moves');
    moves.innerHTML = 'Moves: ' + movesCount;
}

loadMovesFromLs();