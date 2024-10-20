const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const newYearTime = new Date('Jan 1, 2025 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();

  //   console.log(now);
  //   console.log(newYearTime);

  const gap = newYearTime - now;
  //   console.log(gap);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  //   console.log(d);

  const h = Math.floor((gap % day) / hour);
  //   console.log(h);

  const m = Math.floor((gap % hour) / minute);
  //   console.log(m);

  const s = Math.floor((gap % minute) / second);
  //   console.log(s);

  days.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;

  setTimeout(updateCountdown, 1000);
}
updateCountdown();
