const posX = document.querySelector('.position-x');
const posY = document.querySelector('.position-y');

// window.addEventListener('mousemove', event => {
//   posX.textContent = event.clientX;
//   posY.textContent = event.clientY;
// });

window.addEventListener('mousemove', updateMouse);

function updateMouse(event) {
  posX.textContent = event.clientX;
  posY.textContent = event.clientY;
}
