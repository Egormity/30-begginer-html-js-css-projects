const imageContainer = document.querySelector('.image-container');
const textContainer = document.querySelector('.text-container');

function updateImg() {
  console.log(textContainer.offsetTop);
  console.log(window.scrollY);

  if (window.scrollY < textContainer.offsetTop - 10) {
    imageContainer.style.opacity = 1 - window.scrollY / 1000;
    imageContainer.style.backgroundSize = 200 - window.scrollY / 10 + '%';
  }
}

window.addEventListener('scroll', updateImg);
