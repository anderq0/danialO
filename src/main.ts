import './style.css'

const text = "Обещанное ревью размером в вордовский документ не потому что могу, а потому что хочу";
let index = 0;
const typingElement = document.getElementById("typing-text") as HTMLHeadElement;
const next = document.querySelector(".next") as HTMLButtonElement
const prev = document.querySelector(".prev") as HTMLButtonElement

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeEffect, 100);
    } else {
        typingElement.classList.add("blinking-cursor");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide")
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index)
      })
  }

  next.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length
      showSlide(currentSlide)
  })

  prev.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length
      showSlide(currentSlide)
  })

  showSlide(currentSlide)
})


function animateGraphMobile() {
  const points = document.querySelectorAll(".point");
  let index = 0;

  setInterval(() => {
      points.forEach(p => p.classList.remove("active"));
      points[index].classList.add("active");
      index = (index + 1) % points.length;
  }, 2000);
}

// Запускаем только на телефоне
if (window.innerWidth <= 480) {
  animateGraphMobile();
}