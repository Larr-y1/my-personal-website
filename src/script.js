/*============ Background Header ==============*/
function scrollHeader() {
  const header = document.getElementById("header");
  //when the scroll is greater than 50 viewport height, i will add the scroll-header class to header tag
  if (this.scrollY >= 50) header.classList.add("scroll_header");
  else header.classList.remove("scroll_header");
}
window.addEventListener("scroll", scrollHeader);

/*============ show menu ==============*/
const navMenu = document.getElementById('nav_menu');
navToggle = document.getElementById('nav_toggle');
navClose = document.getElementById('nav_close');

//menu show
//validates if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');
    })
}

//Hide show
//validates if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    })
}




