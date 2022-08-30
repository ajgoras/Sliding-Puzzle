let countdownRun = false;
let countdownTime;
let timer = document.getElementById('timer');

if (localStorage.getItem('time') != null) {
    setTimeout(() => {
        if (!checkWin()) {
            countdownTime = localStorage.getItem('time');
            startCountdown();
            
        }
    }, 330);
}
function checkCountdown() {
    if (countdownRun == false) {
        countdownTime = 0;
        timer.innerHTML = 'Time: 0:00';
        startCountdown();
    }
}

function startCountdown() {
    countdownRun = true;
    updateTimeInterval = setInterval(() => {
        updateDOMCountdown();
    }, 1000);
}

function stopCountdown() {
    countdownRun = false;
    clearInterval(updateTimeInterval);
}

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = (time % 60).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function updateDOMCountdown() {
    countdownTime++;
    let formattedTime = countdownTime;
    formattedTime = formatTime(formattedTime);
    timer.innerHTML = 'Time: ' + formattedTime;
    localStorage.setItem('time', countdownTime);
}
