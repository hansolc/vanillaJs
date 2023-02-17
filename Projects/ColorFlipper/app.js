const temp = ["red", "green", "blue", "lightblue"];

document.getElementById("btn-color-change").addEventListener("click", (e) => {
  const mainEl = document.querySelector(".main");
  const spanEl = document.querySelector(".color");

  const ranNum = Math.floor(Math.random() * 4);
  mainEl.style.backgroundColor = temp[ranNum];
  spanEl.textContent = temp[ranNum];
});
