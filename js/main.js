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


let optionsList = ['p1'];
let currentPage = null;

function getCurrentPage(input) {
    let newPage = planData[input];
    return newPage;
}

function recordOptions(input) {
    optionsList.push(input);
    console.log(optionsList);
}


function undoOptions() {
    optionsList.pop();
    let input = optionsList[optionsList.length - 1];
    return input;
}
    let pageContent = document.getElementById('plans-text');
    let optionsUL = document.querySelector('#options');

    function updatePage(newPage) {
        pageContent.innerHTML = newPage.text;
        optionsUL.innerHTML = '';
        for (let options of newPage.options) {
            let newLI = document.createElement('li');
            newLI.innerHTML = options.text;
            newLI.setAttribute('data-input', options.link);
            optionsUL.appendChild(newLI);
            //updatePage(currentPage);
        }
        addEventListeners();
    }

    function changePage(input) {
        recordOptions(input);
        let currentPage = getCurrentPage(input);
        updatePage(currentPage);
    }

    var planData = {
        title: "Let's make some plans",
        p1: {
            text: `Do you enjoy the outdoors?`,

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
            text: `Don't worry, there's plenty to do inside. Do you like basketball`,

            options: [{
                text: `Yes!`,
                link: 'p4'
            }, {

                text: 'Anything but basketball',
                link: 'p5'
            }]

        },

        p3: {
            text: `Great decision! We have beautiful hiking trails. Enjoy a guided hike at Green Lakes Park.`,

            options: [{
                text: `Yes! I want to reserve my spot.`,
                link: 'reservation'
            }, {

                text: 'Anything but basketball',
                link: 'p5'
            }]

        },

        p4: {
            text: `Go cheer on the Orange at the SU Dome. <br><br> Do you want to reserve seats?`,
            options: [{
                text: `Yes!`,
                link: 'reservation'
            }, {

                text: `No thanks!`,
                link: 'p1'
            }]
        },


    };

    let title = document.querySelector('#plans-title');
    title.innerHTML = planData.title;


    function addEventListeners() {
        let options = document.querySelectorAll('#options li');
        for (option of options) {
            option.addEventListener('click', function (e) {
                console.log(`Moving to page: ${e.target.dataset.input}`);
                changePage(e.target.dataset.input);
            })
        }
    }

    let undo = document.querySelector('#undo');
    undo.addEventListener('click', function (e) {
        console.log('Undoing last choice.');
        let input = undoOptions();
        currentPage = getCurrentPage(input);
        updatePage(currentPage);
    })

    currentPage = planData.p1;
    updatePage(currentPage);