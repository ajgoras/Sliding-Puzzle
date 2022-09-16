let gameBlocks = document.querySelectorAll('.block');
const gameField = document.querySelector(".gamePresentation");

let gameState = [
    [gameBlocks[0], gameBlocks[1], gameBlocks[2]],
    [gameBlocks[3], gameBlocks[4], gameBlocks[5]],
    [gameBlocks[6], gameBlocks[7], gameBlocks[8]]
];

function renderMainPresentation(gameState) {
    px = 100;
    gameState.forEach((rowElement, rowIndex) => {
        rowElement.forEach((columnElement, columnIndex) => {
            columnElement.style['background-position-y'] = `-${rowIndex * px}px`
            columnElement.style['background-position-x'] = `-${columnIndex * px}px`
        })
    })

    gameBlocks[0].style.top =  '0px'
    gameBlocks[0].style.left = '0px'
    gameBlocks[1].style.top =  '100px'
    gameBlocks[1].style.left = '100px'
    gameBlocks[2].style.top =  '0px'
    gameBlocks[2].style.left = '100px'

    gameBlocks[3].style.top =  '100px'
    gameBlocks[3].style.left = '0px'
    gameBlocks[4].style.top =  '200px'
    gameBlocks[4].style.left = '100px'
    gameBlocks[5].style.top =  '0px'
    gameBlocks[5].style.left = '200px'

    gameBlocks[6].style.top =  '200px'
    gameBlocks[6].style.left = '0px'
    gameBlocks[7].style.top =  '100px'
    gameBlocks[7].style.left = '200px'
    gameBlocks[8].style.top =  '200px'
    gameBlocks[8].style.left = '200px'

    function applyWin() {
        let winInfo = document.querySelector('#winInfo');
        winInfo.classList.add('bounce-win');
        winInfo.classList.remove('invisible');
        setTimeout(() => {winInfo.classList.add('invisible'); winInfo.classList.remove('bounce-win') }, 3600);
    }
    
    function solvePuzzle() {
        setTimeout(() => {
            gameBlocks[7].style.top = '200px'
        }, 600);
        setTimeout(() => {
            gameBlocks[5].style.top = '100px'
        }, 800);
        setTimeout(() => {
            gameBlocks[2].style.left = '200px'
        }, 1000);
        setTimeout(() => {
            gameBlocks[1].style.top = '0px'
        }, 1200);
        setTimeout(() => {
            gameBlocks[4].style.top = '100px'
        }, 1400);
        setTimeout(() => {
            gameBlocks[7].style.left = '100px' 
        }, 1600);
        setTimeout(() => {
            applyWin();
        }, 1900);
           
    }
    solvePuzzle();

}
renderMainPresentation(gameState);
