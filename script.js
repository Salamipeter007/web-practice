const words = ["apple", "banana", "cherry", "grape", "lemon", "orange", "strawberry"];
let currentWord;
let guessedWord;
let attempts = 6;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    const display = guessedWord.join(" ");
    document.getElementById("word-display").textContent = display;
}

function resetGame() {
    currentWord = getRandomWord();
    guessedWord = Array(currentWord.length).fill("_");
    attempts = 6;
    displayWord();
    document.getElementById("message").textContent = "";
}

function checkLetter(letter) {
    let found = false;
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter) {
            guessedWord[i] = letter;
            found = true;
        }
    }

    if (!found) {
        attempts--;
    }

    displayWord();

    if (guessedWord.join("") === currentWord) {
        document.getElementById("message").textContent = "Congratulations! You guessed the word!";
    } else if (attempts === 0) {
        document.getElementById("message").textContent = "Game over! The word was: " + currentWord;
    }
}

document.getElementById("guess-button").addEventListener("click", function () {
    const letterInput = document.getElementById("letter-input");
    const letter = letterInput.value.toLowerCase();
    
    if (letter.match(/[a-z]/) && letter.length === 1) {
        checkLetter(letter);
    } else {
        alert("Please enter a valid single letter.");
    }

    letterInput.value = "";
});

resetGame(); // Initialize the game

