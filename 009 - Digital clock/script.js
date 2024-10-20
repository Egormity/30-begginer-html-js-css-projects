'use strict';

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const period = document.querySelector('.period');

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  period.innerText = 'AM';

  if (h > 12) {
    h = h - 12;
    period.innerText = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hoursEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
