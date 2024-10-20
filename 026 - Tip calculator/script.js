const billAmountEl = document.querySelector('.billAmount');
const tipPercentageEl = document.querySelector('.tipPercentage');
const btnEl = document.querySelector('.btn');
const tipResultEl = document.querySelector('.tip-result');
const totalResult = document.querySelector('.total-result');

btnEl.addEventListener('click', () => {
  const tip = +billAmountEl.value * (+tipPercentageEl.value * 0.01);
  const total = +billAmountEl.value + tip;

  tipResultEl.textContent = tip;
  totalResult.textContent = total;
});
