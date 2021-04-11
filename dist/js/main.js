let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let x = document.getElementsByClassName("mySlides");
    let y = document.getElementsByClassName("hero-content");
    let z = document.getElementsByClassName("mySlides-desk");
    if (n > x.length && n > y.length && n > z.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
        slideIndex = y.length
        slideIndex = z.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
        z[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";
    y[slideIndex - 1].style.display = "block";
    z[slideIndex - 1].style.display = "block";
}



let burgerMenu = document.querySelector(".burger-menu");
let lineOne = document.querySelector('.line1');
let lineThree = document.querySelector('.line3');
let nav = document.querySelector("nav ul");
let navList = document.querySelectorAll("nav ul li")
let page = document.querySelector('body');

burgerMenu.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    page.classList.toggle('toggle');
    burgerMenu.classList.toggle('toggle');
    burgerMenu.classList.toggle('line1-active');
    burgerMenu.classList.toggle('line3-active');
});

function off() {
    document.querySelector('.overlay').style.display = "none";

}