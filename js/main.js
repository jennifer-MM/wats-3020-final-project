const carouselSlide = document.querySelector(`.carousel-slide`);
const carouselImages = document.querySelectorAll(`.carousel-slide img`);

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


///beginning the option JS


let optionList = [];
let currentPage = null;

var makePlans = {
    title: "Let's make some plans",
    p1: {
        text: `Do you want to enjoy the outdoors?`,

        options: [{
                text: `No, its way too cold outside, lets stay inside.`,
                link: 'p2'
            }, {

                text: `Yes! I want to enjoy the fresh air!`,
                link: 'p3'
            }

        ]
    },
    p2: {
        text: `There's plenty to do inside. Do you want to go somewhere quiet?`,

        options: [{
            text: ``
        }]
    }
}