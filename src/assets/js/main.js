// preloader
document.body.onload = function () {
	setTimeout(function () {
	  var preloader = document.getElementById("preloader");
	  if (!preloader.classList.contains("done")) {
		preloader.classList.add("done");
	  }
	}, 500);
};
// Menu
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}
// Carousel
const delay = 10000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});

/* Animate On Scroll
    * ------------------------------------------------------ */
// AOS.init( {
// 	offset: 200,
// 	duration: 600,
// 	easing: 'ease-in-sine',
// 	delay: 300,
// 	once: true,
// 	disable: 'mobile'
// });
        

