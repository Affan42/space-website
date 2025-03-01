/*=============== SHOW MENU ===============*/
const navbarToggler = document.querySelector(".navbar_toggler");
const navCollapse = document.querySelector(".nav_collapse");
const navCloseBtn = document.querySelector(".nav_menu_close_btn");
const overlay = document.querySelector(".overlay");
addEvent(navbarToggler, "click", toggleNavbar);
addEvent(navCloseBtn, "click", toggleNavbar);
addEvent(overlay, "click", toggleNavbar);
const navLinks = document.querySelectorAll(".nav_link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    onNavLinkClick(navLink);
  });
  addEvent(navLink, "click", toggleNavbar);
});
function addEvent(elem, event, func) {
  elem.addEventListener(event, func);
}
function toggleNavbar() {
  navCollapse.classList.toggle("show_nav_menu");
  overlay.classList.toggle("overlay_visible");
}
function onNavLinkClick(currentNavLink) {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
  currentNavLink.classList.add("active");
}
/*=============== REMOVE MENU MOBILE ===============*/

/*=============== ADD BLUR HEADER ===============*/
const navbar = document.querySelector("nav");
function toggleBlur(){
  if (scrollY === 0) {
    navbar.classList.remove("blur_nav");
  } else {
    navbar.classList.add("blur_nav");
  }
}
toggleBlur()
window.addEventListener("scroll", () => {
  toggleBlur()

});
 
/*=============== SWIPER PLANETS ===============*/
function calcSlidesPerView() {
  if (window.matchMedia("(max-width: 700px)").matches) {
    return 1;
  } else if (window.matchMedia("(max-width: 1200px)").matches) {
    return 2;
  } else {
    return 3;
  }
}

let slidesPerView = calcSlidesPerView();
const theSwiper = new Swiper(".swiper", {
  slidesPerView: slidesPerView,

  loop: true,
  loading: "lazy",
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  keyboard: {
    enabled: true,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
window.addEventListener("resize", () => {
  slidesPerView = calcSlidesPerView();
  theSwiper.params.slidesPerView = slidesPerView;
  theSwiper.update();
});
const originalPlanets = [
  {
    name: "PLANET EARTH",
    distance: "54.06 million km",
    img: "/Projects/space_website/assets/img/travel-planet-1.svg",
  },
  {
    name: "THE SUN",
    distance: "148.14 million km",
    img: "/Projects/space_website/assets/img/travel-planet-2.svg",
  },
  {
    name: "PLANET NAMEK",
    distance: "96.12 million km",
    img: "/Projects/space_website/assets/img/travel-planet-3.svg",
  },
  {
    name: "PLANET VENUS",
    distance: "86.609 million km",
    img: "/Projects/space_website/assets/img/travel-planet-4.svg",
  },
];

const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
  const planetImgElem = card.querySelector("img");
  const planetNameElem = card.querySelector(".planet_name");
  const planetDistanceElem = card.querySelector(".planet_distance");
  planetImgElem.src = originalPlanets[i].img;
  planetNameElem.innerHTML = originalPlanets[i].name;
  planetDistanceElem.innerHTML = originalPlanets[i].distance;
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUpBtn = document.querySelector(".scroll_up_btn")
const scrollUpIcon = document.querySelector(".ri-arrow-up-line")
scrollUpBtn.addEventListener("click",()=>{

  scrollUpBtn.classList.add("opa-0")


})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
