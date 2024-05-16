const body = document.querySelector("body");
const navbar = body.querySelector(".navbar");
const toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () =>{
	navbar.classList.toggle("close");
});
