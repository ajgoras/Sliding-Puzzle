let whichMix = 0;
let previousWhichMix = 0;
let mixingSound = new Audio('sound/mixing.mp3');
function mixPuzzles() {
    previousWhichMix = whichMix;
    let currentGameStateBlocks = document.querySelectorAll('.block');
    mixingSound.play();
    function randomWhichMix() {
        whichMix = Math.floor(Math.random() * 4) + 1;
        if (whichMix==previousWhichMix) {
            randomWhichMix();
        }
    }
    randomWhichMix();

    console.log(whichMix);

    if (difficulty=='easy') {
        if (whichMix==1) {
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
        if(whichMix==2) {
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
        if (whichMix == 3) {
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
        if (whichMix == 4) {
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
        if (whichMix==1) {
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
        if (whichMix==2) {
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
        if (whichMix==3) {
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
        if (whichMix==4) {
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
    if (difficulty=='hard') {
        if (whichMix == 1) {
          currentGameStateBlocks[0].style.top = "70px";
          currentGameStateBlocks[0].style.left = "0px";
          currentGameStateBlocks[1].style.top = "0px";
          currentGameStateBlocks[1].style.left = "0px";
          currentGameStateBlocks[2].style.top = "0px";
          currentGameStateBlocks[2].style.left = "70px";
          currentGameStateBlocks[3].style.top = "0px";
          currentGameStateBlocks[3].style.left = "140px";
          currentGameStateBlocks[4].style.top = "70px";
          currentGameStateBlocks[4].style.left = "280px";

          currentGameStateBlocks[5].style.top = "70px";
          currentGameStateBlocks[5].style.left = "70px";
          currentGameStateBlocks[6].style.top = "140px";
          currentGameStateBlocks[6].style.left = "70px";
          currentGameStateBlocks[7].style.top = "70px";
          currentGameStateBlocks[7].style.left = "140px";
          currentGameStateBlocks[8].style.top = "0px";
          currentGameStateBlocks[8].style.left = "280px";
          currentGameStateBlocks[9].style.top = "140px";
          currentGameStateBlocks[9].style.left = "280px";

          currentGameStateBlocks[10].style.top = "210px";
          currentGameStateBlocks[10].style.left = "0px";
          currentGameStateBlocks[11].style.top = "140px";
          currentGameStateBlocks[11].style.left = "0px";
          currentGameStateBlocks[12].style.top = "210px";
          currentGameStateBlocks[12].style.left = "140px";
          currentGameStateBlocks[13].style.top = "280px";
          currentGameStateBlocks[13].style.left = "140px";
          currentGameStateBlocks[14].style.top = "0px";
          currentGameStateBlocks[14].style.left = "210px";

          currentGameStateBlocks[15].style.top = "210px";
          currentGameStateBlocks[15].style.left = "70px";
          currentGameStateBlocks[16].style.top = "280px";
          currentGameStateBlocks[16].style.left = "70px";
          currentGameStateBlocks[17].style.top = "210px";
          currentGameStateBlocks[17].style.left = "280px";
          currentGameStateBlocks[18].style.top = "280px";
          currentGameStateBlocks[18].style.left = "210px";
          currentGameStateBlocks[19].style.top = "70px";
          currentGameStateBlocks[19].style.left = "210px";

          currentGameStateBlocks[20].style.top = "280px";
          currentGameStateBlocks[20].style.left = "0px";
          currentGameStateBlocks[21].style.top = "140px";
          currentGameStateBlocks[21].style.left = "140px";
          currentGameStateBlocks[22].style.top = "210px";
          currentGameStateBlocks[22].style.left = "210px";
          currentGameStateBlocks[23].style.top = "140px";
          currentGameStateBlocks[23].style.left = "210px";
          currentGameStateBlocks[24].style.top = "280px";
          currentGameStateBlocks[24].style.left = "280px";
        }
        if (whichMix == 2) {
          currentGameStateBlocks[0].style.top = "140px";
          currentGameStateBlocks[0].style.left = "0px";
          currentGameStateBlocks[1].style.top = "0px";
          currentGameStateBlocks[1].style.left = "210px";
          currentGameStateBlocks[2].style.top = "0px";
          currentGameStateBlocks[2].style.left = "70px";
          currentGameStateBlocks[3].style.top = "70px";
          currentGameStateBlocks[3].style.left = "280px";
          currentGameStateBlocks[4].style.top = "70px";
          currentGameStateBlocks[4].style.left = "210px";

          currentGameStateBlocks[5].style.top = "70px";
          currentGameStateBlocks[5].style.left = "0px";
          currentGameStateBlocks[6].style.top = "70px";
          currentGameStateBlocks[6].style.left = "140px";
          currentGameStateBlocks[7].style.top = "0px";
          currentGameStateBlocks[7].style.left = "0px";
          currentGameStateBlocks[8].style.top = "0px";
          currentGameStateBlocks[8].style.left = "140px";
          currentGameStateBlocks[9].style.top = "0px";
          currentGameStateBlocks[9].style.left = "280px";

          currentGameStateBlocks[10].style.top = "210px";
          currentGameStateBlocks[10].style.left = "0px";
          currentGameStateBlocks[11].style.top = "140px";
          currentGameStateBlocks[11].style.left = "140px";
          currentGameStateBlocks[12].style.top = "70px";
          currentGameStateBlocks[12].style.left = "70px";
          currentGameStateBlocks[13].style.top = "140px";
          currentGameStateBlocks[13].style.left = "210px";
          currentGameStateBlocks[14].style.top = "140px";
          currentGameStateBlocks[14].style.left = "280px";

          currentGameStateBlocks[15].style.top = "280px";
          currentGameStateBlocks[15].style.left = "0px";
          currentGameStateBlocks[16].style.top = "140px";
          currentGameStateBlocks[16].style.left = "70px";
          currentGameStateBlocks[17].style.top = "280px";
          currentGameStateBlocks[17].style.left = "140px";
          currentGameStateBlocks[18].style.top = "210px";
          currentGameStateBlocks[18].style.left = "140px";
          currentGameStateBlocks[19].style.top = "280px";
          currentGameStateBlocks[19].style.left = "210px";

          currentGameStateBlocks[20].style.top = "280px";
          currentGameStateBlocks[20].style.left = "70px";
          currentGameStateBlocks[21].style.top = "210px";
          currentGameStateBlocks[21].style.left = "70px";
          currentGameStateBlocks[22].style.top = "210px";
          currentGameStateBlocks[22].style.left = "280px";
          currentGameStateBlocks[23].style.top = "210px";
          currentGameStateBlocks[23].style.left = "210px";
          currentGameStateBlocks[24].style.top = "280px";
          currentGameStateBlocks[24].style.left = "280px";
        }
        if (whichMix == 3) {
          currentGameStateBlocks[0].style.top = "0px";
          currentGameStateBlocks[0].style.left = "70px";
          currentGameStateBlocks[1].style.top = "70px";
          currentGameStateBlocks[1].style.left = "0px";
          currentGameStateBlocks[2].style.top = "0px";
          currentGameStateBlocks[2].style.left = "0px";
          currentGameStateBlocks[3].style.top = "0px";
          currentGameStateBlocks[3].style.left = "210px";
          currentGameStateBlocks[4].style.top = "140px";
          currentGameStateBlocks[4].style.left = "280px";

          currentGameStateBlocks[5].style.top = "210px";
          currentGameStateBlocks[5].style.left = "0px";
          currentGameStateBlocks[6].style.top = "140px";
          currentGameStateBlocks[6].style.left = "140px";
          currentGameStateBlocks[7].style.top = "280px";
          currentGameStateBlocks[7].style.left = "70px";
          currentGameStateBlocks[8].style.top = "280px";
          currentGameStateBlocks[8].style.left = "140px";
          currentGameStateBlocks[9].style.top = "70px";
          currentGameStateBlocks[9].style.left = "210px";

          currentGameStateBlocks[10].style.top = "0px";
          currentGameStateBlocks[10].style.left = "140px";
          currentGameStateBlocks[11].style.top = "70px";
          currentGameStateBlocks[11].style.left = "140px";
          currentGameStateBlocks[12].style.top = "70px";
          currentGameStateBlocks[12].style.left = "280px";
          currentGameStateBlocks[13].style.top = "280px";
          currentGameStateBlocks[13].style.left = "210px";
          currentGameStateBlocks[14].style.top = "140px";
          currentGameStateBlocks[14].style.left = "210px";

          currentGameStateBlocks[15].style.top = "280px";
          currentGameStateBlocks[15].style.left = "0px";
          currentGameStateBlocks[16].style.top = "210px";
          currentGameStateBlocks[16].style.left = "70px";
          currentGameStateBlocks[17].style.top = "0px";
          currentGameStateBlocks[17].style.left = "280px";
          currentGameStateBlocks[18].style.top = "140px";
          currentGameStateBlocks[18].style.left = "0px";
          currentGameStateBlocks[19].style.top = "210px";
          currentGameStateBlocks[19].style.left = "210px";

          currentGameStateBlocks[20].style.top = "210px";
          currentGameStateBlocks[20].style.left = "280px";
          currentGameStateBlocks[21].style.top = "140px";
          currentGameStateBlocks[21].style.left = "70px";
          currentGameStateBlocks[22].style.top = "70px";
          currentGameStateBlocks[22].style.left = "70px";
          currentGameStateBlocks[23].style.top = "210px";
          currentGameStateBlocks[23].style.left = "140px";
          currentGameStateBlocks[24].style.top = "280px";
          currentGameStateBlocks[24].style.left = "280px";
        }
        if (whichMix == 4) {
          currentGameStateBlocks[0].style.top = "0px";
          currentGameStateBlocks[0].style.left = "140px";
          currentGameStateBlocks[1].style.top = "70px";
          currentGameStateBlocks[1].style.left = "70px";
          currentGameStateBlocks[2].style.top = "0px";
          currentGameStateBlocks[2].style.left = "210px";
          currentGameStateBlocks[3].style.top = "280px";
          currentGameStateBlocks[3].style.left = "140px";
          currentGameStateBlocks[4].style.top = "70px";
          currentGameStateBlocks[4].style.left = "280px";

          currentGameStateBlocks[5].style.top = "0px";
          currentGameStateBlocks[5].style.left = "0px";
          currentGameStateBlocks[6].style.top = "0px";
          currentGameStateBlocks[6].style.left = "280px";
          currentGameStateBlocks[7].style.top = "280px";
          currentGameStateBlocks[7].style.left = "70px";
          currentGameStateBlocks[8].style.top = "280px";
          currentGameStateBlocks[8].style.left = "0px";
          currentGameStateBlocks[9].style.top = "70px";
          currentGameStateBlocks[9].style.left = "210px";

          currentGameStateBlocks[10].style.top = "70px";
          currentGameStateBlocks[10].style.left = "0px";
          currentGameStateBlocks[11].style.top = "140px";
          currentGameStateBlocks[11].style.left = "210px";
          currentGameStateBlocks[12].style.top = "210px";
          currentGameStateBlocks[12].style.left = "70px";
          currentGameStateBlocks[13].style.top = "70px";
          currentGameStateBlocks[13].style.left = "140px";
          currentGameStateBlocks[14].style.top = "140px";
          currentGameStateBlocks[14].style.left = "140px";

          currentGameStateBlocks[15].style.top = "140px";
          currentGameStateBlocks[15].style.left = "0px";
          currentGameStateBlocks[16].style.top = "140px";
          currentGameStateBlocks[16].style.left = "70px";
          currentGameStateBlocks[17].style.top = "210px";
          currentGameStateBlocks[17].style.left = "210px";
          currentGameStateBlocks[18].style.top = "280px";
          currentGameStateBlocks[18].style.left = "210px";
          currentGameStateBlocks[19].style.top = "210px";
          currentGameStateBlocks[19].style.left = "280px";

          currentGameStateBlocks[20].style.top = "210px";
          currentGameStateBlocks[20].style.left = "140px";
          currentGameStateBlocks[21].style.top = "0px";
          currentGameStateBlocks[21].style.left = "70px";
          currentGameStateBlocks[22].style.top = "140px";
          currentGameStateBlocks[22].style.left = "280px";
          currentGameStateBlocks[23].style.top = "210px";
          currentGameStateBlocks[23].style.left = "0px";
          currentGameStateBlocks[24].style.top = "280px";
          currentGameStateBlocks[24].style.left = "280px";
        }
    }
    saveGameToLs();
    stopCountdown();
    resetCountdown();
    resetMoves();
    setMovesToZeroInDOM();
    document.querySelector('#mixBtn').classList.add('bounce');
    setTimeout(() => {  document.querySelector('#mixBtn').classList.remove('bounce') }, 700);
}
