"use strict";

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");

if(menuToggle){
    menuToggle.addEventListener("click", menuOpen);
}

function menuOpen(){
    menu.classList.toggle("menu--open")
    console.log("true")
}