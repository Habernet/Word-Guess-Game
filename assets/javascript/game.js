// Variables!

var wins = 0;
var alreadyGuessed = [];
var guessesRemaining = 12;
var currentWord = "";
var underScores = [];
var letterGuessed = "";
var wordPool = [
    'chief', 'cortana', 'warthog', 'pelican', 'scorpion', 'halo', 'reclaimer', 'reach', 'harvest', 'mombasa', 'zanzibar', 'ascension', 'lockout', 'containment', 'arbiter', 'icon', 'flood', 'ghost', 'wraith', 'scarab', 'banshee', 'elephant', 'phantom'
];

var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("currentWord");
var guessesRemainingText = document.getElementById("guessesRemaining");
var alreadyGuessedText = document.getElementById("alreadyGuessed");



// Functions!!
function choooseWord() {
    currentWord = wordPool[Math.floor(Math.random() * wordPool.length)];
}

function createUnderScores() {
    for (i = 0; i < currentWord.length; i++) {
        underScores.push('_');
    };
}

function displayLetters() {
    for (i = 0; i < underScores.length; i++) {
        if (currentWord[i] === letterGuessed) {
            underScores[i] = letterGuessed;
        }
    }
    console.log(underScores);
    // currentWordText.textContent = underScores;
}

function isComplete() {
    if (underScores.join('') === currentWord) {
        alert('You win!');
        return true;
    }
}

function userWins() {
    wins++;
    // winsText.textContent = wins;
}

function gameOver() {
    for (i = 0; i < currentWord.length; i++) {
        underScores[i] = currentWord[i];
    }
    // currentWordText.textContent = underScores;
    // Answer is displayed;
}

function gameReset() {
    underScores = [];
    alreadyGuessed = [];
    choooseWord();
    console.log(currentWord);
    createUnderScores();
    // currentWordText.textContent = underScores;
    guessesRemaining = 12;
}

// Main program logic!
choooseWord();
createUnderScores();
// currentWordText.textContent = underScores.toString();

document.onkeyup = function(event) {
    letterGuessed = event.key;
    letterGuessed.toLowerCase;
    console.log("You guessed:", letterGuessed);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (alreadyGuessed.includes(letterGuessed)) {
            alert('You already guessed that letter!');
        } else {
            displayLetters();
            alreadyGuessed.push(letterGuessed);
            guessesRemaining--;
            if (guessesRemaining == 0) {
                alert('Sorry you lost!');
                gameOver();
                gameReset();
            }
            if (isComplete()) {
                gameOver();
                userWins();
                gameReset();
            }
        }
    } else {
        alert("Please guess a letter!")
    }







}