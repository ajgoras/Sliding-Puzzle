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

const gameState = [
    [gameBlocks[0], gameBlocks[1], gameBlocks[2]],
    [gameBlocks[3], gameBlocks[4], gameBlocks[5]],
    [gameBlocks[6], gameBlocks[7], gameBlocks[8]]
];

const gameStateCopy = gameState;

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
    mixingSound.play();
    let r1 = gameState[0];
    let r2 = gameState[1];
    let r3 = gameState[2];
    let whatmixCopy = whatmix;
    function randomWhatMix() {
        whatmix = Math.floor(Math.random() * 4) + 1;
    }
    randomWhatMix();
    if (whatmix==whatmixCopy) {
        randomWhatMix();
    }


    if (whatmix==1) {
        r1[0].style['background-position-y'] = '-200px';
        r1[0].style['background-position-x'] = '-100px';
        r1[1].style['background-position-y'] = '-100px';
        r1[1].style['background-position-x'] = '-100px';
        r1[2].style['background-position-y'] = '-0px';
        r1[2].style['background-position-x'] = '-100px';
    
        r2[0].style['background-position-y'] = '-0px';
        r2[0].style['background-position-x'] = '-200px';
        r2[1].style['background-position-y'] = '-200px';
        r2[1].style['background-position-x'] = '-0px';
        r2[2].style['background-position-y'] = '-0px';
        r2[2].style['background-position-x'] = '-0px';
    
        r3[0].style['background-position-y'] = '-100px';
        r3[0].style['background-position-x'] = '-0px';
        r3[1].style['background-position-y'] = '-100px';
        r3[1].style['background-position-x'] = '-200px';
        r3[2].style['background-position-y'] = '-200px';
        r3[2].style['background-position-x'] = '-200px';
    }
    if(whatmix==2) {
        r1[0].style['background-position-y'] = '-200px';
        r1[0].style['background-position-x'] = '-100px';
        r1[1].style['background-position-y'] = '-0px';
        r1[1].style['background-position-x'] = '-0px';
        r1[2].style['background-position-y'] = '-0px';
        r1[2].style['background-position-x'] = '-200px';
    
        r2[0].style['background-position-y'] = '-0px';
        r2[0].style['background-position-x'] = '-100px';
        r2[1].style['background-position-y'] = '-100px';
        r2[1].style['background-position-x'] = '-200px';
        r2[2].style['background-position-y'] = '-200px';
        r2[2].style['background-position-x'] = '-0px';
    
        r3[0].style['background-position-y'] = '-100px';
        r3[0].style['background-position-x'] = '-0px';
        r3[1].style['background-position-y'] = '-100px';
        r3[1].style['background-position-x'] = '-100px';
        r3[2].style['background-position-y'] = '-200px';
        r3[2].style['background-position-x'] = '-200px';
    }
    if (whatmix == 3) {
        r1[0].style['background-position-y'] = '-100px';
        r1[0].style['background-position-x'] = '-200px';
        r1[1].style['background-position-y'] = '-100px';
        r1[1].style['background-position-x'] = '-100px';
        r1[2].style['background-position-y'] = '-100px';
        r1[2].style['background-position-x'] = '0px';
    
        r2[0].style['background-position-y'] = '-200px';
        r2[0].style['background-position-x'] = '0px';
        r2[1].style['background-position-y'] = '0px';
        r2[1].style['background-position-x'] = '-200px';
        r2[2].style['background-position-y'] = '0px';
        r2[2].style['background-position-x'] = '0px';
    
        r3[0].style['background-position-y'] = '0px';
        r3[0].style['background-position-x'] = '-100px';
        r3[1].style['background-position-y'] = '-200px';
        r3[1].style['background-position-x'] = '-100px';
        r3[2].style['background-position-y'] = '-200px';
        r3[2].style['background-position-x'] = '-200px';
    }
    if (whatmix == 4) {
        r1[0].style['background-position-y'] = '-100px';
        r1[0].style['background-position-x'] = '-200px';
        r1[1].style['background-position-y'] = '0px';
        r1[1].style['background-position-x'] = '0px';
        r1[2].style['background-position-y'] = '-200px';
        r1[2].style['background-position-x'] = '0px';
    
        r2[0].style['background-position-y'] = '-100px';
        r2[0].style['background-position-x'] = '0px';
        r2[1].style['background-position-y'] = '-200px';
        r2[1].style['background-position-x'] = '-100px';
        r2[2].style['background-position-y'] = '0px';
        r2[2].style['background-position-x'] = '-200px';
    
        r3[0].style['background-position-y'] = '0px';
        r3[0].style['background-position-x'] = '-100px';
        r3[1].style['background-position-y'] = '-100px';
        r3[1].style['background-position-x'] = '-100px';
        r3[2].style['background-position-y'] = '-200px';
        r3[2].style['background-position-x'] = '-200px';
    }
    document.querySelector('#mixBtn').classList.add('bounce');
    setTimeout(() => {  document.querySelector('#mixBtn').classList.remove('bounce') }, 700);
}


function checkMove(x, y, emptyX, emptyY) {
    if (x == emptyX || y == emptyY) {
        if (x-emptyX==1||y-emptyY==1||x-emptyX==-1||y-emptyY==-1) {
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
        let temp = gameState[x][y];
        gameState[x][y] = gameState[emptyX][emptyY];
        gameState[emptyX][emptyY] = temp;
        moveElement(gameState[x][y], gameState[emptyX][emptyY]);
        checkWin();
    }

})
let winSound = new Audio('sound/win.mp3');
function checkWin() {
    let r1 = gameState[0];
    let r2 = gameState[1];
    let r3 = gameState[2];

    if (r1[0].style['background-position-y'] == '0px' &&
    r1[0].style['background-position-x'] == '0px'&&
    r1[1].style['background-position-y'] == '0px'&&
    r1[1].style['background-position-x'] == '-100px'&&
    r1[2].style['background-position-y'] == '0px'&&
    r1[2].style['background-position-x'] == '-200px'&&

    r2[0].style['background-position-y'] == '-100px'&&
    r2[0].style['background-position-x'] == '0px'&&
    r2[1].style['background-position-y'] == '-100px'&&
    r2[1].style['background-position-x'] == '-100px'&&
    r2[2].style['background-position-y'] == '-100px'&&
    r2[2].style['background-position-x'] == '-200px'&&

    r3[0].style['background-position-y'] == '-200px'&&
    r3[0].style['background-position-x'] == '0px'&&
    r3[1].style['background-position-y'] == '-200px'&&
    r3[1].style['background-position-x'] == '-100px'&&
    r3[2].style['background-position-y'] == '-200px'&&
    r3[2].style['background-position-x'] == '-200px') {
        let winInfo = document.querySelector('#winInfo');
        winSound.play();
        winInfo.classList.add('bounce-win');
        winInfo.classList.remove('invisible');
        setTimeout(() => {winInfo.classList.add('invisible'); winInfo.classList.remove('bounce-win') }, 3600);
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