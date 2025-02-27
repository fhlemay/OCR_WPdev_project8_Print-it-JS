/* Pointeurs vers les diapositives principales. */
let currentSlide; 
const firstSlide = 0;
const lastSlide = slides.length - 1;

/* Pointeurs vers les éléments du DOM où intégrer le carroussel. */
const dots = document.querySelector("#banner .dots");
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight= document.querySelector("#banner .arrow_right");
const sliderText = document.querySelector("#banner p");
const sliderImage = document.querySelector("#banner img");

function paintDots () {
  dots.innerHTML = ''; // Efface les bullet points à chaque changement d'état. 
  for (let i = firstSlide; i <= lastSlide ; i++) { 
    const dot = document.createElement("div");  
    dot.classList.add("dot");
    if (i === currentSlide) {
      dot.classList.add("dot_selected"); 
    }
    dots.appendChild(dot);
  }
}

function moveSliderTo (direction) {
  switch (direction) {
    case 'FIRST':
      currentSlide = firstSlide; 
      break;
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

  /* Régler la nouvelle image et le tagline du carrousel */
  sliderImage.src = sliderImagesPath + slides[currentSlide].image;
  sliderText.innerHTML = slides[currentSlide].tagLine;

  paintDots();
}

moveSliderTo('FIRST'); // Overwrite l'état initial du slider dans le HTML

arrowLeft.addEventListener('click', () => moveSliderTo('LEFT'));
arrowRight.addEventListener('click', () => moveSliderTo('RIGHT'));
