"use strict";

const tabLinks = document.querySelectorAll(".tab__el a");

if(tabLinks.length > 0){
    for (let tabLink of tabLinks) {
        tabLink.addEventListener("click", tabTrigger);
    }
}

function tabTrigger(event){
    event.preventDefault();
    
    const parentTab = event.currentTarget.closest(".tab");
    
    const activeLink = parentTab.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");
    
    event.currentTarget.parentNode.classList.add("tab__el--active");

    const tabs = parentTab.querySelectorAll(".tab__content");
    const tabActive = parentTab.querySelector(".tab__content--active");

    tabActive.classList.remove("tab__content--active");
    
    const tabSelectID = event.currentTarget.getAttribute("href");
    const tabSelect = parentTab.querySelector(tabSelectID);
    tabSelect.classList.add("tab__content--active");

    // Ajuster la hauteur du conteneur à la tab active
    if (parentTab.classList.contains("tab--a")) {
        const activeContainerA = document.querySelector(".tab--a .tab__container")
        activeContainerA.style.height = tabSelect.offsetHeight + "px";
    }
    if (parentTab.classList.contains("tab--b")) {
        const activeContainerB = document.querySelector(".tab--b .tab__container")
        activeContainerB.style.height = tabSelect.offsetHeight + "px";
    }
}

// définir la taille du conteneur par rapport à la tab active
const activeTabA = document.querySelector(".tab--a .tab__content--active")
const activeContainerA = document.querySelector(".tab--a .tab__container")
activeContainerA.style.height = activeTabA.offsetHeight + "px";

// définir la taille du conteneur par rapport à la tab active
const activeTabB = document.querySelector(".tab--b .tab__content--active")
const activeContainerB = document.querySelector(".tab--b .tab__container")
activeContainerB.style.height = activeTabB.offsetHeight + "px";