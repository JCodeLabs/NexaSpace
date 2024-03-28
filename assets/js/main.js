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


/*=============== swiper slide ===============*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: "horizontal",
  lazyLoading: true,
  spaceBetween: 7,
  grabCursor: false,
  centeredSlides: true,
  loop: true,
  Keyboard: {
    enabled: true,
  },

  // rsponsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  // navigation arrows
  navigation: {
    nextEl: '.swiper-custom-nav-next',
    prevEl: '.swiper-custom-nav-prev',
  },
});


/*=============== accordion ===============*/
const toggleAccordion = (accordionId) => {
  const accordionItem = document.getElementById(accordionId);
  const answer = accordionItem.querySelector('.answer');
  const arrow = accordionItem.querySelector('.fa-arrow-up');

  if(accordionItem.classList.contains('active')){
    accordionItem.classList.remove('active');
    answer.style.maxHeight = "0";
    arrow.style.transform = "rotate(0deg)"
  } else {
    accordionItem.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + "px";
    arrow.style.transform = "rotate(180deg)"
  }
};