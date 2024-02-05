const hamburger = document.querySelector("#hamburger");
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const layer = document.querySelector("#layer");
const boxNav = document.querySelector("#box-nav");
const listNav = document.querySelector("#nav-list");
let scrollTopFirst;

function navbar() {
	hamburger.classList.toggle("hamburger-active");
	nav.classList.toggle("nav-active");
	layer.classList.toggle("layer-active");
	boxNav.classList.toggle("bg-background");
}

hamburger.addEventListener("click", navbar);
nav.addEventListener("click", navbar);
window.addEventListener("scroll", function () {
	let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

	if (currentScrollTop > scrollTopFirst) {
		header.classList.replace("translate-y-0", "-translate-y-20");
	} else {
		header.classList.replace("-translate-y-20", "translate-y-0");
		// header.classList.add("translate-y-0");
	}
	scrollTopFirst = currentScrollTop;
});
