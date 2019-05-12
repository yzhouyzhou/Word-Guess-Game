// Creating variables to hold the number of wins, losses started at 0.
var wins = 0;
var losses = 0;
var reminings = 10;
var wrongGuessLetters = "";
var guessBoardWord = ""
var userGuessedOneLetter = "";
var displayBoardStr = "";
var guessedWordArray = [];
let indexGuessWord, indexWrongLetters, indexRightLetters = 0;

function resetGame() {
    guessBoardWord = getNewWord();
    reminings = 10;
    wrongGuessLetters = "";
    displayBoardStr = "";
    guessedWordArray = [];
    for (let i = 0; i < guessBoardWord.length; i++) {
        guessedWordArray.push("_");
        displayBoardStr += "_     ";
    }
}

function eventHandler(_event) {
    userGuessedOneLetter = event.key.toLowerCase();
    loggingString = "Playing ......";

    if (userGuessedOneLetter === 'escape') {
        loggingString = "Exist ... Thanks for playing ..."
        directionString = "Refresh browser to resume -->>";
        ended = true;
        return;
    }

    indexGuessWord = guessBoardWord.search(userGuessedOneLetter);
    indexWrongLetters = wrongGuessLetters.search(userGuessedOneLetter);
    indexRightLetters = displayBoardStr.search(userGuessedOneLetter)
    if ((indexGuessWord == -1) && (indexWrongLetters == -1)) {
        // Wrong letter, add into wrongGuess, reminings reduce,
        reminings--;
        if (wrongGuessLetters.length >= 1) {
            wrongGuessLetters += "," + userGuessedOneLetter;
        }
        else { // the first char, no need ","
            wrongGuessLetters += userGuessedOneLetter;
        }        
    }
    else if (indexWrongLetters != -1) {
        // duplicated Wrong letter, do nothing, upper the guess, beeping 
        wrongGuessLetters += "," + userGuessedOneLetter.toUpperCase();
        document.getElementById("beepAudio").play();
    }
    else if (indexRightLetters != -1) {
        // right letter but duplicated, do nothing, add a ",", beeping
        wrongGuessLetters += ",";
        document.getElementById("beepAudio").play();
    }
    else {
        // right letter, check multiples, replace board, refresh display string
        displayBoardStr = "";
        var strArray = guessBoardWord.split("");
        for (var i = 0; i < strArray.length; i++) {
            if (strArray[i] === userGuessedOneLetter) {
                guessedWordArray[i] = userGuessedOneLetter;
            }
            displayBoardStr += guessedWordArray[i] + "     ";
        }
    }

    // Summarize: where you are at, win or loss
    if (reminings == 0) {
        losses++;
        loggingString = "Sorry Just Lost One";
        resetGame();
        document.getElementById("beepAudio").play();
    }
    if (displayBoardStr.search("_") == -1) {
        wins++;
        loggingString = "You Won --> " + displayBoardStr;
        resetGame();
        document.getElementById("succussAudio").play();
    }
}
