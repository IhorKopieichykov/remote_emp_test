import "./index.scss";
import "./index.html";
import "./modules/header.js";
import "./modules/pick_select.js";
import "./modules/burder_menu.js";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";
// init Swiper:
const slider_hero = new Swiper(".slider-hero", {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
const slider_spots = new Swiper(".slider-spots", {
	slidesPerView: 3,
	spaceBetween: 56,
	autoplay: {
		delay: 2600,
		disableOnInteraction: false,
	},
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		568: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		880: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 56,
		},
	},
});
const slider_pick = new Swiper(".slider-pick", {
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			spaceBetween: 40,
		},
		1200: {
			spaceBetween: 0,
		},
	},
});
