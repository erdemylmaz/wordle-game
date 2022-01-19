let writtenLetter = "";
let text = " fadlfkdjafl";

let randomNumber = Math.floor(Math.random() * turkishWords.length);
let word = turkishWords[randomNumber];

let length = word.length;

updateWords = () => {
  for (let x = 0; x < writtenLetter.length; x++) {
    textBoxes[x].setAttribute("data-value", writtenLetter[x]);
    textBoxes[x].classList.add("active-box");
    textBoxes[x].textContent = writtenLetter[x];
  }
};

saveWord = () => {
  let div = document.createElement("div");
  div.className = "saved-word";

  for (let x = 0; x < writtenLetter.length; x++) {
    let boxDiv = document.createElement("div");
    boxDiv.className = "saved-box";

    boxDiv.textContent = writtenLetter[x];

    for (let k = 0; k < writtenLetter.length; k++) {
      if (writtenLetter[x] == word[k] && k !== x) {
        boxDiv.classList.add("close-box");
      }
    }

    if (writtenLetter[x] == word[x]) {
      boxDiv.classList.add("correct-box");
    }

    div.appendChild(boxDiv);
  }

  savedWordsArea.prepend(div);
};

type = (e) => {
  let key = e.key;

  if (e.key == "Backspace") {
    writtenLetter = writtenLetter.slice(0, -1);
    textBoxes[writtenLetter.length].textContent = "";
    textBoxes[writtenLetter.length].classList.remove("active-box");
  } else if (e.key == "Enter") {
    if (writtenLetter.length == length) {
      saveWord();
    }

    if (writtenLetter == word) {
      alert("You won, congratulations");
    }
  } else if (writtenLetter.length != length) {
    writtenLetter += key;
  }

  updateWords();
};

document.addEventListener("keydown", type);

/*
  todo

  -kazaninca haberinin olmasi
  -yeniden baslatma
  -resetleme

*/
