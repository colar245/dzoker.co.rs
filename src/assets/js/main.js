function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}