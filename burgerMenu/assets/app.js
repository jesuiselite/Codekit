"use strict";

const body = document.querySelector("body");
const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll("a");

if(menuToggle){
    menuToggle.addEventListener("click", menuOpen);

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", menuOpen);
    }
}

function menuOpen(event){
    menu.classList.toggle("menu--open");
    body.classList.toggle("no--scroll");
}