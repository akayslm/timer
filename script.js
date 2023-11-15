let countdown;
let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');

function startTimer() {
    let seconds = 5 * 60; // 5 dakika
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(countdown);
            alert("Süre doldu!");
            enableButtons(); // Butonları tekrar etkinleştir
            return;
        }
        displayTimeLeft(seconds);
    }, 1000);

    disableButtons(); // Başla butonunu devre dışı bırak
}

function stopTimer() {
    clearInterval(countdown);
    enableButtons(); // Butonları tekrar etkinleştir
}

function displayTimeLeft(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds;
    }

    let display = `${minutes}:${remainingSeconds}`;
    timerDisplay.textContent = display;
}

function disableButtons() {
    startButton.disabled = true;
    stopButton.disabled = false;
}

function enableButtons() {
    startButton.disabled = false;
    stopButton.disabled = true;
}
