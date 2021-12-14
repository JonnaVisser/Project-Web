// JavaScript Document
var openMenuButton = document.querySelector("header ul li button")
var hetMenu = document.querySelector(".full-menu")


// wanneer je op de button klikt, klapt het menu uit
openMenuButton.addEventListener('click', openHetMenu)

function openHetMenu() {
    // voeg de class 'geopendMenu' toe aan hetMenu
    hetMenu.classList.toggle("geopendMenu")  
}
