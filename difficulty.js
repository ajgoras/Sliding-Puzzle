let easyBtn = document.querySelector('#easyBtn');
let mediumBtn = document.querySelector('#mediumBtn');
let hardBtn = document.querySelector('#hardBtn');

function changeDifficulty(diff) {
    if (diff == 'easy') {
        gameField.classList.toggle('fade');
        setTimeout(() => {
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
            render(gameState);
            difficulty = 'easy';
            localStorage.setItem('difficulty', difficulty);
            setTimeout(() => {
                gameField.classList.toggle('fade');
            }, 300);
        }, 300);
    }

    if (diff == 'medium') {
        gameField.classList.toggle('fade');
        setTimeout(() => {
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
            render(gameState, 80);
            difficulty = 'medium';
            localStorage.setItem('difficulty', difficulty);
            setTimeout(() => {
                gameField.classList.toggle('fade');
            }, 300);
        }, 300);
    }
    
    if (diff == 'hard') {
        gameField.classList.toggle('fade');
        setTimeout(() => {
            gameBlocks[gameBlocks.length-1].removeAttribute('id');
            document.getElementById('game').style.width='350px'
            document.getElementById('game').style.height = '350px'
            for (let i = 0; i < gameBlocks.length; i++) {
                gameBlocks[i].style.backgroundSize = '350px 350px';
                gameBlocks[i].style.height = '70px';
                gameBlocks[i].style.width = '70px';
            }
            while (gameField.childElementCount != 1) {
                gameField.removeChild(document.getElementsByClassName('block')[0]);
            }
            for (let i = 0; i < 24; i++) {
                let original = document.getElementsByClassName('block');
                original = original[0];
                let clone = original.cloneNode(true);
                gameField.appendChild(clone);          
            }
            gameBlocks = document.querySelectorAll('.block');
            gameState = [
                [gameBlocks[0], gameBlocks[1], gameBlocks[2], gameBlocks[3], gameBlocks[4]],
                [gameBlocks[5], gameBlocks[6], gameBlocks[7], gameBlocks[8], gameBlocks[9]],
                [gameBlocks[10], gameBlocks[11], gameBlocks[12], gameBlocks[13], gameBlocks[14]],
                [gameBlocks[15], gameBlocks[16], gameBlocks[17], gameBlocks[18], gameBlocks[19]],
                [gameBlocks[20], gameBlocks[21], gameBlocks[22], gameBlocks[23], gameBlocks[24]]
            ];
            gameBlocks[gameBlocks.length - 1].id = 'emptyBlock';
            render(gameState, 70);
            difficulty = 'hard';
            localStorage.setItem('difficulty', difficulty);
            setTimeout(() => {
                gameField.classList.toggle('fade');
            }, 300);
        }, 300);
    }
}

easyBtn.addEventListener('click', () => {
    changeDifficulty('easy');
    resetPuzzle();
    document.getElementById('difficultydiv').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('difficultydiv').style.display = 'none';
        document.getElementById('difficultydiv').style.opacity = 1;
    }, 270);
})

mediumBtn.addEventListener('click', () => {
    changeDifficulty('medium');
    resetPuzzle();
    document.getElementById('difficultydiv').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('difficultydiv').style.display = 'none';
        document.getElementById('difficultydiv').style.opacity = 1;
    }, 270);
})

hardBtn.addEventListener('click', () => {
    changeDifficulty('hard');
    resetPuzzle();
    document.getElementById('difficultydiv').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('difficultydiv').style.display = 'none';
        document.getElementById('difficultydiv').style.opacity = 1;
    }, 270);
})
