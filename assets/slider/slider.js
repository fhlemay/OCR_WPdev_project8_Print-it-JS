/* Pointeurs vers les diapositives principales. */
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

function setCurrentSelectedDot () {
  for (let i = firstSlide; i <= lastSlide ; i++) {
    const dotClasses = dots.children[i].classList;
    if (i === currentSlide) 
      dotClasses.add("dot_selected");
    else
      dotClasses.remove("dot_selected");
  }
}

function setSliderImage () {
  sliderImage.src = sliderImagesPath + slides[currentSlide].image;
  sliderText.innerHTML = slides[currentSlide].tagLine;
}

function moveSliderTo (direction) {
  switch (direction) {
    case 'LEFT':
      currentSlide = 
        (currentSlide === firstSlide) ? lastSlide : currentSlide - 1 ; 
      break;
    case 'RIGHT':
      currentSlide = 
        (currentSlide === lastSlide) ? firstSlide : currentSlide + 1 ; 
      break;
    default:
      console.log("Wrong direction");
  }
  setCurrentSelectedDot();
  setSliderImage();
}

createInitialDots(); // Avant toute chose, créeer les bullet points du slider

arrowLeft.addEventListener('click', () => moveSliderTo('LEFT'));
arrowRight.addEventListener('click', () => moveSliderTo('RIGHT'));
