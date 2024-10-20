const counterEl = document.querySelector('.counter');
const loadingBarFront = document.querySelector('.loading-bar-front');

let i = 0;

function updateBar() {
  if (i < 100) {
    i++;
    counterEl.textContent = `${i}%`;
    loadingBarFront.style.width = i + '%';
    setTimeout(updateBar, 10);
  }
}
updateBar();
