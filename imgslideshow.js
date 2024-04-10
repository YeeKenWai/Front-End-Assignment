let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides() {
	showSlides(slideIndex += 1);
};

// Thumbnail image controls
function currentSlide() {
	showSlides(slideIndex = 1);
};

function showSlides(n) {
	let i = 0;
	let slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
};