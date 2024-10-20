const heightEl = document.querySelector('.height');
const weightEl = document.querySelector('.weight');
const btnEl = document.querySelector('.btn');
const resultNumEl = document.querySelector('.resultNum');
const resultTextEl = document.querySelector('.resultText');

btnEl.addEventListener('click', () => {
  const h = +heightEl.value / 100;
  const w = +weightEl.value;

  const bmiValue = w / (h * h);

  resultNumEl.value = bmiValue.toFixed(1);
  if (bmiValue < 18.5) {
    resultTextEl.textContent = 'Underweight';
    resultTextEl.classList.add('blue');
  } else if (bmiValue > 18.5 && bmiValue < 25) {
    resultTextEl.textContent = 'Healthy Weight';
    resultTextEl.classList.add('green');
  } else if (bmiValue >= 25 && bmiValue < 30) {
    resultTextEl.textContent = 'Overweight';
    resultTextEl.classList.add('yellow');
  } else {
    resultTextEl.classList.add('red');
    resultTextEl.textContent = 'Obesity';
  }
});
