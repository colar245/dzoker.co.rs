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
        

