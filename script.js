const nav = document.querySelector(".nav-list");
const hamburger = document.querySelector(".checkbtn")
const closeBtn = document.querySelector(".burger-close-btn")
const experienceCarousel = document.getElementById('experience-carousel');
experienceCarousel.scrollTop = 100;
experienceCarousel.scrollLeft = 0;
let pos = { top: 0, left: 0, x: 0, y: 0 };

const range1 = document.getElementById("range1")
const range2 = document.getElementById("range2")
const range3 = document.getElementById("range3")

let output1 = document.getElementById("output1")
let output2 = document.getElementById("output2")
let output3 = document.getElementById("output3")


hamburger.addEventListener("click", toggleNavbar);
closeBtn.addEventListener("click", toggleNavbar);

function toggleNavbar() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}

const mouseDownHandler = function (e) {
    experienceCarousel.style.cursor = 'grabbing'
    pos = {
        left: experienceCarousel.scrollLeft,
        top: experienceCarousel.scrollTop,
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};
const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    experienceCarousel.scrollTop = pos.top - dy;
    experienceCarousel.scrollLeft = pos.left - dx;
};
const mouseUpHandler = function () {
    experienceCarousel.style.cursor = 'grab';
    experienceCarousel.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};
experienceCarousel.addEventListener('mousedown', mouseDownHandler);

const changeRange = (output, id) => {
    output.innerHTML = id.value
}
range1.addEventListener("change", () => changeRange(output1, range1))
range2.addEventListener("change", () => changeRange(output2, range2))
range3.addEventListener("change", () => changeRange(output3, range3))
