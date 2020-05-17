function specialsModalViewer(name){
  var modalViewer = document.getElementsByClassName(`specials-modal-container-${name}`);
    modalViewer[0].style.display = "block"

  var modalContent = document.getElementsByClassName((`specials-modal-${name}`));
    modalContent[0].style.display = "block"
}

function specialsModalClose(name){
  var modalViewer = document.getElementsByClassName(`specials-modal-container-${name}`);
    modalViewer[0].style.display = "none"
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var modalIndex = 1;
showModal(modalIndex);

function plusModal(n) {
  showModal(modalIndex += n);
}


function showModal(n) {
  var i;
  var slides = document.getElementsByClassName("modal-content");
  if (n > slides.length) { modalIndex = 1 }
  if (n < 1) { modalIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[modalIndex - 1].style.display = "grid";
}

function modalStart(){
  var modalViewer = document.getElementsByClassName("modal-container");
    modalViewer[0].style.display = "block"
}

function modalClose(){
  var modalViewer = document.getElementsByClassName("modal-container");
    modalViewer[0].style.display = "none"
}


