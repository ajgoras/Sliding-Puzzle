const gameBlocks = document.querySelectorAll('.block');
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
let difficulty = 'easy';

const gameState = [
    [gameBlocks[0], gameBlocks[1], gameBlocks[2]],
    [gameBlocks[3], gameBlocks[4], gameBlocks[5]],
    [gameBlocks[6], gameBlocks[7], gameBlocks[8]]
];

function render(gameState) {
    gameState.forEach((rowElement, rowIndex) => {
        rowElement.forEach((columnElement, columnIndex) => {
            columnElement.style.top = `${rowIndex * 100}px`;
            columnElement.style.left = `${columnIndex * 100}px`;
            columnElement.style['background-position-y'] = `-${rowIndex * 100}px`
            columnElement.style['background-position-x'] = `-${columnIndex * 100}px`
        })
    })
}

let whatmix = 50; //random value
let mixingSound = new Audio('sound/mixing.mp3');
function mixPuzzles() {
    let currentGameStateBlocks = document.querySelectorAll('.block');
    mixingSound.play();
    let whatmixCopy = whatmix;
    function randomWhatMix() {
        whatmix = Math.floor(Math.random() * 4) + 1;
    }
    randomWhatMix();
    if (whatmix==whatmixCopy) {
        randomWhatMix();
    }

    if (difficulty=='easy') {
        if (whatmix==1) {
            currentGameStateBlocks[0].style.top = '200px';
            currentGameStateBlocks[0].style.left = '100px';
            currentGameStateBlocks[1].style.top = '100px';
            currentGameStateBlocks[1].style.left = '100px';
            currentGameStateBlocks[2].style.top = '0px';
            currentGameStateBlocks[2].style.left = '100px';
        
            currentGameStateBlocks[3].style.top = '0px';
            currentGameStateBlocks[3].style.left = '200px';
            currentGameStateBlocks[4].style.top = '200px';
            currentGameStateBlocks[4].style.left = '0px';
            currentGameStateBlocks[5].style.top = '0px';
            currentGameStateBlocks[5].style.left = '0px';
        
            currentGameStateBlocks[6].style.top = '100px';
            currentGameStateBlocks[6].style.left = '0px';
            currentGameStateBlocks[7].style.top = '100px';
            currentGameStateBlocks[7].style.left = '200px';
            currentGameStateBlocks[8].style.top = '200px';
            currentGameStateBlocks[8].style.left = '200px';
        }
        if(whatmix==2) {
            currentGameStateBlocks[0].style.top = '200px';
            currentGameStateBlocks[0].style.left = '100px';
            currentGameStateBlocks[1].style.top = '0px';
            currentGameStateBlocks[1].style.left = '0px';
            currentGameStateBlocks[2].style.top = '0px';
            currentGameStateBlocks[2].style.left = '200px';
        
            currentGameStateBlocks[3].style.top = '0px';
            currentGameStateBlocks[3].style.left = '100px';
            currentGameStateBlocks[4].style.top = '100px';
            currentGameStateBlocks[4].style.left = '200px';
            currentGameStateBlocks[5].style.top = '200px';
            currentGameStateBlocks[5].style.left = '0px';
        
            currentGameStateBlocks[6].style.top = '100px';
            currentGameStateBlocks[6].style.left = '0px';
            currentGameStateBlocks[7].style.top = '100px';
            currentGameStateBlocks[7].style.left = '100px';
            currentGameStateBlocks[8].style.top = '200px';
            currentGameStateBlocks[8].style.left = '200px';
        }
        if (whatmix == 3) {
            currentGameStateBlocks[0].style.top = '100px';
            currentGameStateBlocks[0].style.left = '200px';
            currentGameStateBlocks[1].style.top = '100px';
            currentGameStateBlocks[1].style.left = '100px';
            currentGameStateBlocks[2].style.top = '100px';
            currentGameStateBlocks[2].style.left = '0px';
        
            currentGameStateBlocks[3].style.top = '200px';
            currentGameStateBlocks[3].style.left = '0px';
            currentGameStateBlocks[4].style.top = '0px';
            currentGameStateBlocks[4].style.left = '200px';
            currentGameStateBlocks[5].style.top = '0px';
            currentGameStateBlocks[5].style.left = '0px';
        
            currentGameStateBlocks[6].style.top = '0px';
            currentGameStateBlocks[6].style.left = '100px';
            currentGameStateBlocks[7].style.top = '200px';
            currentGameStateBlocks[7].style.left = '100px';
            currentGameStateBlocks[8].style.top = '200px';
            currentGameStateBlocks[8].style.left = '200px';
        }
        if (whatmix == 4) {
            currentGameStateBlocks[0].style.top = '100px';
            currentGameStateBlocks[0].style.left = '200px';
            currentGameStateBlocks[1].style.top = '0px';
            currentGameStateBlocks[1].style.left = '0px';
            currentGameStateBlocks[2].style.top = '200px';
            currentGameStateBlocks[2].style.left = '0px';
        
            currentGameStateBlocks[3].style.top = '100px';
            currentGameStateBlocks[3].style.left = '0px';
            currentGameStateBlocks[4].style.top = '200px';
            currentGameStateBlocks[4].style.left = '100px';
            currentGameStateBlocks[5].style.top = '0px';
            currentGameStateBlocks[5].style.left = '200px';
        
            currentGameStateBlocks[6].style.top = '0px';
            currentGameStateBlocks[6].style.left = '100px';
            currentGameStateBlocks[7].style.top = '100px';
            currentGameStateBlocks[7].style.left = '100px';
            currentGameStateBlocks[8].style.top = '200px';
            currentGameStateBlocks[8].style.left = '200px';
        }
    }
    saveGameToLs();
    document.querySelector('#mixBtn').classList.add('bounce');
    setTimeout(() => {  document.querySelector('#mixBtn').classList.remove('bounce') }, 700);
}


