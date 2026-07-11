const quotes = [
    "Practice makes perfect.",
    "Success comes to those who never quit.",
    "Learning JavaScript requires patience and consistent practice.",
    "Frontend development combines creativity with logical problem solving.",
    "Every experienced programmer was once a beginner who refused to give up.",
    "Clean and readable code is more valuable than clever but confusing solutions.",
    "The best developers constantly improve their skills by building real world projects.",
    "Programming is the art of transforming complex problems into elegant and maintainable solutions.",
    "Successful software engineers embrace debugging because every error teaches a valuable lesson about their code.",
    "Mastering web development requires persistence, continuous learning, attention to detail, and the determination to solve challenging problems every single day."
];

const givenText = document.getElementById("text-to-type");
const userInput = document.getElementById("userInput");
const accuracyDisplay = document.getElementById("accuracy");
const WpmDisplay = document.getElementById("wpm");
const mistakeDisplay = document.getElementById("mistake");
const progress = document.getElementById("progress");
const successMessage = document.getElementById("successMessage");
const CompletionMessage = document.getElementById("CompletionMessage");
const restartBtn = document.getElementById("restartBtn")

let currentQuote = 0;
let startTime = null;

loadQuote();

function loadQuote() {
    givenText.innerText = quotes[currentQuote];
    progress.innerText = `Quote ${currentQuote + 1} / ${quotes.length}`;

    userInput.value = "";
    userInput.focus();

    startTime = null;
    successMessage.innerText = "";
    CompletionMessage.innerText = "";
}

userInput.addEventListener("input", () => {

    if (!startTime) {
        startTime = Date.now();
    }

    const userText = userInput.value;
    const originalText = quotes[currentQuote];

    let correctChar = 0;
    let mistakes = 0;

    for (let i = 0; i < userText.length; i++) {

        if (userText[i] === originalText[i]) {
            correctChar++;
        } else {
            mistakes++;
        }

    }

    // Accuracy
    let accuracy = userText.length === 0
        ? 0
        : (correctChar / userText.length) * 100;

    accuracyDisplay.innerText = `Accuracy : ${accuracy.toFixed(2)}%`;

    // Mistakes
    mistakeDisplay.innerText = `Mistakes : ${mistakes}`;

    // Time
    let minutes = (Date.now() - startTime) / 60000;

    // Word Count
    let words = userText.trim() === ""
        ? 0
        : userText.trim().split(/\s+/).length;

    // WPM
    let wpm = minutes > 0 ? words / minutes : 0;

    WpmDisplay.innerText = `Words Per Minute : ${wpm.toFixed(2)}`;

    // Quote Completed
    if (userText === originalText) {
        userInput.disabled = true;
        currentQuote++;

        if (currentQuote < quotes.length) {

            successMessage.innerText = "✅ Correct! Loading next quote...";

            setTimeout(() => {
                userInput.disabled = false;
                loadQuote();
            }, 800);

        } else {

            CompletionMessage.innerText =
                "🎉 Congratulations! You completed all 10 quotes.";

            progress.innerText = "Completed ✅";
            restartBtn.style.display = "block";

            userInput.disabled = true;
        }
    }

});

restartBtn.addEventListener("click", () => {
    currentQuote = 0;
    startTime = null;
    userInput.disabled = false;
    loadQuote();
    accuracyDisplay.innerText = "Accuracy: 0%";
    WpmDisplay.innerText = "Words Per Minute: 0";
    mistakeDisplay.innerText = "Mistakes: 0";


    restartBtn.style.display = "none";
})