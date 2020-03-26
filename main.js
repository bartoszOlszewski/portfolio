const slideList = [{
    img: "img/picture1.jpg",
    text: "Pierwszy tytuł"
},
{   
img: "img/picture2.jpg",
text: "Drugi tytuł"
},
{
    img: "img/picture3.jpg",
    text: "Trzeci tytuł"
}];

const image = document.querySelector('img.header__img');
const title = document.querySelector('h2.header__title');
const dots = [...document.querySelectorAll('span.dots__dot')];

const areas = [...document.querySelectorAll('.btn')];

// INTERFACE

const slideTime = 4000;
let active = 0;

// IMPLEMENTATION

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if(active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    title.textContent = slideList[active].text;
    changeDot();
}

let indexInterval = setInterval(changeSlide, slideTime);

const keyChangeSlide = (e) => {
if(e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if(active === slideList.length) {
        active = 0;
    } else if (active < 0) {
        active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    title.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, slideTime);
}
}

function areaSelect() {
    clearInterval(indexInterval);
        active = this.id;
        image.src = slideList[active].img;
        changeDot();
        indexInterval = setInterval(changeSlide, slideTime);
    }

areas.forEach(area => area.addEventListener('click', areaSelect));

window.addEventListener('keydown', keyChangeSlide);
