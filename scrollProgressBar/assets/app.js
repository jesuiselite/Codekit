"use strict";

const progressBar = document.querySelector(".scrollBar__progress");

if(progressBar){
    window.addEventListener("scroll", updateScrollProgress);
}

function updateScrollProgress(){
    
    // document.body.scrollHeight /* scroll total de la page */
    // window.innerHeight /* hauteur du viewport */
    // window.scrollY /* valeur de scroll */

    /* calcule */
    
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const currentScroll = window.scrollY;
    const readPercentage = (currentScroll / maxScroll) *100;
    if (currentScroll >=0){
        progressBar.style.setProperty("--scrollBar-widht", readPercentage + "%");
    }
}
