
//CAROSELLO
const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

let currentSlide = 0;

// Mostra la slide corrente e nasconde le altre
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

// Avanti
btnNext.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
});

// Indietro
btnPrev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  showSlide(currentSlide);
});

// Inizializza
showSlide(currentSlide);


//SEZIONE FAQ
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    // chiudi tutti
    document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = "0");

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
