let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  let totalSlides = slides.length;

  slideIndex++;
  if (slideIndex > totalSlides) {
    slideIndex = 1;
  }

  let slider = document.querySelector(".slider");
  let offset = -(slideIndex - 1) * 100;
  slider.style.transform = `translateX(${offset}%)`;

  for (let i = 0; i < slides.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 4000);
}

function currentSlide(n) {
  let slider = document.querySelector(".slider");
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  slideIndex = n;
  let offset = -(slideIndex - 1) * 100;
  slider.style.transform = `translateX(${offset}%)`;

  for (let i = 0; i < slides.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[slideIndex - 1].classList.add("active");
}
