var listOfWords = [
    "school",
    "important",
    "career",
    "activity",
    "resource"
];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var guessWord = document.getElementById("guessword-text");
var winsCount = document.getElementById("wincount-text");
var lossCount = document.getElementById("losscount-text");
var countDown = document.getElementById("guesstimes-countdown-text");
var lossesWord = document.getElementById("lossesword-text");
var logging = document.getElementById("logging-text");
var started = false;
var ended = false;
var loggingString = "Playing ......";


function getNewWord() {
    return listOfWords[Math.floor(Math.random()
        * listOfWords.length)];
}

function display() {
    // Hide the directions
    directionsText.textContent = "";
    // Display the user and computer guesses, and wins/losses/ties.
    guessWord.textContent = displayBoardStr;
    winsCount.textContent = "wins: " + wins;
    lossCount.textContent = "losses: " + losses;
    countDown.textContent = "guess remining: " + reminings;
    lossesWord.textContent = "Input:  " + wrongGuessLetters;
    logging.textContent = "Status:  " + loggingString;
}

function initGame(){
    wins = 0;
    losses = 0;
    resetGame();
    display();    
}


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    if (! started) {
        initGame();
        started = true;
    }
    else if (ended){
        return;
    }
    else {
        eventHandler(event); 
        display();       
    }    
};
