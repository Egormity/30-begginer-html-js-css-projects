const imageContainer = document.querySelector('.imageContainer');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  imagesNum = 3;
  addNewImages();
});

function addNewImages() {
  for (let i = 0; i < imagesNum; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://random.imagecdn.app/300/300?random=${Math.ceil(
      Math.random() * 1000
    )}`;

    imageContainer.appendChild(newImg);
  }
}
