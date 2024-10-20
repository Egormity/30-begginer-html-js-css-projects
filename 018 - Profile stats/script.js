const countersEl = document.querySelectorAll('.counter');
const devider = document
  .querySelector('.counter-main')
  .getAttribute('data-ceil');

countersEl.forEach(counterEl => {
  counterEl.textContent = '0';
  incrementCounter();

  function incrementCounter() {
    let currentNum = +counterEl.textContent;
    const dataCeil = counterEl.getAttribute('data-ceil');

    const increment = dataCeil / devider;

    currentNum += Math.ceil(increment);

    if (currentNum < dataCeil) {
      setTimeout(incrementCounter, 50);
      counterEl.textContent = currentNum;
    } else {
      counterEl.textContent = dataCeil;
    }
  }
});
