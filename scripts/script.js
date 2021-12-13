// JavaScript Document
var openMenuButton = document.querySelector("header ul li button")
// var closeMenuBtton = document.querySelector(".full-menu button")
var hetMenu = document.querySelector(".full-menu")


// wanneer je op de button klikt, klapt het menu uit
openMenuButton.addEventListener('click', openHetMenu)

function openHetMenu() {
    // animeer het kruisje --> kan later

    // voeg de class 'geopendMenu' toe aan hetMenu
    hetMenu.classList.toggle("geopendMenu")
    console.log(hetMenu.classList)   
}



// en nu hetzelfde als hierboven doen, maar dan voor wanneer je op het kruisje klikt, dat het menu weer verdwijt!
// dus: wanneer je op het kruisje klikt, wordt er een functie uitgevoerd
// in die functie, wordt de class 'geopendMenu' weer weggehaald van het menu

// wanneer je op de button klikt, klapt het menu in

// closeMenuBtton.addEventListener('click', sluitHetMenu)
// function sluitHetMenu() {
//     hetMenu.classList.remove("geopendMenu")
//     console.log(hetMenu.classlist)
// }