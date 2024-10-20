'use strict';

const kits = ['crash', 'kick', 'snare', 'tom'];
const containerEl = document.querySelector('.container');

kits.forEach(kit => {
  const btnEl = document.createElement('button');
  containerEl.appendChild(btnEl);

  btnEl.style.backgroundImage = 'url(images/' + kit + '.png)';
  btnEl.textContent = kit;
  btnEl.classList.add('btn');

  const audioEl = document.createElement('audio');
  audioEl.src = 'sounds/' + kit + '.mp3';
  containerEl.appendChild(audioEl);

  btnEl.addEventListener('click', () => {
    audioEl.play();
  });

  window.addEventListener('keydown', event => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = 'scale(.9)';
      setTimeout(() => {
        btnEl.style.transform = 'scale(1)';
      }, 100);
    }
  });
});
