'use strict';

const startEl = document.querySelector('.start');
const stopEl = document.querySelector('.stop');
const resetEl = document.querySelector('.reset');
const timerEl = document.querySelector('p');

const hour = 3600;
let timeLeft = hour;
let interval;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, 0)}:${seconds
    .toString()
    .padStart(2, 0)}`;

  timerEl.textContent = formattedTime;
}

startEl.addEventListener('click', () => {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      alert(`Time's up!`);
      clearInterval(interval);
      timeLeft = hour;
      updateTimer();
    }
  }, 1000);
});

stopEl.addEventListener('click', () => {
  clearInterval(interval);
  updateTimer();
});

resetEl.addEventListener('click', () => {
  timeLeft = hour;
  updateTimer();
});
