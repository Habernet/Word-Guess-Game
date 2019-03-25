// Variables!

var wins = 0;
var alreadyGuessed = [];
var guessesRemaining = 12;
var currentWord = "";
var wordPool = []; //I stil have to populate this!

var answers = {
        MasterChief = "Chief"
    } // Not sure if I even need this! ^^^^


//Functions!!
function choooseWord() {
    // RNG is used to index into wordPool and choose a word.
    // Word is then split into an array and each value is displayed at position 4 
}

function isComplete() {
    // tests whether currentWord is complete or not
    //returns boolean
}

function gameOver() {
    // Displays whole currentWord;
    // Answer is displayed;
}

function gameReset() {
    // This will reset guessesRemaining, call choooseWord()
    // I'm sure a few other things
}


// Main program logic!

document.onkeyup = function(event) {
        var letterGuessed = event.key;
        if (alreadyGuessed.includes(letterGuessed) {
                alert("You already guessed that letter!")
            } else {
                // display all instances of letter guessed in currentWord;
                alreadyGuessed.push(letterGuessed);
            }

        }