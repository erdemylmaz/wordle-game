const firstLineLetters = ["e", "r", "t", "y", "u", "ı", "o", "p", "ğ", "ü"];
const secondLineLetters = [
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "ş",
  "i",
];

const thirdLineLetters = [
  "Enter",
  "z",
  "c",
  "v",
  "b",
  "n",
  "m",
  "ö",
  "ç",
  '<i class="fas fa-backspace"></i>',
];

function initKeyboard() {
  // first line
  let firstLine = document.createElement("div");
  firstLine.className = "first-line line";

  firstLineLetters.forEach((letter) => {
    let div = document.createElement("div");
    div.className = "letter";
    div.setAttribute("data-key", letter);

    div.innerHTML = `${letter}`;

    firstLine.appendChild(div);
  });

  // second line
  let secondLine = document.createElement("div");
  secondLine.className = "second-line line";

  secondLineLetters.forEach((letter) => {
    let div = document.createElement("div");
    div.className = "letter";
    div.setAttribute("data-key", letter);

    div.innerHTML = `${letter}`;

    secondLine.appendChild(div);
  });

  // third line
  let thirdLine = document.createElement("div");
  thirdLine.className = "third-line line";

  thirdLineLetters.forEach((letter) => {
    let div = document.createElement("div");
    div.className = "letter";
    div.setAttribute("data-key", letter);

    div.innerHTML = `${letter}`;

    thirdLine.appendChild(div);
  });

  keyboard.appendChild(firstLine);
  keyboard.appendChild(secondLine);
  keyboard.appendChild(thirdLine);

  letters = document.querySelectorAll(".letter");
}

initKeyboard();
