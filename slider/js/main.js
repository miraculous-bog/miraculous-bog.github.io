var slide = document.getElementById('slide');
var	g = document.getElementById('g');
var	m = document.getElementById('m');
g.onmousemove = function(e) {
	var x = e.clientX;
	slide.style.left = x + 'px';
	if (slide < 300 + 'px') {
	m.style.background = 'black';
}
}

$(".arrow-4").click(function() {
    $(this).toggleClass("open");
});
var slideshow = document.getElementById('slideshow');
		var slides = slideshow.getElementsByTagName('img');
		var index = 0; 
		function nextSlide() {
			slides[index].classList.remove('active');
			index = (index + 1) % slides.length;
			slides[index].classList.add('active');
		}
				function prevSlide() {
			slides[index].classList.remove('active');
			index = (index - 1 + slides.length) % slides.length;
			slides[index].classList.add('active');
		}


		var slideshowText = document.getElementById('slideshowText');
		var slidesText = slideshowText.getElementsByTagName('div');
		var i = 0; 
		function nextSlideText() {
			slidesText[i].classList.remove('active');
			i = (i + 1) % slidesText.length;
			slidesText[i].classList.add('active');
		}
				function prevSlideText() {
			slidesText[i].classList.remove('active');
			i = (i - 1 + slidesText.length) % slidesText.length;
			slidesText[i].classList.add('active');
		}
