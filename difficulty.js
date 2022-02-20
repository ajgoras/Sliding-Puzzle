let easyBtn = document.querySelector('#easyBtn');
let mediumBtn = document.querySelector('#mediumBtn');
let hardBtn = document.querySelector('#hardBtn');

function changeDifficulty(diff) {
    if (diff == 'easy') {
        gameBlocks[gameBlocks.length - 1].removeAttribute('id');
        document.getElementById('game').style.width = '300px';
        document.getElementById('game').style.height = '300px';
        for (let i = 0; i < gameBlocks.length; i++) {
            gameBlocks[i].style.backgroundSize = '300px 300px';
            gameBlocks[i].style.height = '100px';
            gameBlocks[i].style.width = '100px';
        }
        while (gameField.childElementCount != 1) {
            gameField.removeChild(document.getElementsByClassName('block')[0]);
        }
        for (let i = 0; i < 8; i++) {
            let original = document.getElementsByClassName('block');
            original = original[0];
            let clone = original.cloneNode(true);
            gameField.appendChild(clone);
        }
        gameBlocks = document.querySelectorAll('.block');
        gameState = [
            [gameBlocks[0], gameBlocks[1], gameBlocks[2]],
            [gameBlocks[3], gameBlocks[4], gameBlocks[5]],
            [gameBlocks[6], gameBlocks[7], gameBlocks[8]]
        ];
        gameBlocks[gameBlocks.length - 1].id = 'emptyBlock';
        // gameBlocks[gameBlocks.length - 1].style.background = 'none';
        // gameBlocks[gameBlocks.length - 1].style.border = 'none';
        render(gameState);
        difficulty = 'easy';
    }

    if (diff == 'medium') {
        gameBlocks[gameBlocks.length-1].removeAttribute('id');
        document.getElementById('game').style.width='320px'
        document.getElementById('game').style.height = '320px'
        for (let i = 0; i < gameBlocks.length; i++) {
            gameBlocks[i].style.backgroundSize = '320px 320px';
            gameBlocks[i].style.height = '80px';
            gameBlocks[i].style.width = '80px';
        }
        while (gameField.childElementCount != 1) {
            gameField.removeChild(document.getElementsByClassName('block')[0]);
        }
        for (let i = 0; i < 15; i++) {
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
        // gameBlocks[gameBlocks.length - 1].style.background = 'none';
        // gameBlocks[gameBlocks.length - 1].style.border = 'none';
        render(gameState, 80);
        difficulty = 'medium';
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
