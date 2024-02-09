//Variable
const hamburger = document.querySelector("#hamburger");
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const layer = document.querySelector("#layer");
const boxNav = document.querySelector("#box-nav");
const listNav = document.querySelector("#nav-list");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const userTheme = localStorage.getItem("theme");
const sysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
let scrollTopFirst;

/* Navbar Animation Start Here */
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
function navbar() {
	hamburger.classList.toggle("hamburger-active");
	nav.classList.toggle("nav-active");
	layer.classList.toggle("layer-active");
	boxNav.classList.toggle("dark:bg-dark");
	boxNav.classList.toggle("bg-background");
}
/* Navbar Animation Start Here */

/* Darkmode Start Here */

//Toggle Function
const iconToggle = () => {
	sun.classList.toggle("hidden");
	moon.classList.toggle("hidden");
};

//initial check
const initCheck = () => {
	if (userTheme === "dark" || (!userTheme && sysTheme)) {
		document.documentElement.classList.add("dark");
		moon.classList.remove("hidden");
		sun.classList.add("hidden");
	} else {
		document.documentElement.classList.remove("dark");
		moon.classList.add("hidden");
		sun.classList.remove("hidden");
	}
};

initCheck();

//Manual Switch
const themeSwitch = () => {
	if (document.documentElement.classList.contains("dark")) {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
		iconToggle();
	} else {
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
		iconToggle();
	}
};

moon.addEventListener("click", () => {
	themeSwitch();
});

sun.addEventListener("click", () => {
	themeSwitch();
});
