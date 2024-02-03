const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");
const layer = document.querySelector("#layer");
const boxNav = document.querySelector("#box-nav");
const listNav = document.querySelector("#nav-list");

function navbar() {
	hamburger.classList.toggle("hamburger-active");
	nav.classList.toggle("nav-active");
	layer.classList.toggle("layer-active");
	boxNav.classList.toggle("bg-background");
}

hamburger.addEventListener("click", navbar);
nav.addEventListener("click", navbar);
