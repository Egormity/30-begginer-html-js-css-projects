const textArea = document.querySelector('.textArea');
const totalCounter = document.querySelector('.totalCounter');
const remainingCounter = document.querySelector('.remainingCounter');

textArea.addEventListener('keyup', () => {
  updateCounter();
});

function updateCounter() {
  totalCounter.innerHTML = textArea.value.length;
  remainingCounter.innerHTML =
    textArea.getAttribute('maxLength') - textArea.value.length;
}

updateCounter();
