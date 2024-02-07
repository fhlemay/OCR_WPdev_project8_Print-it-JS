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
let qtySlides = slides.length;
let bannerArrowLeft = document.querySelector("#banner .arrow .arrow_left");
let bannerArrowRight= document.querySelector("#banner .arrow .arrow_right");
let dots = document.querySelector("#banner .dots");
let sliderImage = document.querySelector("#banner img");
let sliderText = document.querySelector("#banner p");
let sliderImagesPath = "./assets/images/slideshow/";

for (let i = 0; i < qtySlides; i++) {
  let dot = document.createElement("div");  
  if (i == currentSlide) {
    dot.classList.add("dot_selected");
  }
  dot.classList.add("dot");
  dots.appendChild(dot);
}

bannerArrowLeft.onclick = function () {

  let currentSelectedDot = document.querySelector("#banner .dots .dot_selected");
  currentSelectedDot.classList.remove("dot_selected");

  if (currentSlide == 0) {
    currentSlide = qtySlides - 1;
  } else {
    currentSlide--;
  }
  
  sliderImage.src = sliderImagesPath + slides[currentSlide].image;
  sliderText.innerHTML = slides[currentSlide].tagLine;
  
  let childrenDots = dots.children;
  for (let i = 0; i  < childrenDots.length ; i ++) {
    if (i == currentSlide) {
      childrenDots[i].classList.add("dot_selected");
    }  
  }
}

bannerArrowRight.onclick = function () {

  let currentSelectedDot = document.querySelector("#banner .dots .dot_selected");
  currentSelectedDot.classList.remove("dot_selected");

  if (currentSlide == (qtySlides - 1)) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  
  sliderImage.src = sliderImagesPath + slides[currentSlide].image;
  sliderText.innerHTML = slides[currentSlide].tagLine;
  
  let childrenDots = dots.children;
  for (let i = 0; i  < childrenDots.length ; i ++) {
    if (i == currentSlide) {
      childrenDots[i].classList.add("dot_selected");
    }  
  }


}

