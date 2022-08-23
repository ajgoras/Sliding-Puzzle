//for devtools
/*

let currentGameStateBlocks = document.querySelectorAll('.block');

for (let i = 0; i < currentGameStateBlocks.length; i++) {
    console.log(currentGameStateBlocks[i].style.top);
    console.log(currentGameStateBlocks[i].style.left);
    if(i==3||i==7||i==11)
        console.log('')
}

*/

let whatmix = 0;
let previousWhatMix = 0;
let mixingSound = new Audio('sound/mixing.mp3');
function mixPuzzles() {
    previousWhatMix = whatmix;
    let currentGameStateBlocks = document.querySelectorAll('.block');
    mixingSound.play();
    function randomWhatMix() {
        whatmix = Math.floor(Math.random() * 4) + 1;
        if (whatmix==previousWhatMix) {
            randomWhatMix();
        }
    }
    randomWhatMix();

    if (difficulty=='easy') {
        if (whatmix==1) {
            currentGameStateBlocks[0].style.top =  '0px'
            currentGameStateBlocks[0].style.left = '100px'
            currentGameStateBlocks[1].style.top =  '100px'
            currentGameStateBlocks[1].style.left = '0px'
            currentGameStateBlocks[2].style.top =  '0px'
            currentGameStateBlocks[2].style.left = '200px'
        
            currentGameStateBlocks[3].style.top =  '200px'
            currentGameStateBlocks[3].style.left = '0px'
            currentGameStateBlocks[4].style.top =  '200px'
            currentGameStateBlocks[4].style.left = '100px'
            currentGameStateBlocks[5].style.top =  '100px'
            currentGameStateBlocks[5].style.left = '100px'
        
            currentGameStateBlocks[6].style.top =  '100px'
            currentGameStateBlocks[6].style.left = '200px'
            currentGameStateBlocks[7].style.top =  '0px'
            currentGameStateBlocks[7].style.left = '0px'
            currentGameStateBlocks[8].style.top =  '200px'
            currentGameStateBlocks[8].style.left = '200px'
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
            currentGameStateBlocks[0].style.top =  '200px'
            currentGameStateBlocks[0].style.left = '100px'
            currentGameStateBlocks[1].style.top =  '0px'
            currentGameStateBlocks[1].style.left = '0px'
            currentGameStateBlocks[2].style.top =  '200px'
            currentGameStateBlocks[2].style.left = '0px'
        
            currentGameStateBlocks[3].style.top =  '0px'
            currentGameStateBlocks[3].style.left = '200px'
            currentGameStateBlocks[4].style.top =  '100px'
            currentGameStateBlocks[4].style.left = '200px'
            currentGameStateBlocks[5].style.top =  '100px'
            currentGameStateBlocks[5].style.left = '0px'
        
            currentGameStateBlocks[6].style.top =  '100px'
            currentGameStateBlocks[6].style.left = '100px'
            currentGameStateBlocks[7].style.top =  '0px'
            currentGameStateBlocks[7].style.left = '100px'
            currentGameStateBlocks[8].style.top =  '200px'
            currentGameStateBlocks[8].style.left = '200px'
        }
        if (whatmix == 4) {
            currentGameStateBlocks[0].style.top =  '0px'
            currentGameStateBlocks[0].style.left = '100px'
            currentGameStateBlocks[1].style.top =  '100px'
            currentGameStateBlocks[1].style.left = '100px'
            currentGameStateBlocks[2].style.top =  '200px'
            currentGameStateBlocks[2].style.left = '100px'
        
            currentGameStateBlocks[3].style.top =  '100px'
            currentGameStateBlocks[3].style.left = '200px'
            currentGameStateBlocks[4].style.top =  '100px'
            currentGameStateBlocks[4].style.left = '0px'
            currentGameStateBlocks[5].style.top =  '0px'
            currentGameStateBlocks[5].style.left = '0px'
        
            currentGameStateBlocks[6].style.top =  '0px'
            currentGameStateBlocks[6].style.left = '200px'
            currentGameStateBlocks[7].style.top =  '200px'
            currentGameStateBlocks[7].style.left = '0px'
            currentGameStateBlocks[8].style.top =  '200px'
            currentGameStateBlocks[8].style.left = '200px'
        }
    }
    if (difficulty=='medium') {
        if (whatmix==1) {
            currentGameStateBlocks[0].style.top  = '0px';
            currentGameStateBlocks[0].style.left = '80px';
            currentGameStateBlocks[1].style.top  = '80px';
            currentGameStateBlocks[1].style.left = '0px';
            currentGameStateBlocks[2].style.top  = '0px';
            currentGameStateBlocks[2].style.left = '240px';
            currentGameStateBlocks[3].style.top = '80px';
            currentGameStateBlocks[3].style.left = '240px';
            
            currentGameStateBlocks[4].style.top  = '0px';
            currentGameStateBlocks[4].style.left = '0px';
            currentGameStateBlocks[5].style.top  = '80px';
            currentGameStateBlocks[5].style.left = '80px';
            currentGameStateBlocks[6].style.top  = '80px';
            currentGameStateBlocks[6].style.left = '160px';
            currentGameStateBlocks[7].style.top = '160px';
            currentGameStateBlocks[7].style.left = '160px';
            
            currentGameStateBlocks[8].style.top   = '240px';
            currentGameStateBlocks[8].style.left  = '0px';
            currentGameStateBlocks[9].style.top   = '160px';
            currentGameStateBlocks[9].style.left  = '0px';
            currentGameStateBlocks[10].style.top  = '0px';
            currentGameStateBlocks[10].style.left = '160px';
            currentGameStateBlocks[11].style.top = '240px';
            currentGameStateBlocks[11].style.left = '160px';
            
            currentGameStateBlocks[12].style.top  = '160px';
            currentGameStateBlocks[12].style.left = '80px';
            currentGameStateBlocks[13].style.top  = '240px';
            currentGameStateBlocks[13].style.left = '80px';
            currentGameStateBlocks[14].style.top  = '160px';
            currentGameStateBlocks[14].style.left = '240px';
            currentGameStateBlocks[15].style.top = '240px';
            currentGameStateBlocks[15].style.left = '240px';
        }
        if (whatmix==2) {
            currentGameStateBlocks[0].style.top  = '80px';
            currentGameStateBlocks[0].style.left =  '0px';
            currentGameStateBlocks[1].style.top  =  '0px';
            currentGameStateBlocks[1].style.left = '80px';
            currentGameStateBlocks[2].style.top  = '80px';
            currentGameStateBlocks[2].style.left =  '160px';
            currentGameStateBlocks[3].style.top =  '0px';
            currentGameStateBlocks[3].style.left =  '160px';
            
            currentGameStateBlocks[4].style.top  = '160px'
            currentGameStateBlocks[4].style.left = '0px'
            currentGameStateBlocks[5].style.top  = '0px'
            currentGameStateBlocks[5].style.left = '0px'
            currentGameStateBlocks[6].style.top  = '0px'
            currentGameStateBlocks[6].style.left = '240px'
            currentGameStateBlocks[7].style.top  = '80px'
            currentGameStateBlocks[7].style.left = '240px'
            
            currentGameStateBlocks[8].style.top   = '160px';
            currentGameStateBlocks[8].style.left  = '80px';
            currentGameStateBlocks[9].style.top   = '240px';
            currentGameStateBlocks[9].style.left  = '80px';
            currentGameStateBlocks[10].style.top  = '80px';
            currentGameStateBlocks[10].style.left = '80px';
            currentGameStateBlocks[11].style.top  = '160px';
            currentGameStateBlocks[11].style.left = '160px';
            
            currentGameStateBlocks[12].style.top  = '240px';
            currentGameStateBlocks[12].style.left = '0px';
            currentGameStateBlocks[13].style.top  = '240px';
            currentGameStateBlocks[13].style.left = '160px';
            currentGameStateBlocks[14].style.top  = '160px';
            currentGameStateBlocks[14].style.left = '240px';
            currentGameStateBlocks[15].style.top  = '240px';
            currentGameStateBlocks[15].style.left = '240px';
        }
        if (whatmix==3) {
            currentGameStateBlocks[0].style.top  = '80px';
            currentGameStateBlocks[0].style.left = '160px';
            currentGameStateBlocks[1].style.top  = '80px';
            currentGameStateBlocks[1].style.left = '0px';
            currentGameStateBlocks[2].style.top  = '240px';
            currentGameStateBlocks[2].style.left = '160px';
            currentGameStateBlocks[3].style.top  = '160px';
            currentGameStateBlocks[3].style.left = '160px';
            
            currentGameStateBlocks[4].style.top  = '80px';
            currentGameStateBlocks[4].style.left = '80px';
            currentGameStateBlocks[5].style.top  = '160px';
            currentGameStateBlocks[5].style.left = '240px';
            currentGameStateBlocks[6].style.top  = '160px';
            currentGameStateBlocks[6].style.left = '80px';
            currentGameStateBlocks[7].style.top  = '0px';
            currentGameStateBlocks[7].style.left = '160px';
            
            currentGameStateBlocks[8].style.top   = '0px';
            currentGameStateBlocks[8].style.left  = '80px';
            currentGameStateBlocks[9].style.top   = '240px';
            currentGameStateBlocks[9].style.left  = '0px';
            currentGameStateBlocks[10].style.top  = '0px';
            currentGameStateBlocks[10].style.left = '0px';
            currentGameStateBlocks[11].style.top  = '80px';
            currentGameStateBlocks[11].style.left = '240px';
            
            currentGameStateBlocks[12].style.top  = '160px';
            currentGameStateBlocks[12].style.left = '0px';
            currentGameStateBlocks[13].style.top  = '0px';
            currentGameStateBlocks[13].style.left = '240px';
            currentGameStateBlocks[14].style.top  = '240px';
            currentGameStateBlocks[14].style.left = '80px';
            currentGameStateBlocks[15].style.top  = '240px';
            currentGameStateBlocks[15].style.left = '240px';
        }
        if (whatmix==4) {
            currentGameStateBlocks[0].style.top  =  '0px'
            currentGameStateBlocks[0].style.left =  '80px'
            currentGameStateBlocks[1].style.top  =  '0px'
            currentGameStateBlocks[1].style.left =  '160px'
            currentGameStateBlocks[2].style.top  =  '0px'
            currentGameStateBlocks[2].style.left =  '240px'
            currentGameStateBlocks[3].style.top  =  '160px'
            currentGameStateBlocks[3].style.left =  '240px'
            
            currentGameStateBlocks[4].style.top  =  '80px'
            currentGameStateBlocks[4].style.left =  '0px'
            currentGameStateBlocks[5].style.top  =  '0px'
            currentGameStateBlocks[5].style.left =  '0px'
            currentGameStateBlocks[6].style.top  =  '80px'
            currentGameStateBlocks[6].style.left =  '80px'
            currentGameStateBlocks[7].style.top  =  '80px'
            currentGameStateBlocks[7].style.left =  '160px'
            
            currentGameStateBlocks[8].style.top   = '240px'
            currentGameStateBlocks[8].style.left  = '0px'
            currentGameStateBlocks[9].style.top   = '160px'
            currentGameStateBlocks[9].style.left  = '80px'
            currentGameStateBlocks[10].style.top  = '240px'
            currentGameStateBlocks[10].style.left = '80px'
            currentGameStateBlocks[11].style.top  = '160px'
            currentGameStateBlocks[11].style.left = '160px'
            
            currentGameStateBlocks[12].style.top  = '160px'
            currentGameStateBlocks[12].style.left = '0px'
            currentGameStateBlocks[13].style.top  = '80px'
            currentGameStateBlocks[13].style.left = '240px'
            currentGameStateBlocks[14].style.top  = '240px'
            currentGameStateBlocks[14].style.left = '160px'
            currentGameStateBlocks[15].style.top  = '240px'
            currentGameStateBlocks[15].style.left = '240px'
        }
    }
    saveGameToLs();
    document.querySelector('#mixBtn').classList.add('bounce');
    setTimeout(() => {  document.querySelector('#mixBtn').classList.remove('bounce') }, 700);
}
