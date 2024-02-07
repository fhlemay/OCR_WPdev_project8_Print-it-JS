const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;
let qtyOfSlides = slides.length;
let arrowLeft = document.querySelector("#banner .arrow .arrow_left");
let arrowRight= document.querySelector("#banner .arrow .arrow_right");
let dots = document.querySelector("#banner .dots");
let sliderImage = document.querySelector("#banner img");
let sliderText = document.querySelector("#banner p");
let sliderImagesPath = "./assets/images/slideshow/";

for (let i = 0; i < qtyOfSlides; i++) {
  let dot = document.createElement("div");  
  dot.classList.add("dot");
  if (i == currentSlide) {
    dot.classList.add("dot_selected");
  }
  dots.appendChild(dot);
}

function resetCurrentSelectedDot () {
  let currentSelectedDot = document.querySelector("#banner .dots .dot_selected");
  currentSelectedDot.classList.remove("dot_selected");
}

function setSliderImage () {
  sliderImage.src = sliderImagesPath + slides[currentSlide].image;
  sliderText.innerHTML = slides[currentSlide].tagLine;
}

function setCurrentSelectedDot () {
  let childrenDots = dots.children;
  for (let i = 0; i  < childrenDots.length ; i ++) {
    if (i == currentSlide) {
      childrenDots[i].classList.add("dot_selected");
    }  
  }
}

arrowLeft.onclick = function () {

  resetCurrentSelectedDot();

  if (currentSlide == 0) {
    currentSlide = qtyOfSlides - 1;
  } else {
    currentSlide--;
  }
  
  setSliderImage();
  setCurrentSelectedDot();
}

arrowRight.onclick = function () {

  resetCurrentSelectedDot();

  if (currentSlide == (qtyOfSlides - 1)) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  setSliderImage();
  setCurrentSelectedDot();
}

