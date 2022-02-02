const dataList = [
  {
    name: "İlk Giriş Tarihi", // parantez icinde gun veya saat veya dakika sayisi yazsin
    value: JSON.parse(localStorage.getItem("firstDate")),
  },
  {
    name: "Oynanan Oyun",
    value: localStorage.getItem("playedGameCount"),
  },
  {
    name: "Yapılan Tahmin",
    value: localStorage.getItem("guessedWordCount"),
  },
  {
    name: "Bilinen Kelime Sayısı",
    value: localStorage.getItem("correctlyGuessedWordCount"),
  },
  {
    name: "Ortalama Kelime Başı Tahmin Sayısı",
    value: 0,
  },
  {
    name: "Bilinen Kelimeler",
    value: JSON.parse(localStorage.getItem("unlockedWords")),
  },
];

const dataListArea = document.querySelector(".account-data");

dataList.forEach((data, index) => {
  let div = document.createElement("div");
  div.className = "data";

  if (index == 4) {
    data.value = (dataList[2].value / dataList[3].value).toFixed(2);
  }

  if (index !== 0 && index !== 5) {
    div.innerHTML = `
  	<div class="data-title">${data.name} :</div>
  	<div class="data-value">${data.value}</div>
  `;
  } else if (index == 5) {
    console.log(data.value);
    div.innerHTML = `
  	<div class="data-title">${data.name} :</div>

  	<div class="data-value list">
		<div class="list-top">${data.value.length}/${turkishWords.length}</div>  

		<div class="words-list">

		</div>
	</div>
  `;

    dataListArea.appendChild(div);
    let wordsList = document.querySelector(".words-list");

    data.value.forEach((wordData) => {
      let div = document.createElement("div");
      div.className = "data-word";

      div.textContent = `${wordData.id}. ${wordData.word}`;

      wordsList.appendChild(div);
    });
  } else {
    let date = data.value;

    let d = new Date();
    let time = d.getTime();

    let dayCount = (time - date[date.length - 1]) / (1000 * 60 * 60 * 24);
    let hourCount = (time - date[date.length - 1]) / (1000 * 60 * 60);
    let minuteCount = (time - date[date.length - 1]) / (1000 * 60);

    let counter = "";

    if (dayCount >= 1) {
      counter = `${Math.floor(dayCount)} Days`;
    } else if (hourCount >= 1) {
      counter = `${Math.floor(hourCount)} Hours`;
    } else if (minuteCount >= 1) {
      counter = `${Math.floor(minuteCount)} Minutes`;
    }

    let dateData = `${date[0]}.${date[1]}.${date[2]} <span class="count">(${counter} Ago)</span>`;

    div.innerHTML = `
  	<div class="data-title">${data.name} :</div>
  	<div class="data-value">${dateData}</div>
  `;
  }

  if (index !== 5) {
    dataListArea.appendChild(div);
  }
});
