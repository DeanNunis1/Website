const home = document.querySelector('#mobile-menu')
const homeLinks = document.querySelector('.navigationBar__menu')

home.addEventListener('click', function() {
    home.classList.toggle('is-active');
    homeLinks.classList.toggle('active');
});