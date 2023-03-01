




// nav menu
const nav_menu = document.querySelector(".nav-menu");

document.addEventListener("click",e=>{
 // button nav menu
 // e.preventDefault();
 if(e.target.matches(".nav-toggle *")){
  nav_menu.classList.toggle("nav-menu__visible");
 }
});

