'sue strict';

const colorsContainer = document.querySelector('.colors-container');
const btn = document.querySelector('.btn');

function randomHex() {
  // 1. Chars can be used
  const chars = '1234567890abcdef';
  let finalHex = '';

  for (let i = 0; i < 6; i++) {
    // 1. Random char
    const randomValue = Math.floor(Math.random() * chars.length);

    // 2. Take random char from the string
    const randomChar = chars.slice(randomValue, randomValue + 1);

    // 3. Combine 6 random chars
    finalHex += randomChar;
  }
  return '#' + finalHex;
}

function addColor() {
  const color = `<div class="colors" style="background-color:${randomHex()}">${randomHex()}</div>`;
  colorsContainer.innerHTML += color;
}

function updateColors() {
  for (let i = 0; i < 3; i++) {
    addColor();
  }
}
updateColors();
updateColors();

btn.addEventListener('click', updateColors);
