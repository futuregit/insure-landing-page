const hamburgerIcon = document.querySelector('.hamburger__icon');
const navbar = document.querySelector('.navbar');
const navbarLinksClosed = document.querySelector('.navbar__links--closed');
const heroLeft = document.querySelector('.hero__left')

hamburgerIcon.addEventListener('click', () => {
  
    hamburgerIcon.classList.toggle('hamburger__icon--open');
    navbar.classList.toggle('navbar--open');
    navbarLinksClosed.classList.toggle('navbar__links--open');
    heroLeft.classList.toggle('emptyClass');
})