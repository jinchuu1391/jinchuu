"use strict";

document.addEventListener("scroll", () => {});

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (!link) {
    return;
  }
  scrollIntoView(link);
});

const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

const home = document.querySelector("#home");
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / home.getBoundingClientRect().height;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
