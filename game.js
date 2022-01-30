addExtraZero = (x) => {
  return x < 10 ? "0" + x : x;
};

function initWord() {
  writtenLetter = "";
  for (let x = 0; x < length; x++) {
    let div = document.createElement("div");
    div.className = "letter-box";

    wordArea.appendChild(div);

    textBoxes = document.querySelectorAll(".letter-box");
  }

  if (!localStorage.getItem("firstDate")) {
    let d = new Date();

    let day = addExtraZero(d.getDate());
    let month = addExtraZero(d.getMonth() + 1);
    let year = addExtraZero(d.getFullYear());

    let time = d.getTime();

    let date = [day, month, year, time];

    localStorage.setItem("firstDate", JSON.stringify(date));
    localStorage.setItem("guessedWordCount", 0);
    localStorage.setItem("correctlyGuessedWordCount", 0);
    localStorage.setItem("playedGameCount", 1);
  } else {
    let playedCount = parseInt(localStorage.getItem("playedGameCount"));
    localStorage.setItem("playedGameCount", playedCount + 1);
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
