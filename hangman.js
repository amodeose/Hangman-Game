var wordBank = ['deer', 'elephant', 'hummingbird', "tiger", "eagle", "fox", "gorilla", "ostrich", "penguin", "rabbit", "rhino", "zebra"];
var imageBank = ['deer.jpg', 'elephant.jpg', 'hummingbird.jpg', 'tiger.jpg', 'eagle.jpg', 'fox.jpg', 'gorilla.jpg', 'ostrich.jpg', 'penguin.jpg', 'rabbit.jpg', 'rhino.jpg', 'zebra.jpg'];
var word;
var wordField = [];
var usedLetters = [];
var wins = 0;
var losses = 0;
var guesses = 5;
var blanks;
var index;

var randomWord = function() {
index = Math.floor(Math.random() * wordBank.length);
word = wordBank[index];
blanks = word.length;
}

var generateBlanks = function() {
    for (i = 0; i < blanks; i++) {
        wordField.push("_");
    }
    document.getElementById("word").textContent = wordField.join(" ");
}

var matchImage = function() {
    document.getElementById('image').src = "assets/images/" + imageBank[index];
}
randomWord();
matchImage();
generateBlanks();


var checkLetter = function(letter) {
    wordArr = word.split("");
    var checkedIndex = wordArr.indexOf(letter);

    if (checkedIndex < 0 && usedLetters.indexOf(letter) < 0) {
        usedLetters.push(letter);
        guesses--;
        }

    while (checkedIndex >= 0) {
        wordField.splice(checkedIndex, 1, letter);
        delete wordArr[checkedIndex];
        checkedIndex = wordArr.indexOf(letter);
    }

    if (wordField.join('') == word) {
        wins++;
        guesses = 5;
        wordField = [];
        usedLetters = [];
        randomWord();
        matchImage();
        generateBlanks();
    }

    if (guesses === 0) {
        losses++;
        guesses = 5;
        wordField = [];
        correctLetters = 0;
        usedLetters = [];
        randomWord();
        matchImage();
        generateBlanks();
    }
    
    document.getElementById("word").textContent = wordField.join(" ");
    document.getElementById("letters").textContent = usedLetters.join(" ").toUpperCase();
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses").textContent = guesses;

}

document.onkeyup = function() {
    var keyPress = event.key;
    checkLetter(keyPress);
    
}


