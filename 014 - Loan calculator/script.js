const calculatorAmount = document.querySelector('.calculator-amount');
const calculatorRate = document.querySelector('.calculator-rate');
const calculatorMonths = document.querySelector('.calculator-months');
const submit = document.querySelector('button');
const result = document.querySelector('span');

submit.addEventListener('click', () => {
  result.textContent =
    (Number(calculatorAmount.value) +
      Number(calculatorAmount.value) * Number(calculatorRate.value) * 0.01) /
    Number(calculatorMonths.value);
});
