let easyBtn = document.querySelector('#easyBtn');
let mediumBtn = document.querySelector('#mediumBtn');
let hardBtn = document.querySelector('#hardBtn');

function changeDifficulty(diff) {
    if (diff == 'medium') {
        gameBlocks[gameBlocks.length-1].removeAttribute('id');
        document.getElementById('game').style.width='400px'
        document.getElementById('game').style.height = '400px'
        for (let i = 0; i < gameBlocks.length; i++) {
            gameBlocks[i].style.backgroundSize = '400px 400px';
        }
        for (let i = 0; i < 7; i++) {
            let original = document.getElementsByClassName('block');
            original = original[0];
            let clone = original.cloneNode(true);
            gameField.appendChild(clone);          
        }
        gameBlocks = document.querySelectorAll('.block');
        gameState = [
            [gameBlocks[0], gameBlocks[1], gameBlocks[2], gameBlocks[3]],
            [gameBlocks[4], gameBlocks[5], gameBlocks[6], gameBlocks[7]],
            [gameBlocks[8], gameBlocks[9], gameBlocks[10], gameBlocks[11]],
            [gameBlocks[12], gameBlocks[13], gameBlocks[14], gameBlocks[15]]
        ];
        gameBlocks[gameBlocks.length - 1].id = 'emptyBlock';
        gameBlocks[gameBlocks.length - 1].style.background = 'none';
        gameBlocks[gameBlocks.length - 1].style.border = 'none';
        render(gameState);
    }
}

easyBtn.addEventListener('click', () => {
    changeDifficulty('easy');
})

mediumBtn.addEventListener('click', () => {
    changeDifficulty('medium');
})

hardBtn.addEventListener('click', () => {
    changeDifficulty('hard');
})
