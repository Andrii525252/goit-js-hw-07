function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

changeBtnEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
});
