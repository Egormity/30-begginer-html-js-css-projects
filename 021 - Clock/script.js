const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

function updateClock() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  hourEl.style.transform = `rotate(${(hour / 12) * 360}deg)`;
  minuteEl.style.transform = `rotate(${(minute / 60) * 360}deg)`;
  secondEl.style.transform = `rotate(${(second / 60) * 360}deg)`;
}

setInterval(updateClock, 1000);
