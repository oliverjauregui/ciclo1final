var btnBurger = document.getElementById("burger");
var menu = document.querySelector(".menu");

btnBurger.addEventListener("click", toggleMenu);


function toggleMenu(){
	menu.classList.toggle("menu--visible")
}