// Typing effect script
const typingElement = document.getElementById('typing');
const textArray = ['Leonerfy Hennep', 'a Full Stack Developer'];
let textArrayIndex = 0;
let charIndex = 0;
const image = document.querySelector('.icon-profile')
image.addEventListener('click', linked)

 function linked() {
  window.location.href = 'https://www.linkedin.com/in/leonerfy-hennep-87ab00311/'
}
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typingElement.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) setTimeout(type, 500);
});
