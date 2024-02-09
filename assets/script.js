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

/* Configuration */
const sliderImagesPath = "./assets/images/slideshow/";

/* Pointeurs vers diverses diapositives. 
 * Noms raccourcis de xxxxSlideIndex, évidemment. 
 */
let currentSlide = 0; 
const firstSlide = 0;
const lastSlide = slides.length - 1;

/* Pointeurs vers les éléments du DOM où intégrer le carroussel. */
const dots = document.querySelector("#banner .dots");
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight= document.querySelector("#banner .arrow_right");
const sliderText = document.querySelector("#banner p");
const sliderImage = document.querySelector("#banner img");

function createInitialDots () {
  for (let i = firstSlide; i <= lastSlide; i++) {
    const dot = document.createElement("div");  
    dot.classList.add("dot");
    if (i === firstSlide) {
      dot.classList.add("dot_selected"); // le point initialement sélectionné
    }
    dots.appendChild(dot);
  }
}

function resetCurrentSelectedDot () {
  let currentSelectedDot = document.querySelector("#banner .dot_selected");
  currentSelectedDot.classList.remove("dot_selected");
}

function setCurrentSelectedDot () {
  let childrenDots = dots.children; // It returns a HTMLCollection. Nice.
  for (let dotIndex = 0; dotIndex  < childrenDots.length ; dotIndex ++) {
    if (dotIndex === currentSlide) {
      childrenDots[dotIndex].classList.add("dot_selected");
    }  
  }
}

function setSliderImage () {
  sliderImage.src = sliderImagesPath + slides[currentSlide].image;
  sliderText.innerHTML = slides[currentSlide].tagLine;
}

function moveSliderTo (direction) {
  resetCurrentSelectedDot();
  // Le défilement infini du carrousel, c'est ici...
  switch (direction) {
    case 'LEFT':
      currentSlide = (currentSlide === firstSlide) ? lastSlide : currentSlide - 1 ; 
      break;
    case 'RIGHT':
      currentSlide = (currentSlide === lastSlide) ? firstSlide : currentSlide + 1 ; 
      break;
    default:
      console.log("Wrong direction");
  }
  setCurrentSelectedDot();
  setSliderImage();
}

createInitialDots();

/* Ajout des Event Listener sur les flèches du carrousel */
arrowLeft.onclick = function () { moveSliderTo('LEFT'); }
arrowRight.onclick = function () { moveSliderTo('RIGHT'); }
