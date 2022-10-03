const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/
/* validate if constant exists*/
if (navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}
/*============== MENU HIDDEN ===============*/
/* validate if constant exists*/
if (navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
    const navMenu = document.getElementById("nav-menu")
    // when we click on each nav link, we remove the show menu class
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
    const header = document.getElementById("header")
    // when the scroll is greater than 80 viewport height, add the class scroll header to the tag header
    if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
} 
window.addEventListener("scroll", scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
var swiper = new Swiper(".testimonial-wrapper", {
    spaceBetween: 30,
    loop: "true",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span')

//open modal 
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//close modal 
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

/*===== FONTS =====*/
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize; 
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1'))
        {
            fontSize = '12px';
        }
        else if(size.classList.contains('font-size-2'))
        {
            fontSize = '14px';
        }
        else if(size.classList.contains('font-size-3'))
        {
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size-4'))
        {
            fontSize = '18px';
        }

        // change font size of the root html element 
        document.querySelector('html').style.fontSize = fontSize;
    })
})
/*===== PRIMARY COLORS =====*/

/*===== THEME BACKGROUNDS =====*/
