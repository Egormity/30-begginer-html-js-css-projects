const btnEl = document.querySelector('.btn');
const textResultEl = document.querySelector('.text-result');

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    'https://emoji-api.com/emojis?access_key=f43a9a45dea1e9112fd43da233a0d388963f6b39'
  );

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      name: data[i].character,
      code: data[i].unicodeName,
    });
  }

  console.log(emoji);
}

getEmoji();

btnEl.addEventListener('click', () => {
  const randomNum = Math.ceil(Math.random() * emoji.length);

  btnEl.textContent = emoji[randomNum].name;
  textResultEl.textContent = emoji[randomNum].code;
});
