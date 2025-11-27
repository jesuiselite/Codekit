"use strict";

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");

const menuLinks = menu.querySelectorAll(".menu__el");

if(menuToggle){
    //click sur le bouton
    menuToggle.addEventListener("click", menuOpen);
}

function menuOpen(){
    menu.classList.toggle("menu--open");
    console.log("true");
}

//click sur les liens
for (let i = 0; i < menuLinks.length; i++) {
menuLinks[i].addEventListener("click", function() {
    menu.classList.remove("menu--open");
  });
}