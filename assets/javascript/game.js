// Variables!

var wins = 0
var alreadyGuessed = []
var guessesRemaining = 12
var currentWord = ''
var underScores = []
var correctWordArray = []
var letterGuessed = ''
var wordPool = [
        'master chief',
        'cortana',
        'warthog',
        'pelican',
        'scorpion',
        'halo'
    ] // I still have to add more!


// Functions!!
function choooseWord() {
    currentWord = wordPool[Math.floor(Math.random() * wordPool.length)]
}

function createUnderscores() {
    for (i = 0; i < currentWord.length; i++) {
        underScores.push('_')
    }
}

function displayLetters() {
    // displays all instances of letterGuessed in the array at position 4.
    if (currentWord.indexOf(letterGuessed) > -1) {
        correctWordArray.push(letterGuessed)
        console.log(correctWordArray)
        underScores[currentWord.indexOf(letterGuessed)] = letterGuessed
        console.log(underScores)
    }

    // if letterGuessed is in currentWord
    // display all instances of letterGuessed in underScores array.
}

function isComplete() {
    if (underScores.join('') == currentWord) {
        alert('You win!')
        return true
    }
}

function gameOver() {
    // Displays whole currentWord;
    // Answer is displayed;
}

function gameReset() {
    // This will reset guessesRemaining, call choooseWord()
    // I'm sure a few other things
    choooseWord()
    console.log(currentWord)
    createUnderscores()
    console.log(underScores)
    guessesRemaining = 12
}

// Main program logic!
choooseWord()
console.log(currentWord)
createUnderscores()
console.log(underScores)

document.onkeyup = function(event) {
    letterGuessed = event.key
    console.log('letter guessed:', letterGuessed)
    if (alreadyGuessed.includes(letterGuessed)) {
        alert('You already guessed that letter!')
    } else {
        displayLetters() // Not finished!
        alreadyGuessed.push(letterGuessed)
        console.log('Already Guessed:', alreadyGuessed)
        guessesRemaining--
        console.log('Guesses remaining:', guessesRemaining)
        if (guessesRemaining == 0) {
            alert('Sorry you lost!')
            gameOver()
                // resetGame(); ???
        }
        if (currentWord.isComplete) {
            gameOver()
            wins++
            // resetGame(); ????
        }
    }
}