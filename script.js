const flippingButton = document.querySelector(".flipping-button"),
  body = document.body,
  colorCode = document.querySelector(".color-code"),
  hexContainer = document.querySelector(".hex-container");

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256),
    blue = Math.floor(Math.random() * 256),
    green = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${blue}, ${green})`;
  return randomColor;
}

flippingButton.addEventListener("click", function () {
  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
  hexContainer.style.color = randomColor;
});
