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
}

initWord();

restartButton.addEventListener("click", restartGame);
