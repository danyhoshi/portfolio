const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener ('click', () => {
  navbar.classList.toggle('navbar-active');
  menuBtn.firstElementChild.classList.toggle('none');
  menuBtn.lastElementChild.classList.toggle('none');
});