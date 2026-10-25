// GESTIONE CAROSELLO IMMAGINI
const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function moveSlide(step) {
  currentSlide += step;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  showSlide(currentSlide);
}

if (btnNext && btnPrev) {
  btnNext.addEventListener('click', () => moveSlide(1));
  btnPrev.addEventListener('click', () => moveSlide(-1));
}

// GESTIONE ACCORDION FAQ
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    // Chiudi tutte le altre risposte aperte
    document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = "0px");

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});