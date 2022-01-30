let writtenLetter = "";
let text = "";

let width = window.innerWidth;

if (width <= 600) {
  turkishWords = turkishWords.filter((item) => item.length <= 5);
}

let randomNumber = Math.floor(Math.random() * turkishWords.length);
let word = turkishWords[randomNumber];

let length = word.length;

updateWords = (key) => {
  for (let x = 0; x < writtenLetter.length; x++) {
    textBoxes[x].setAttribute("data-value", writtenLetter[x]);
    textBoxes[x].classList.add("active-box");
    textBoxes[x].textContent = writtenLetter[x];
  }
};

saveWord = () => {
  let div = document.createElement("div");
  div.className = "saved-word";
  div.setAttribute("data-word", writtenLetter);

  for (let x = 0; x < writtenLetter.length; x++) {
    let boxDiv = document.createElement("div");
    boxDiv.className = "saved-box";

    boxDiv.textContent = writtenLetter[x];

    for (let k = 0; k < writtenLetter.length; k++) {
      if (writtenLetter[x] == word[k] && k !== x) {
        boxDiv.classList.add("close-box");
        letters.forEach((letter) => {
          if (letter.dataset.key == writtenLetter[x]) {
            letter.classList.add("close-letter");
          }
        });
      }
    }

    if (writtenLetter[x] == word[x]) {
      boxDiv.classList.add("correct-box");
      textBoxes[x].classList.add("clue");
      textBoxes[x].setAttribute("data-content", word[x]);

      letters.forEach((letter) => {
        if (letter.dataset.key == writtenLetter[x]) {
          letter.classList.remove("close-letter");
          letter.classList.add("correct-letter");
        }
      });
    } else {
      letters.forEach((letter) => {
        if (writtenLetter[x] == letter.dataset.key) {
          letter.classList.add("wrong-letter");
        }
      });
    }

    div.appendChild(boxDiv);
  }

  savedWordsArea.prepend(div);

  guessedWords = document.querySelectorAll(".saved-word");
};

type = (e) => {
  let key = e.key;

  if (e.key == "Backspace" || key.indexOf("class") != -1) {
    writtenLetter = writtenLetter.slice(0, -1);
    textBoxes[writtenLetter.length].textContent = "";
    textBoxes[writtenLetter.length].classList.remove("active-box");
  } else if (e.key == "Enter") {
    if (writtenLetter == word) {
      alertBox.textContent = "You won, congratulations";
      alertBox.style.display = "block";

      setTimeout(() => {
        alertBox.style.display = "none";
      }, 3000);
    }

    if (writtenLetter.length == length) {
      saveWord();

      textBoxes.forEach((textBox) => {
        textBox.textContent = "";
        textBox.classList.remove("active-box");
        textBox.setAttribute("data-value", "");
        writtenLetter = "";
      });
    }
  } else if (writtenLetter.length != length) {
    writtenLetter += key;
  }

  if (e.key != "Enter") {
    updateWords();
  }
};

document.addEventListener("keydown", type);

/*
  todo

  -kazaninca haberinin olmasi
  -yeniden baslatma
  -resetleme

*/

// write with keyboard
write = (e) => {
  let key = e.currentTarget.dataset;

  type(key);
};

letters.forEach((letter) => {
  letter.addEventListener("click", write);
});
