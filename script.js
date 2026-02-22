var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var tens = document.getElementById("tens");
var wordCount = document.getElementById("wordCount");
var alphabetCount = document.getElementById("alphabetCount");
var input = document.getElementById("input");
var resetButton = document.getElementById("resetButton");
var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");

window.onload = function () {
    minutes = 0;
    seconds = 0;
    tens = 0;
    wordCount = 0;
    alphabetCount = 0;
    input.addEventListener("input", () =>{

    });
}

var Interval;

const startTimer = () => {
    tens++;
    if (tens <= 9) {
        tens.innerHTML = "0" + tens;
    }
    if (tens > 9 && tens < 100) {
        tens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        seconds.innerHTML = "0" + seconds;
        tens = 0;
        tens.innerHTML = "0" + tens;
    }
    if (seconds > 59) {
        minutes++;
        minutes.innerHTML = "0" + minutes;
        seconds = 0;
        seconds.innerHTML = "0" + seconds   ;
    }
}

startButton.addEventListener("click", () => {
    console.log("start");
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
});
stopButton.addEventListener("click", () => {
    clearInterval(Interval);
});
resetButton.addEventListener("click", () => {
    clearInterval(Interval);
    minutes = 0;
    seconds = 0;
    tens = 0;
    minutes.innerHTML = "0" + minutes;
    seconds.innerHTML = "0" + seconds;
    tens.innerHTML = "0" + tens;
});