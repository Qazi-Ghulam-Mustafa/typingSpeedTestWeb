// var minutes = document.getElementById("minutes");
// var seconds = document.getElementById("seconds");
// var tens = document.getElementById("tens");
// var wordCount = document.getElementById("wordCount");
// var alphabetCount = document.getElementById("alphabetCount");
// var input = document.getElementById("input");
// var resetButton = document.getElementById("resetButton");
// var timer = document.getElementById("timer");
// var startButton = document.getElementById("startButton");
// var stopButton = document.getElementById("stopButton");

// window.onload = function () {
//     minutes = 0;
//     seconds = 0;
//     tens = 0;
//     wordCount = 0;
//     alphabetCount = 0;
//     input.addEventListener("input", () =>{

//     });
// }

// var Interval;

// const startTimer = () => {
//     tens++;
//     if (tens <= 9) {
//         tens.innerHTML = "0" + tens;
//     }
//     if (tens > 9 && tens < 100) {
//         tens.innerHTML = tens;
//     }
//     if (tens > 99) {
//         seconds++;
//         seconds.innerHTML = "0" + seconds;
//         tens = 0;
//         tens.innerHTML = "0" + tens;
//     }
//     if (seconds > 59) {
//         minutes++;
//         minutes.innerHTML = "0" + minutes;
//         seconds = 0;
//         seconds.innerHTML = "0" + seconds   ;
//     }
// }

// startButton.addEventListener("click", () => {
//     console.log("start");
//     clearInterval(Interval);
//     Interval = setInterval(startTimer, 10);
// });
// stopButton.addEventListener("click", () => {
//     clearInterval(Interval);
// });
// resetButton.addEventListener("click", () => {
//     clearInterval(Interval);
//     minutes = 0;
//     seconds = 0;
//     tens = 0;
//     minutes.innerHTML = "0" + minutes;
//     seconds.innerHTML = "0" + seconds;
//     tens.innerHTML = "0" + tens;
// });


// let givenText = document.getElementById("text-to-type");
// let userInput = document.getElementById("userInput");
// let StartBtn = document.getElementById("Start");
// let accuracy = document.getElementById("accuracy");
// let wpm = document.getElementById("wpm");


// userInput.addEventListener("input", () => {
//     let startTime = Date.now();
//     let userText = userInput.value;
//     let correctChar = 0;
//     for (let i = 0; i < userText.length; i++) {
//         if (userInput[i] === givenText[i]) {
//             correctChar++;
//         }
//     }
// });
// accuracy = (correctChar / givenText.length) * 100;
// accuracy.innerText = `Accuracy :${accuracy.toFixed(2)}%`;
// let words = (userInput.value.split(" ").length - 1) / ((Date.now() - startTime) / 60000).toFixed(2);
// wpm.innerText = `Word per minute : ${words.toFixed(2)}`;

let givenText = document.getElementById("text-to-type");
let userInput = document.getElementById("userInput");
let accuracyDisplay = document.getElementById("accuracy");
let wpmDisplay = document.getElementById("wpm");

let startTime = null;

userInput.addEventListener("input", () => {

    // Start timer only once
    if (!startTime) {
        startTime = Date.now();
    }

    let userText = userInput.value;
    let originalText = givenText.innerText;

    let correctChar = 0;

    for (let i = 0; i < userText.length; i++) {
        if (userText[i] === originalText[i]) {
            correctChar++;
        }
    }

    // Accuracy
    let accuracy = (correctChar / originalText.length) * 100;
    accuracyDisplay.innerText = `Accuracy : ${accuracy.toFixed(2)}%`;

    // WPM
    let timeElapsed = (Date.now() - startTime) / 60000; // minutes
    let wordsTyped = userText.trim().split(/\s+/).length;
    let wpm = wordsTyped / timeElapsed;

    wpmDisplay.innerText = `Words per minute : ${wpm.toFixed(2)}`;
});