/*=============== add sticky class ===============*/
const headerTag = document.querySelector('header');

window.addEventListener('scroll', () => {
  headerTag.classList.toggle("sticky", window.scrollY > 60);
});


/*=============== show and hide menu ===============*/
const menu = document.querySelector('.menu');
const showMenu = document.querySelector('.show-menu');
const closeMenu = document.querySelector('.close-menu');

// show menu
showMenu.addEventListener('click', () => {
  menu.classList.add('active');
});

// close menu
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

