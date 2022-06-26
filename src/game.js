let gameBlocks = document.querySelectorAll('.block');
const gameField = document.querySelector("#game");
let selectImgBtn = document.querySelector('#selectImgBtn');
let mixBtn = document.querySelector('#mixBtn');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let selectBtn = document.querySelector('#selectBtn');
let addOwnImageBtn = document.querySelector('#addOwnImageBtn');
let alertdiv = document.querySelector('#alertdiv');
let resetPuzzleBtn = document.querySelector('#resetPuzzleBtn');
let difficultyBtn = document.querySelector('#difficultyBtn');
let difficulty;

if (localStorage.getItem('difficulty') == null) {
    difficulty = 'easy';
    localStorage.setItem('difficulty', difficulty);
}

let gameState = [
    [gameBlocks[0], gameBlocks[1], gameBlocks[2]],
    [gameBlocks[3], gameBlocks[4], gameBlocks[5]],
    [gameBlocks[6], gameBlocks[7], gameBlocks[8]]
];

function render(gameState, px) {
    if (px==null) {
        px = 100;
    }
    gameState.forEach((rowElement, rowIndex) => {
        rowElement.forEach((columnElement, columnIndex) => {
            columnElement.style.top = `${rowIndex * px}px`;
            columnElement.style.left = `${columnIndex * px}px`;
            columnElement.style['background-position-y'] = `-${rowIndex * px}px`
            columnElement.style['background-position-x'] = `-${columnIndex * px}px`
        })
    })
}

function checkMove(x, y, emptyX, emptyY) {
    let value = 0;
    if (difficulty=='easy') {
        value = 100;
    }
    if (difficulty=='medium') {
        value = 80;
    }
    if (difficulty=='hard') {
        value = 70;
    }
    let a = gameState[x][y];
    let b = gameState[emptyX][emptyY];
    x = a.style.top;
    x = x.slice(0, x.length - 2);
    y = a.style.left;
    y = y.slice(0, y.length - 2);
    emptyX = b.style.top;
    emptyX = emptyX.slice(0, emptyX.length - 2);
    emptyY = b.style.left;
    emptyY = emptyY.slice(0, emptyY.length - 2);
    if (x == emptyX || y == emptyY) {
        if (x-emptyX==value||y-emptyY==value||x-emptyX==-value||y-emptyY==-value) {
            return true;
        }
    }
    else {
        console.log('ruch niemozliwy');
    }
}

function moveElement(e1, e2) {
    const tempTop = e1.style.top;
    const tempLeft = e1.style.left;

    e1.style.top = e2.style.top;
    e1.style.left = e2.style.left;

    e2.style.top = tempTop;
    e2.style.left = tempLeft;
}


gameField.addEventListener('click', (event) => {
    const target = event.target;
    let x, y;
    gameState.forEach((rowElement, rowIndex) => {
        rowElement.forEach((columnElement, columnIndex) => {
            if (columnElement === target) {
                x = rowIndex;
                y = columnIndex;
            }
        })
    })

    let emptyX, emptyY;
    gameState.forEach((rowElement, rowIndex) => {
        rowElement.forEach((columnElement, columnIndex) => {
            if (columnElement.id =='emptyBlock') {
                emptyX = rowIndex;
                emptyY = columnIndex;
            }
        })
    })
    console.log(x, y);

    if (checkMove(x, y, emptyX, emptyY)==true) {
        moveElement(gameState[x][y], gameState[emptyX][emptyY]);
        checkWin();
    }
    saveGameToLs();
})
let winSound = new Audio('sound/win.mp3');

function resetPuzzle() {
    let x = 2;
    let y = 2;
    if (difficulty=='medium') {
        x = 3;
        y = 3;
    }
    if (difficulty=='hard') {
        x = 4;
        y = 4;
    }
    let emptyX, emptyY;
    gameState.forEach((rowElement, rowIndex) => {
        rowElement.forEach((columnElement, columnIndex) => {
            if (columnElement.id =='emptyBlock') {
                emptyX = rowIndex;
                emptyY = columnIndex;
            }
        })
    })
    let tempp = gameState[x][y];
    gameState[x][y] = gameState[emptyX][emptyY];
    gameState[emptyX][emptyY] = tempp;
    moveElement(gameState[x][y], gameState[emptyX][emptyY]);
    localStorage.removeItem('gameStateTop');
    localStorage.removeItem('gameStateLeft');
}

function saveGameToLs() {
    let currentGameStateBlocks = document.querySelectorAll('.block');
    let tops = [];
    let lefts = [];
    let index = 0;
    let count = 9;
    if (difficulty=='medium') {
        count = 16;
    }
    if (difficulty=='hard') {
        count = 25;
    }
    for (let x = 0; x < count; x++) {
        tops[index] = currentGameStateBlocks[index].style.top;
        lefts[index] = currentGameStateBlocks[index].style.left;
        index++;
    }
    localStorage.setItem('gameStateTop', JSON.stringify(tops));
    localStorage.setItem('gameStateLeft', JSON.stringify(lefts));
}


mixBtn.addEventListener('click', () => mixPuzzles());

resetPuzzleBtn.addEventListener('click', () => {
    let px = 100;
    if (difficulty=='medium') {
        px = 80;
    }
    if (difficulty=='hard') {
        px = 70;
    }
    resetPuzzle();
    render(gameState, px);
    resetPuzzleBtn.classList.add('bounce');
    setTimeout(() => {
        resetPuzzleBtn.classList.remove('bounce');
    }, 700);
})

difficultyBtn.addEventListener('click', () => {
    let difficultydiv = document.getElementById('difficultydiv');
    if (difficultydiv.style.display=='flex') {
        difficultydiv.style.display = 'none';
    }
    else {
        difficultydiv.style.display = 'flex';
    }
    difficultyBtn.classList.add('bounce');
    setTimeout(() => {
        difficultyBtn.classList.remove('bounce');
    }, 700);
})

render(gameState);