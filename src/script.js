/*============ Background Header ==============*/
function scrollHeader() {
  const header = document.getElementById("header");
  //when the scroll is greater than 50 viewport height, i will add the scroll-header class to header tag
  if (this.scrollY >= 50) header.classList.add("scroll_header");
  else header.classList.remove("scroll_header");
}
window.addEventListener("scroll", scrollHeader);


/*============ show menu ==============*/
const navMenu = document.getElementById("nav_menu");
navToggle = document.getElementById("nav_toggle");
navClose = document.getElementById("nav_close");

//menu show
//validates if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

//Hide show
//validates if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}
/*============ Removemenu ==============*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById("nav_menu");
    //when i click on each link,it will remove the show menu class
    navMenu.classList.remove("show_menu");
}

navLink.forEach((n) => n.addEventListener('click', linkAction));



/*============ Style switcher ==============*/
const styleSwitcherToggle = document.querySelector('.style_switcher_toggler'),
 styleSwitcher = document.querySelector('.style_switcher');

 styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
 });

 //hide switcher on scroll
 window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
 });

 const alternateStyles = document.querySelectorAll('link.alternate_styles');

 function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', true);
        }
    });
 }



 