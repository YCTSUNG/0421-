const pop = document.querySelector("#pop");
const hrhm = document.querySelector("#hrhm");
const jazz = document.querySelector("#jazz");
const anison = document.querySelector("#anison");
const others = document.querySelector("#others");

const genreList = [pop, hrhm, jazz, anison, others];

const pressButton = document.querySelector("#press");

const result = document.querySelector("#result");

// SourceData
let SourceData = [];

// filterList
let xxxList = [];

// 載入資料
fetch("xxxList.json")
  .then(function (response) {
    // 從json格式轉回Js物件
    return response.json();
  })
  .then(function (data) {
    SourceData = [...data];
  })
  .catch(function (error) {
    // 抓資料失敗 錯誤 就會進catch
    console.log(error);
  });

// 產生隨機數
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 產生結果
function getResult() {
  const resultLength = xxxList.length;
  const randomIndex = getRandomNumber(0, resultLength - 1);
  const resultData = xxxList[randomIndex];
  result.textContent = resultData.name;
}

// 過濾資料
function filterData() {
  xxxList = SourceData.filter(function (item) {
    return genreList.some(function (input) {
      return input.checked && item.category.includes(input.id);
    });
  });
}

// 按鈕事件
pressButton.addEventListener("click", function () {
  filterData();
  if (xxxList.length > 0) {
    getResult();
  } else {
    result.textContent = "選擇至少一種曲風！";
  }
});
