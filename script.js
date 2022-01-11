const nav = document.querySelector(".nav-list");
const hamburger = document.querySelector(".checkbtn")
const closeBtn = document.querySelector(".burger-close-btn")
const experienceCarousel = document.getElementById('experience-carousel');
const profileCards = document.getElementById('profile-cards')
profileCards.scrollLeft = 0;
experienceCarousel.scrollLeft = 0;
let pos = {left: 0, x: 0};
const listDescriptionText = [
    'We only provide German-speaking virtual assistants. The employees are either emigrants from D / A / CH or they have studied or worked in D / A / CH and then returned to their homeland. Of course, other language skills such as English or Russian are also possible on request.',
    'German (Standard High German: Deutsch, pronounced [dɔʏtʃ] (About this soundlisten))[nb 4] is a West Germanic language mainly spoken in Central Europe. It is the most widely spoken and official or co-official language in Germany, Austria, Switzerland, Liechtenstein.',
    'Transparency, as used in science, engineering, business, the humanities and in other social contexts, is operating in such a way that it is easy for others to see what actions are performed. Transparency implies openness, communication, and accountability.',
    'We remain grateful to the Almighty God for yet another Year attained as a country, united by a common destiny and resolute in our determination to overcome the several challenges along the path to build the great and prosperous Nation of our dream.'
]

const pTagText = 'We only recruit in Georgia. The median income locally is $ 370 per month. (Source: World Bank) For a 40 hour week, this corresponds to an hourly wage of around € 1.90. We recommend paying € 2.50 as an entry-level wage, which can increase accordingly if you perform well. Ultimately, our customers pay the employees themselves and have the option to pay more at any time (with the appropriate performance).'

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

const experienceMouseDownHandler = function (e) {
    experienceCarousel.style.cursor = 'grabbing'
    pos = {
        left: experienceCarousel.scrollLeft,
        x: e.clientX,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};
const profileMouseDownHandler = function (e) {
    profileCards.style.cursor = 'grabbing'
    pos = {
        left: profileCards.scrollLeft,
        x: e.clientX,
    };
    document.addEventListener('mousemove', profileMouseMoveHandler);
    document.addEventListener('mouseup', profileMouseUpHandler);
};
const profileMouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;

    // Scroll the element
    profileCards.scrollLeft = pos.left - dx;
};
const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    experienceCarousel.scrollLeft = pos.left - dx;
};
const profileMouseUpHandler = function () {
    profileCards.style.cursor = 'grab';
    profileCards.style.removeProperty('user-select');

    document.removeEventListener('mousemove', profileMouseMoveHandler);
    document.removeEventListener('mouseup', profileMouseUpHandler);
};
const mouseUpHandler = function () {
    experienceCarousel.style.cursor = 'grab';
    experienceCarousel.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

experienceCarousel.addEventListener('mousedown', experienceMouseDownHandler);
profileCards.addEventListener('mousedown', profileMouseDownHandler)

const changeRange = (output, id) => {
    output.innerHTML = id.value
}

range1.addEventListener("change", () => changeRange(output1, range1))
range2.addEventListener("change", () => changeRange(output2, range2))
range3.addEventListener("change", () => changeRange(output3, range3))


const generalFeaturesList = document.querySelectorAll('.general-features-list')
const generalListDescription = document.querySelectorAll('.general-features-list-description');

let featureList = Array.from(generalFeaturesList[0].children);
let listDescription = Array.from(generalListDescription[0].children);

const changeFeature = (id) => {
    const previousID = featureList.indexOf(featureList.find(el => el.classList[0] === 'active'));

    featureList[previousID].classList.remove("active")
    featureList[id].classList.add("active");

    generalListDescription[0].animate([
        {opacity: '0%'},
        {opacity: '100%'}
    ], {
        duration: 1000,
        iterations: 1
    })

    listDescription[0].innerHTML = featureList[id].innerHTML.replace(new RegExp('<[^>]*>', 'g'), '')
    listDescription[1].innerHTML = listDescriptionText[id]
}

for(let i=0;i<featureList.length;i++){
    featureList[i].addEventListener("click", () => {
        changeFeature(i)});
}

const changeFAQ = (id) => {
    const previousID = faqList.indexOf(faqList.find(el => el.classList[0] === 'active'))
    const boolean = faqList.find(el => el.classList[0] === 'active')

    typeof faqList.find(el => el.classList[0] === 'active') != undefined ? faqList[previousID]?.classList.remove('active') : null;

    boolean ? faqList[previousID].children[0].children[1].src = 'assets/openIcon.png' : null

    previousID !== id ? faqList[id].classList.add('active') : null;
    previousID === id ? null : faqList[id].children[0].children[1].src = 'assets/closeIcon.png'

    const pTag = document.createElement("p")
    const pText = document.createTextNode(pTagText)
    pTag.appendChild(pText)

    previousID !== id ?  faqList[id].appendChild(pTag) : null;
    faqList[previousID]?.removeChild(faqList[previousID].children[1]);

    previousID !== id ? faqList[id].children[1].animate([
        {transform: 'translateY(-50px)', opacity: '0%',},
        {transform: 'translateY(0px)', opacity: '100%',}
    ], {
        duration: 450,
        iterations: 1,
    }) : null;
}

const faqList = Array.from(document.querySelectorAll('.faq-list')[0].children);

for(let i=0;i<faqList.length;i++) {
    faqList[i].children[0].children[1].addEventListener("click", () => changeFAQ(i));
}