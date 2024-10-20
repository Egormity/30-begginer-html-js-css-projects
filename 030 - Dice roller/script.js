const btnEl = document.querySelector('.btn');
const diceEl = document.querySelector('.dice');
const rollHistory = document.querySelector('.roll-history');

let historyList = [];

btnEl.addEventListener('click', () => {
  diceEl.classList.add('roll-animation');

  setTimeout(() => {
    diceEl.classList.remove('roll-animation');
    rollDice();
  }, 1000);
});

function rollDice() {
  const randomDiceNum = Math.ceil(Math.random() * 6);

  console.log(randomDiceNum);
  diceEl.innerHTML = getDice(randomDiceNum);

  historyList.push(randomDiceNum);
  console.log(historyList);

  updateRollHistory();
}

function updateRollHistory() {
  rollHistory.innerHTML = '';
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDice(
      historyList[i]
    )}</span>`;
    rollHistory.appendChild(listItem);
  }
}

function getDice(rollResult) {
  switch (rollResult) {
    case 1:
      return '&#x2680';
    case 2:
      return '&#x2681';
    case 3:
      return '&#x2682';
    case 4:
      return '&#x2683';
    case 5:
      return '&#x2684';
    case 6:
      return '&#x2685';
  }
}
