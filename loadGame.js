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
    if (localStorage.getItem('difficulty')!=null) {
        changeDifficulty(localStorage.getItem('difficulty'));
    }
}

loadGameStateFromLs();
