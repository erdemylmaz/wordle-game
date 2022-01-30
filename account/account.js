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
];

const dataListArea = document.querySelector(".account-data");

dataList.forEach((data, index) => {
  let div = document.createElement("div");
  div.className = "data";

  if (index == 4) {
    data.value = (dataList[2].value / dataList[3].value).toFixed(2);
  }

  if (index !== 0) {
    div.innerHTML = `
  	<div class="data-title">${data.name} :</div>
  	<div class="data-value">${data.value}</div>
  `;
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

    console.log(time, date[date.length - 1], time - date[date.length - 1]);

    let dateData = `${date[0]}.${date[1]}.${date[2]} <span class="count">(${counter} Ago)</span>`;

    div.innerHTML = `
  	<div class="data-title">${data.name} :</div>
  	<div class="data-value">${dateData}</div>
  `;
  }

  dataListArea.appendChild(div);
});
