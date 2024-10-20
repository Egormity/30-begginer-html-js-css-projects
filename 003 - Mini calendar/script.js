const monthName = document.getElementById('monthName');
const dayName = document.getElementById('dayName');
const dayNumber = document.getElementById('dayNumber');
const year = document.getElementById('year');

const date = new Date();

const month = date.getDate();
monthName.innerText = date.toLocaleDateString('en', {
  month: 'long',
});

dayName.innerText = date.toLocaleString('en', {
  weekday: 'long',
});

dayNumber.innerText = date.getDate();

year.innerText = date.getFullYear();
