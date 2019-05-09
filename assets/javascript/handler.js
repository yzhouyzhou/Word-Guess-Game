// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var reminings = 10;
var wrongGuessLetters = "";
var guessBoardWord = ""
var userGuessedOneLetter = "";
var guessedWordArray = [];
var displayBoardStr = "";

let indexGuessWord, indexWrongLetters, indexRightLetters = 0;

function resetGame() {
    guessBoardWord = getNewWord();
    reminings = 10;
    wrongGuessLetters = "";
    guessedWordArray = [];
    displayBoardStr = "";
    for (let i = 0; i < guessBoardWord.length; i++) {
        guessedWordArray.push("_");
        displayBoardStr += "_     ";
    }
}

function eventHandler(_event) {
    userGuessedOneLetter = event.key;
    loggingString = "Playing ......";

    if (userGuessedOneLetter === 'Escape') {
        loggingString = "Exist ... Thanks for you playing ..."
        ended = true;
        return;
    }

    indexGuessWord = guessBoardWord.search(userGuessedOneLetter);
    indexWrongLetters = wrongGuessLetters.search(userGuessedOneLetter);
    indexRightLetters = displayBoardStr.search(userGuessedOneLetter)
    if ((indexGuessWord == -1) && (indexWrongLetters == -1)) {
        // Wrong letter, add into wrongGuess, reminings reduce,
        reminings--;
        wrongGuessLetters += "--" + userGuessedOneLetter;
       
    }
    else if (indexWrongLetters != -1) {
        // duplicated Wrong letter, do nothing, beeping 
        wrongGuessLetters += "___" + userGuessedOneLetter;
        
    }
    else if (indexRightLetters != -1) {
        // right letter but duplicated, do nothing, beeping 
        
    }
    else {
        // right letter, check multiples, replace board, refresh display string
        displayBoardStr = "";
        var strArray = guessBoardWord.split("");
        for (var i = 0; i < strArray.length; i++) {
            if (strArray[i] === userGuessedOneLetter) {
                guessedWordArray[i] = userGuessedOneLetter;
            }
            displayBoardStr += guessedWordArray[i] + "  ";
        }
    }

    // Summarize: where you are at, win or loss
    if (reminings == 0) {
        losses++;
        loggingString = "Sorry, you just lost";
        resetGame();
    }
    if (displayBoardStr.search("_") == -1) {
        wins++;
        loggingString = " Y o u  W o n --> " + displayBoardStr  ;
        resetGame();
    }
}
