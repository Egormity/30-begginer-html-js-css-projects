const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');

btnLeft.addEventListener('mouseover', () => {
  leftEl.classList.add('active');
});

btnLeft.addEventListener('mouseleave', () => {
  leftEl.classList.remove('active');
});

btnRight.addEventListener('mouseover', () => {
  rightEl.classList.add('active');
});

btnRight.addEventListener('mouseleave', () => {
  rightEl.classList.remove('active');
});
