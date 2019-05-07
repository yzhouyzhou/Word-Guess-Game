var computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var reminings = 10;
var inputKey = "";
var myWord = "schoolboy"
var displayGuessWord = [];
var displayStr = "";
for (let i = 0; i < myWord.length; i++) {
    displayGuessWord.push("-");
    displayStr += "-  ";
}

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var guessWord = document.getElementById("guessword-text");
var winsCount = document.getElementById("wincount-text");
var lossCount = document.getElementById("losscount-text");
var countDown = document.getElementById("guesstimes-countdown-text");
var lossesWord = document.getElementById("lossesword-text");
var loggingString = document.getElementById("logging");
let indexMyword, indexInput = 0;
var newstr = "";
let newIndex = 0;
var reFresh = false;
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {



    // Determines which key was pressed.
    var userGuess = event.key;
    // displayStr="";
    loggingString = "Nothing0 " + userGuess + "--" + inputKey;
    if (userGuess != 'z') {
        indexMyword = myWord.search(userGuess);
        indexInput = inputKey.search(userGuess);
        loggingString += "A" + indexMyword + "B" + indexInput;
        if ((indexMyword == -1) &&
            (indexInput == -1)) {
            reminings--;
            inputKey += "--" + userGuess;
            loggingString += "Nothing2";
        }
        else if (indexInput != -1) {
            inputKey += "___" + userGuess;
            loggingString += "Nothing2";
        }
        else if (indexMyword != -1) {
            loggingString += " Nothing3 " + indexMyword;
            displayGuessWord[indexMyword] = userGuess;
            // replace dup char
            while (true) {
                newstr = myWord.slice(indexMyword + 1, myWord.length);
                loggingString += "size " + newstr;
                newIndex = newstr.search(userGuess);
                if (newIndex != -1) {
                    indexMyword = indexMyword + 1 + newIndex;
                    displayGuessWord[indexMyword] = userGuess;
                }
                else {
                    break;
                }
            }


            displayStr = "";
            for (let i = 0; i < myWord.length; i++) {
                displayStr += displayGuessWord[i] + "  ";
            }
        }
        else {
            loggingString += " Nothing4 ";
        }

        if (reminings == 0) {
            losses++;
            reFresh = true;
            loggingString = "Sorry, you just lost";
        }
        if (displayStr.search("-") == -1) {
            wins++;
            loggingString = displayStr + "    Y e a h     Y o u  W o n";
            reFresh = true;
        }

        if (reFresh) {
            myWord = "important";
            reminings = 10;
            inputKey = "";
            


            displayGuessWord = [];
            displayStr = "";
            for (let i = 0; i < myWord.length; i++) {
                displayGuessWord.push("-");
                displayStr += "-  ";
            }
            reFresh = false;

        }


        // Hide the directions
        directionsText.textContent = "";
        // Display the user and computer guesses, and wins/losses/ties.
        guessWord.textContent = displayStr;
        winsCount.textContent = "wins: " + wins;
        lossCount.textContent = "losses: " + losses;
        countDown.textContent = "guess remining: " + reminings;
        lossesWord.textContent = "Input   " + inputKey;
        logging.textContent = loggingString;




    }
};
