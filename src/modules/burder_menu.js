const button = document.querySelector(".header__burger-button");
const menu = document.querySelector(".main__aside");
const menuBg = document.querySelector(".main__aside-bg");
button.addEventListener("click", () => {
	if (menu.classList.contains("active")) {
		button.classList.remove("active");
		menu.classList.remove("active");
		menuBg.classList.remove("active");
		document.body.style.overflow = "auto";
	} else {
		button.classList.add("active");
		menu.classList.add("active");
		menuBg.classList.add("active");
		document.body.style.overflow = "hidden";
	}
});
menuBg.addEventListener("click", () => {
	button.classList.remove("active");
	menu.classList.remove("active");
	menuBg.classList.remove("active");
	document.body.style.overflow = "auto";
});
