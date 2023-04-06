const pickSelect = document.querySelector(".pick-select");
const pickSelectPlaceholder = document.querySelector(
	".pick-select__placeholder"
);
pickSelectPlaceholder.addEventListener("click", () => {
	if (pickSelect.classList.contains("active")) {
		pickSelect.classList.remove("active");
	} else {
		pickSelect.classList.add("active");
	}
});
window.addEventListener("click", (e) => {
	if (!e.target.classList.contains("pick-select__placeholder")) {
		pickSelect.classList.remove("active");
	}
});
