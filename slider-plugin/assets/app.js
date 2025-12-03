"use strict";

const spliderEl = document.querySelector(".splide");

if (spliderEl) {
    const splide = new Splide( '.splide',{
        type: "loop",
    } );
    splide.mount();
}