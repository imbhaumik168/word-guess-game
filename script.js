const words = [
  { word: "apple", hint: "A fruit that keeps the doctor away" },
  { word: "banana", hint: "A yellow tropical fruit" },
  { word: "guitar", hint: "A musical instrument with strings" },
  { word: "elephant", hint: "The largest land animal" },
];

let selectedWord, hint, wrongAttempts;

function initializeGame() {
  let randomIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomIndex].word;
  hint = words[randomIndex].hint;
  wrongAttempts = 0;

  document.getElementById("hint").querySelector("span").textContent = hint;
  document.getElementById("wrong-attempts").textContent = wrongAttempts;
  document.getElementById("message").textContent = "";

  displayWordBoxes();
}

function displayWordBoxes() {
  let wordDisplay = document.getElementById("word-display");
  wordDisplay.innerHTML = "";

  for (let i = 0; i < selectedWord.length; i++) {
    let inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("maxlength", "1");
    inputBox.classList.add("letter-box");
    inputBox.dataset.index = i;

    inputBox.addEventListener("input", function () {
      checkLetter(this);
    });

    wordDisplay.appendChild(inputBox);
  }
  wordDisplay.querySelector(".letter-box").focus();
}

function checkLetter(inputBox) {
  let letter = inputBox.value.toLowerCase();
  let index = inputBox.dataset.index;

  if (!/^[a-z]$/.test(letter)) {
    inputBox.value = "";
    return;
  }

  if (selectedWord[index] === letter) {
    inputBox.disabled = true;
    moveToNextInput(inputBox);
  } else {
    inputBox.classList.add("wrong");
    setTimeout(() => {
      inputBox.classList.remove("wrong");
      inputBox.value = "";
    }, 500);

    wrongAttempts++;
    document.getElementById("wrong-attempts").textContent = wrongAttempts;
  }

  checkGameStatus();
}

function moveToNextInput(currentInput) {
  let nextInput = currentInput.nextElementSibling;
  if (nextInput && nextInput.classList.contains("letter-box")) {
    nextInput.focus();
  }
}

function checkGameStatus() {
  let inputs = document.querySelectorAll(".letter-box");
  let guessedWord = Array.from(inputs)
    .map((input) => input.value)
    .join("");

  if (guessedWord === selectedWord) {
    document.getElementById("message").textContent = "🎉 You Won!";
    disableAllInputs();
  } else if (wrongAttempts >= 6) {
    document.getElementById(
      "message"
    ).textContent = `😞 You Lost! The word was "${selectedWord}".`;
    disableAllInputs();
  }
}

function disableAllInputs() {
  document.querySelectorAll(".letter-box").forEach((input) => {
    input.disabled = true;
  });
}

function restartGame() {
  initializeGame();
}

initializeGame();
