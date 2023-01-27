import {getHTML} from "./getHTML.js"



document.addEventListener("DOMContentLoaded",e=>{
 getHTML("./assets/html/inicio.html","main-content");
});





// nav menu
const nav_menu = document.querySelector(".nav-menu");

document.addEventListener("click",e=>{
 // button nav menu
 e.preventDefault();
 if(e.target.matches(".nav-toggle *")){
  nav_menu.classList.toggle("nav-menu__visible");
 }
 // sections
 if(e.target.matches(".main-secundary")){
  console.log("main");
  getHTML("./assets/html/inicio.html","main-content");
  
  console.log(e.target.href);
  getHTML(e.target.href,"main-secundary");

 }else if(e.target.matches(".nav-link ,.nav-link img")) getHTML(e.target.href || e.target.closest("a"),"main-content");
});

