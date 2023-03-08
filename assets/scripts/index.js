




// nav menu
const $nav_menu = document.querySelector(".nav-menu"),
$nav_link = document.querySelectorAll(".nav-menu-link");


document.addEventListener("click",e=>{
 // button nav menu
 // e.preventDefault();
 if(e.target.matches(".nav-toggle *")){
  $nav_menu.classList.toggle("nav-menu__visible");
 }
 if(e.target.matches(".nav-menu-link")){
  $nav_menu.classList.toggle("nav-menu__visible");
 }
});

