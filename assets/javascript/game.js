var listOfWords = [
    "food",
    "stock",
    "school",
    "career",
    "market",
    "because",
    "activity",
    "resource",
    "document",
    "important"
];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var guessWord = document.getElementById("guessword-text");
var winsCount = document.getElementById("wincount-text");
var lossCount = document.getElementById("losscount-text");
var countDown = document.getElementById("guesstimes-countdown-text");
var lossesWord = document.getElementById("lossesword-text");
var logging = document.getElementById("logging-text");
var hideImg = document.getElementById("theImage");
var started = false;
var ended = false;
var loggingString = "Playing ......";
var directionString = " Press ESC to exit -->> ";

function getNewWord() {
    return listOfWords[Math.floor(Math.random()
        * listOfWords.length)];
}

function display() {
    // directions
    directionsText.textContent = directionString;
    // Display the user and computer guesses, and wins/losses/ties.
    guessWord.textContent = "Current Word: " + displayBoardStr;
    winsCount.textContent = "Wins: " + wins;
    lossCount.textContent = "Losses: " + losses;
    countDown.textContent = "Guess Remining: " + reminings;
    lossesWord.textContent = "Letters Guessed:  " + wrongGuessLetters;
    logging.textContent = "Status:  " + loggingString;
}

function initGame() {
    wins = 0;
    losses = 0;
    resetGame();
    display();
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    if (!started) {
        initGame();
        started = true;
    }
    else if (ended) {
        stop();
    }
    else {
        eventHandler(event);
        display();
    }
};
