function loadDiffFromLs() {
    if (localStorage.getItem('difficulty') != null) {
        changeDifficulty(localStorage.getItem('difficulty'));
    }
}
function loadGameStateFromLs() {
    if (localStorage.getItem('gameStateTop')!=null) {
        let tops = JSON.parse(localStorage.getItem('gameStateTop'));
        let lefts = JSON.parse(localStorage.getItem('gameStateLeft'));
        let index = 0;
        let count = 3;
        if (difficulty=='medium') {
            count = 4;
        }
        if (difficulty=='hard') {
            count = 5;
        }
        for (let x = 0; x < count; x++) {
            for (let y = 0; y < count; y++) {
                gameState[x][y].style.top = tops[index];
                gameState[x][y].style.left = lefts[index];
                index++; 
            }
        }
    }
    loadActivePhotoFromLs();
}

loadDiffFromLs();
setTimeout(() => {
    loadGameStateFromLs();
}, 320);
//loadGameStateFromLs();
//TODO: Nie dziala wgl wczytywanie przez 3 linijke w tym pliku, zawsze wczytuje domyslna ukladanke, bez tego dziala jak powinno ale tylko na easy