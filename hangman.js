
//GLOBAL VARIABLES

var wordBank = ["tree", "rock", "shovel", "house"];
var word;
var wordField = [];
var correctLetters = 0;
var usedLetters = [];
var wins = 0;
var guesses = 5;
var blanks;

//FUNCTIONS

var randomWord = function() {
var index = Math.floor(Math.random() * (wordBank.length - 1));
word = wordBank[index];
blanks = word.length;
}

var generateBlanks = function() {
    for (i = 0; i < blanks; i++) {
        wordField.push("_");
    }
    document.getElementById("word").textContent = wordField.join(" ");
}

//INITIALIZE GAME

randomWord();
generateBlanks();


var checkLetter = function(letter) {
    var checkedIndex = word.indexOf(letter);
    if (checkedIndex >= 0) {
        wordField.splice(checkedIndex, 1, letter);
        correctLetters++;
        if (correctLetters === word.length) {
            wins++;
            guesses = 5;
            wordField = [];
            correctLetters = 0;
            usedLetters = [];
            randomWord();
            generateBlanks();
        }
    } else {
        if (usedLetters.indexOf(letter) < 0) {
        usedLetters.push(letter);
        guesses--;
        }
    }
    document.getElementById("word").textContent = wordField.join(" ");
    document.getElementById("letters").textContent = usedLetters.join(", ");
    document.getElementById("wins").textContent = wins;
    document.getElementById("guesses").textContent = guesses;

}

document.onkeyup = function() {
    var keyPress = event.key;
    checkLetter(keyPress);
    
}


