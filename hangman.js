
//GLOBAL VARIABLES

var wordBank = ["tree", "rock", "shovel", "house"];
var word;
var wordField = [];
var currentIndex = 0;
var usedLetters = [];
var wins = 0;
var guesses = 8;
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
    if (letter === word[currentIndex]) {
        wordField.push(letter);
        console.log(wordField);
        currentIndex++;
        if (wordField.length === word.length) {
            wins++;
            guesses = 8;
            wordField = [];
            currentIndex = 0;
            usedLetters = [];
            randomWord();
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


