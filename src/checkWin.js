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
            applyWin();
        }
    }
    if (difficulty == 'medium') {
        if (currentGameStateBlocks[0].style.top == '0px' &&
        currentGameStateBlocks[0].style.left == '0px'&&
        currentGameStateBlocks[1].style.top == '0px'&&
        currentGameStateBlocks[1].style.left == '80px'&&
        currentGameStateBlocks[2].style.top == '0px'&&
        currentGameStateBlocks[2].style.left == '160px'&&
        currentGameStateBlocks[3].style.top == '0px'&&
        currentGameStateBlocks[3].style.left == '240px'&&
    
        currentGameStateBlocks[4].style.top == '80px'&&
        currentGameStateBlocks[4].style.left == '0px'&&
        currentGameStateBlocks[5].style.top == '80px'&&
        currentGameStateBlocks[5].style.left == '80px'&&
        currentGameStateBlocks[6].style.top == '80px'&&
        currentGameStateBlocks[6].style.left == '160px'&&
        currentGameStateBlocks[7].style.top == '80px' &&
        currentGameStateBlocks[7].style.left == '240px' &&
            
        currentGameStateBlocks[8].style.top == '160px'&&
        currentGameStateBlocks[8].style.left == '0px'&&
        currentGameStateBlocks[9].style.top == '160px'&&
        currentGameStateBlocks[9].style.left == '80px'&&
        currentGameStateBlocks[10].style.top == '160px'&&
        currentGameStateBlocks[10].style.left == '160px'&&
        currentGameStateBlocks[11].style.top == '160px'&&
        currentGameStateBlocks[11].style.left == '240px'&&
            
        currentGameStateBlocks[12].style.top == '240px'&&
        currentGameStateBlocks[12].style.left == '0px'&&
        currentGameStateBlocks[13].style.top == '240px'&&
        currentGameStateBlocks[13].style.left == '80px'&&
        currentGameStateBlocks[14].style.top == '240px'&&
        currentGameStateBlocks[14].style.left == '160px'&&
        currentGameStateBlocks[15].style.top == '240px'&&
        currentGameStateBlocks[15].style.left == '240px') {
            applyWin();
        }
    }
    if (difficulty=='hard') {
        if (currentGameStateBlocks[0].style.top == '0px' &&
        currentGameStateBlocks[0].style.left == '0px'&&
        currentGameStateBlocks[1].style.top == '0px'&&
        currentGameStateBlocks[1].style.left == '70px'&&
        currentGameStateBlocks[2].style.top == '0px'&&
        currentGameStateBlocks[2].style.left == '140px'&&
        currentGameStateBlocks[3].style.top == '0px'&&
        currentGameStateBlocks[3].style.left == '210px'&&
        currentGameStateBlocks[4].style.top == '0px'&&
        currentGameStateBlocks[4].style.left == '280px'&&
    
        currentGameStateBlocks[5].style.top == '70px'&&
        currentGameStateBlocks[5].style.left == '0px'&&
        currentGameStateBlocks[6].style.top == '70px'&&
        currentGameStateBlocks[6].style.left == '70px'&&
        currentGameStateBlocks[7].style.top == '70px'&&
        currentGameStateBlocks[7].style.left == '140px'&&
        currentGameStateBlocks[8].style.top == '70px' &&
        currentGameStateBlocks[8].style.left == '210px' &&
        currentGameStateBlocks[9].style.top == '70px' &&
        currentGameStateBlocks[9].style.left == '280px' &&
            
        currentGameStateBlocks[10].style.top == '140px'&&
        currentGameStateBlocks[10].style.left == '0px'&&
        currentGameStateBlocks[11].style.top == '140px'&&
        currentGameStateBlocks[11].style.left == '70px'&&
        currentGameStateBlocks[12].style.top == '140px'&&
        currentGameStateBlocks[12].style.left == '140px'&&
        currentGameStateBlocks[13].style.top == '140px'&&
        currentGameStateBlocks[13].style.left == '210px' &&
        currentGameStateBlocks[14].style.top == '140px' &&
        currentGameStateBlocks[14].style.left == '280px' &&
            
                    
        currentGameStateBlocks[15].style.top == '210px'&&
        currentGameStateBlocks[15].style.left == '0px'&&
        currentGameStateBlocks[16].style.top == '210px'&&
        currentGameStateBlocks[16].style.left == '70px'&&
        currentGameStateBlocks[17].style.top == '210px'&&
        currentGameStateBlocks[17].style.left == '140px'&&
        currentGameStateBlocks[18].style.top == '210px'&&
        currentGameStateBlocks[18].style.left == '210px'&&
        currentGameStateBlocks[19].style.top == '210px'&&
        currentGameStateBlocks[19].style.left == '280px'&&
            
        currentGameStateBlocks[20].style.top == '280px'&&
        currentGameStateBlocks[20].style.left == '0px'&&
        currentGameStateBlocks[21].style.top == '280px'&&
        currentGameStateBlocks[21].style.left == '70px'&&
        currentGameStateBlocks[22].style.top == '280px'&&
        currentGameStateBlocks[22].style.left == '140px'&&
        currentGameStateBlocks[23].style.top == '280px'&&
        currentGameStateBlocks[23].style.left == '210px'&&
        currentGameStateBlocks[24].style.top == '280px'&&
        currentGameStateBlocks[24].style.left == '280px') {
            applyWin();
        }
    }
    return false;
}

function applyWin() {
    let winInfo = document.querySelector('#winInfo');
    winSound.play();
    resetMoves();
    stopCountdown();
    winInfo.classList.add('bounce-win');
    winInfo.classList.remove('invisible');
    setTimeout(() => {winInfo.classList.add('invisible'); winInfo.classList.remove('bounce-win') }, 3600);
}