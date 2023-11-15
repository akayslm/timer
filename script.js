let countdown;
let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('startButton');

function startTimer() {
    let seconds = 5* 60; 
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        seconds--;
        if(seconds < 0) {
            clearInterval(countdown);
            alert("Süre doldu!");
            return;
        }
        displayTimeLeft(seconds);
    }, 1000);

    startButton.disabled = true; 
}

function displayTimeLeft(seconds) {
    let minutes = Math, floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    if(remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds;
    }

    let display = `${minutes}:${remainingSeconds}`;
    timerDisplay.textContent = display;
}