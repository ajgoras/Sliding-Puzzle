const gameBlocks = document.querySelectorAll('.block');
const gameField = document.querySelector("#game");

const gameState = [
    [gameBlocks[0], gameBlocks[1], gameBlocks[2]],
    [gameBlocks[3], gameBlocks[4], gameBlocks[5]],
    [gameBlocks[6], gameBlocks[7], gameBlocks[8]]
];

function render(gameState) {
    gameState.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            column.style.top = `${rowIndex * 100}px`;
            column.style.left = `${columnIndex * 100}px`;
            column.style['background-position-y'] = `-${rowIndex * 100}px`
            column.style['background-position-x'] = `-${columnIndex * 100}px`
            //gameField.appendChild(column);
        })
    })
}

var whatmix = 50; //random value
var mixing = new Audio('mixing.mp3');
function mixPuzzles() {
    mixing.play();
    var r1 = gameState[0];
    var r2 = gameState[1];
    var r3 = gameState[2];
    var whatmixCopy = whatmix;
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
    document.getElementById('mixBtn').className = 'bounce-4';
    setTimeout(() => {  document.getElementById('mixBtn').className = 'null'; }, 700);
}


function moveElement(element1, element2) {
    const tempTop = element1.style.top;
    const tempLeft = element1.style.left;

    element1.style.top = element2.style.top;
    element1.style.left = element2.style.left;

    element2.style.top = tempTop;
    element2.style.left = tempLeft;
}


gameField.addEventListener('click', (event) => {
    const target = event.target;
    var x, y;
    gameState.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if (column === target) {
                x = rowIndex;
                y = columnIndex;
            }
        })
    })

    var emptyX, emptyY;
    gameState.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if (column.innerText === '') {
                emptyX = rowIndex;
                emptyY = columnIndex;
            }
        })
    })

    if (
        (y === emptyY && (x + 1 === emptyX || x - 1 === emptyX)) ||
        (x === emptyX && (y + 1 === emptyY || y - 1 === emptyY))) {

        moveElement(gameState[x][y], gameState[emptyX][emptyY]);
        const temp = gameState[x][y];
        gameState[x][y] = gameState[emptyX][emptyY];
        gameState[emptyX][emptyY] = temp;
        winSound();
    }

})
var audio = new Audio('win.mp3');
function winSound() {
    var r1 = gameState[0];
    var r2 = gameState[1];
    var r3 = gameState[2];

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
        audio.play();
        document.getElementById('winInfo').className = 'bounce-win';
        setTimeout(() => {  document.getElementById('winInfo').className = 'invisible'; }, 4000);
    }
}
render(gameState);