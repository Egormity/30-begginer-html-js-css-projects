const ageInput = document.querySelector('input');
const ageButton = document.querySelector('button');
const ageResult = document.querySelector('p');

ageButton.addEventListener('click', () => {
  if (ageInput.value === '') {
    alert('Please, enter your age');
  } else {
    const currentYear = new Date().getFullYear();
    let age = currentYear - Number(ageInput.value.slice(0, 4));

    const currentMonth = new Date().getMonth() + 1;

    if (currentMonth < Number(ageInput.value.slice(5, 7))) age--;

    ageResult.textContent = `Your age is ${age}`;
  }
});
