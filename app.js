const text = ["Student", "Developer", "Learner", "Coder"];
const colors = ["#e63946", "#2a9d8f", "#f4a261", "#754ef9"]; 

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (index >= text.length) index = 0;
  currentText = text[index];

  if (!isDeleting) {
    document.querySelector(".typing-text").textContent =
      currentText.slice(0, ++charIndex);

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500); // pause before delete
      return;
    }
  } else {
    document.querySelector(".typing-text").textContent =
      currentText.slice(0, --charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  }

  // random typing speed for natural effect
  let speed = isDeleting ? 80 : Math.random() * (200 - 100) + 100;
  setTimeout(type, speed);
}

type();