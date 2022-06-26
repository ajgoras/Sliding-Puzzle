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
