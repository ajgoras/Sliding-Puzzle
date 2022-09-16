let infoButton = document.getElementById('infoButton');
let gameInfoDiv = document.getElementById('gameInfoDiv');
let gameInfoDivInside = document.getElementById('gameInfoDivInside');
let gameInfoDivInsideInside = document.getElementById('gameInfoDivInsideInside');
let everything = document.querySelectorAll('div');

infoButton.addEventListener('click', () => {
    openGameInfo();
})

closeInfoButton.addEventListener('click', () => {
    closeGameInfo();
})

function openGameInfo() {
    everything.forEach(e => {
        e.classList.add('opacity0');
    })
    setTimeout(() => {
        gameInfoDiv.classList.remove('opacity0');
        gameInfoDivInside.classList.remove('opacity0');
        gameInfoDivInsideInside.classList.remove('opacity0');
    }, 350);
}

function closeGameInfo() {
    gameInfoDiv.classList.add('opacity0');
    setTimeout(() => {
        everything.forEach(e => {
            e.classList.remove('opacity0');
            if (e.id=='gameInfoDiv') {
                e.classList.add('opacity0');
            }
        })
    }, 500);
}

