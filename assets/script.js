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

/* Pointeurs vers diverses diapositives. */
let currentSlide = 0;
const firstSlide = 0;
const lastSlide = slides.length - 1;

/* Configuration */
const sliderImagesPath = "./assets/images/slideshow/";

/* Pointeurs vers les éléments du DOM où intégrer le carroussel. */
const dots = document.querySelector("#banner .dots");
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight= document.querySelector("#banner .arrow_right");
const sliderText = document.querySelector("#banner p");
const sliderImage = document.querySelector("#banner img");

/* Création des bullet points du carroussel. */
for (let i = firstSlide; i <= lastSlide; i++) {
  const dot = document.createElement("div");  
  dot.classList.add("dot");
  if (firstSlide == i) {
    dot.classList.add("dot_selected"); // le point initialement sélectionné
  }
  dots.appendChild(dot);
}

function resetCurrentSelectedDot () {
  let currentSelectedDot = document.querySelector("#banner .dot_selected");
  currentSelectedDot.classList.remove("dot_selected");
}

function setCurrentSelectedDot () {
  let childrenDots = dots.children;
  for (let i = 0; i  < childrenDots.length ; i ++) {
    if (i == currentSlide) {
      childrenDots[i].classList.add("dot_selected");
    }  
  }
}

function setSliderImage () {
  sliderImage.src = sliderImagesPath + slides[currentSlide].image;
  sliderText.innerHTML = slides[currentSlide].tagLine;
}

arrowLeft.onclick = function () {

  resetCurrentSelectedDot();

  /* Mise en oeuvre de la boucle infinie vers la GAUCHE. */
  currentSlide = (currentSlide == firstSlide) ? lastSlide : currentSlide - 1 ; 

  setSliderImage();
  setCurrentSelectedDot();
}

arrowRight.onclick = function () {

  resetCurrentSelectedDot();

  /* Mise en oeuvre de la boucle infinie vers la DROITE. */
  currentSlide = (currentSlide == lastSlide) ? firstSlide : currentSlide + 1 ; 

  setSliderImage();
  setCurrentSelectedDot();
}

