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

let bannerArrowLeft = document.getElementById("banner_arrow_left");
let bannerArrowRight= document.getElementById("banner_arrow_right");


bannerArrowLeft.onmouseover = null;
bannerArrowRight.onmouseover = null;

bannerArrowLeft.onclick = function () {
  console.log(bannerArrowLeft.getAttribute("alt"));  
}

bannerArrowRight.onclick = function () {
  console.log(bannerArrowRight.getAttribute("alt"));  
}

