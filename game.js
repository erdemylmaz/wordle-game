function initWord() {
  writtenLetter = "";
  for (let x = 0; x < length; x++) {
    let div = document.createElement("div");
    div.className = "letter-box";

    wordArea.appendChild(div);

    textBoxes = document.querySelectorAll(".letter-box");
  }
}

function restartGame() {
  wordArea.innerHTML = "";

  randomNumber = Math.floor(Math.random() * turkishWords.length);
  word = turkishWords[randomNumber];

  length = word.length;

  initWord();

  savedWordsArea.innerHTML = "";

  letters.forEach((letter) => {
    letter.className = "letter";
  });
}

let grayEmoji = "⬜";
let correctEmoji = "🟦";
let closeEmoji = "🟨";

function copyResult() {
  let wordbyword = [];

  guessedWords.forEach((guessedWord) => {
    guessedLetters = guessedWord.querySelectorAll(".saved-box");

    let text = "";

    guessedLetters.forEach((guessedLetter) => {
      if (guessedLetter.classList.contains("correct-box")) {
        text += correctEmoji;
      } else if (guessedLetter.classList.contains("close-box")) {
        text += closeEmoji;
      } else {
        text += grayEmoji;
      }
    });
    wordbyword.push(text);
  });

  let wordIndex;

  turkishWords.map(($word, index) => {
    if (word == $word) {
      wordIndex = index;
    }
  });

  let copyText = `Word: ${wordIndex}/${turkishWords.length} \n`;

  wordbyword.map((item) => {
    copyText += `\n${item}`;
  });

  shareTextarea.textContent = copyText;
  shareTextarea.select();

  document.execCommand("copy");

  alertBox.textContent = "Text Copied";
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);

  // navigator.clipboard.writeText(copyText); doesnt works on browsers
}

initWord();

restartButton.addEventListener("click", restartGame);
shareButton.addEventListener("click", copyResult);
