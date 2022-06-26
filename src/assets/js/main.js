document.body.onload = function () {
	setTimeout(function () {
	  var preloader = document.getElementById("preloader");
	  if (!preloader.classList.contains("done")) {
		preloader.classList.add("done");
	  }
	}, 1000);
};
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}