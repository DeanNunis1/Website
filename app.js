const home = document.querySelector('#mobile-menu')
const homeLinks = document.querySelector('.navigationBar__menu')

home.addEventListener('click', function() {
    home.classList.toggle('is-active');
    homeLinks.classList.toggle('active');
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });