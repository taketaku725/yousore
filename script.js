let mode = "normal";
let themeData = null;

const modeBtn = document.getElementById("modeBtn");
const generateBtn = document.getElementById("generateBtn");
const theme = document.getElementById("theme");

fetch("themes.json")
  .then(res => res.json())
  .then(data => {
    themeData = data;
  });

// 初期モード設定
document.body.classList.add("normal-mode");

modeBtn.addEventListener("click", () => {
  mode = mode === "normal" ? "drink" : "normal";

  document.body.classList.remove("normal-mode", "drink-mode");

  if (mode === "normal") {
    document.body.classList.add("normal-mode");
    modeBtn.textContent = "ノーマルモード";
  } else {
    document.body.classList.add("drink-mode");
    modeBtn.textContent = "飲み会用モード";
  }
});

generateBtn.addEventListener("click", () => {
  if (!themeData) return;

  const kana =
    themeData.kana[Math.floor(Math.random() * themeData.kana.length)];

  const lowerList = themeData[mode];
  const lower =
    lowerList[Math.floor(Math.random() * lowerList.length)];

  theme.textContent = `「${kana}」から始まる ${lower}`;
});
