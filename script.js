const nav = document.querySelector(".nav-list");
const hamburger = document.querySelector(".checkbtn")
const closeBtn = document.querySelector(".burger-close-btn")

hamburger.addEventListener("click", toggleNavbar);
closeBtn.addEventListener("click", toggleNavbar);

function toggleNavbar() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}