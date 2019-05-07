var wordsLibary = [
    "school",
    "important",
    "career",
    "activity",
    "resource"
];

function getNewWord() {
    return wordsLibary[Math.floor(Math.random()
        * wordsLibary.length)];
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    eventHandler(event)
    reFreshDisplay()
};

