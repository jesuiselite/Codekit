"use strict";

const tabLinks = document.querySelectorAll(".tab__el a");

if(tabLinks){
    for(let tablink of tabLinks){
        tablink.addEventListener("click", tabTrigger);
    }
}

function tabTrigger(event){
    event.preventDefault();
    
    const parentTab = event.currentTarget.closest(".tab");
    
    const activeLink = parentTab.querySelector(".tab__el--active");

    activeLink.classList.remove("tab__el--active");
    
    event.currentTarget.parentNode.classList.add("tab__el--active");
    
    const activeTab = parentTab.querySelector(".tab__content--active");

    activeTab.classList.remove("tab__content--active");
    
    const tabSelectId = event.currentTarget.getAttribute("href");
    const tabSelect = parentTab.querySelector(tabSelectId);
    tabSelect.classList.add("tab__content--active");
}