function checkMove(x, y, emptyX, emptyY) {
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
        if (x-emptyX==100||y-emptyY==100||x-emptyX==-100||y-emptyY==-100) {
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
function checkWin() {
    let currentGameStateBlocks = document.querySelectorAll('.block');
    if (difficulty == 'easy') {
        if (currentGameStateBlocks[0].style.top == '0px' &&
        currentGameStateBlocks[0].style.left == '0px'&&
        currentGameStateBlocks[1].style.top == '0px'&&
        currentGameStateBlocks[1].style.left == '100px'&&
        currentGameStateBlocks[2].style.top == '0px'&&
        currentGameStateBlocks[2].style.left == '200px'&&
    
        currentGameStateBlocks[3].style.top == '100px'&&
        currentGameStateBlocks[3].style.left == '0px'&&
        currentGameStateBlocks[4].style.top == '100px'&&
        currentGameStateBlocks[4].style.left == '100px'&&
        currentGameStateBlocks[5].style.top == '100px'&&
        currentGameStateBlocks[5].style.left == '200px'&&
    
        currentGameStateBlocks[6].style.top == '200px'&&
        currentGameStateBlocks[6].style.left == '0px'&&
        currentGameStateBlocks[7].style.top == '200px'&&
        currentGameStateBlocks[7].style.left == '100px'&&
        currentGameStateBlocks[8].style.top == '200px'&&
        currentGameStateBlocks[8].style.left == '200px') {
            let winInfo = document.querySelector('#winInfo');
            winSound.play();
            winInfo.classList.add('bounce-win');
            winInfo.classList.remove('invisible');
            setTimeout(() => {winInfo.classList.add('invisible'); winInfo.classList.remove('bounce-win') }, 3600);
        }
    }

}

function resetPuzzle() {
    let x = 2;
    let y = 2;
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
    for (let x = 0; x < 9; x++) {
        tops[index] = currentGameStateBlocks[index].style.top;
        lefts[index] = currentGameStateBlocks[index].style.left;
        index++;
    }
    localStorage.setItem('gameStateTop', JSON.stringify(tops));
    localStorage.setItem('gameStateLeft', JSON.stringify(lefts));
}

function loadGameStateFromLs() {
    if (localStorage.getItem('gameStateTop')!=null) {
        let tops = JSON.parse(localStorage.getItem('gameStateTop'));
        let lefts = JSON.parse(localStorage.getItem('gameStateLeft'));
        let index = 0;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                gameState[x][y].style.top = tops[index];
                gameState[x][y].style.left = lefts[index];
                index++; 
            }
        }
    }
}


mixBtn.addEventListener('click', () => mixPuzzles());
resetPuzzleBtn.addEventListener('click', () => {
    resetPuzzle();
    render(gameState);
    resetPuzzleBtn.classList.add('bounce');
    setTimeout(() => {
        resetPuzzleBtn.classList.remove('bounce');
    }, 700);
})

render(gameState);
loadGameStateFromLs();
