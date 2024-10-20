const container = document.querySelector('.container');

const careers = ['Student', 'Web Developer', 'Freelancer', 'Motherfucker'];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
  characterIndex++;
  container.innerHTML = `
    <h1>Hi guys, I'm a ${careers[careerIndex].slice(0, characterIndex)}</h1>
    `;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 100);
}

updateText();
