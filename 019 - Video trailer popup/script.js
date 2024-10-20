const btnEl = document.querySelector('.btn');
const closeIconEl = document.querySelector('.close-icon');
const mainContainer = document.querySelector('.main-container');
const trailerContainer = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');

btnEl.addEventListener('click', () => {
  mainContainer.classList.add('active');
  trailerContainer.classList.remove('active');
});

closeIconEl.addEventListener('click', () => {
  mainContainer.classList.remove('active');
  trailerContainer.classList.add('active');
  videoEl.pause();
  videoEl.currentTime = 0;
});
