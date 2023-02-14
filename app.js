const home = document.querySelector('#mobile-menu')
const homeLinks = document.querySelector('.navbar__menu')

menubar.addEventListener('click', function() {
    home.classList.toggle('is-active');
    homeLinks.classList.toggle('active');
});