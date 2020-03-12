let choiceList = ['p1'];
let currentPage = null;

///////////////////////////////////////////////////
//////// TODOs ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Fill in the blanks below to complete each TODO task.                       //
////////////////////////////////////////////////////////////////////////////////

// TODO: Create a function called `getCurrentPage()`. It should accept one
// parameter, which is the `slug` for the current page. This function will fetch
// the current page and return a page object using the `slug` value for a key.

function getCurrentPage(slug) {
    let newPage = storyData[slug];
    return newPage;
}

// TODO: Create a function called `recordChoice()` that will accept a `slug`
// parameter and add it to the `choiceList` Array (probably using `push()`).

function recordChoice(slug) {
    choiceList.push(slug);
    console.log(choiceList);

}

// TODO: Create a function called `undoChoice()` that will remove the last
// `slug` in the `choiceList` Array and then will return the last `slug` in the
// `choiceList` Array.

function undoChoice() {
    choiceList.pop();
    let slug = choiceList[choiceList.length - 1];
    return slug;

}

// TODO: Create two variables: pageContent and choicesUL. Use a DOM selector
// method (such as querySelector or getElementByID) to set the variable 
// pageContent to the <p> element with the ID of 'story-text' and set the
// variable choicesUL to the <ul> element with the ID 'choices'.

let pageContent = document.getElementById('story-text');
let choicesUL = document.querySelector('#choices');




// TODO: Create a function called `updatePage()` that accepts a `page` parameter
// and handles displaying the page in three steps:
//  1. It should set the text of the pageContent equal to page.text (the text of
//     the page).
//  2. For each item in the array page.choices, it should create a new <li>
//     element with the text of page.choices[i].text. In addition, the <li>
//     element should have an attribute called 'data-slug' set to
//     page.choices[i].link.
//  3. At the end of the function, call the function addEventListeners().

function updatePage(newPage) {
    pageContent.innerHTML = newPage.text;
    choicesUL.innerHTML = '';
    for (let choice of newPage.choices) {
        let newLI = document.createElement('li');
        newLI.innerHTML = choice.text;
        newLI.setAttribute('data-slug', choice.link);
        choicesUL.appendChild(newLI);
        //updatePage(currentPage);
    }
    addEventListeners();
}

// TODO: Create a function called `changePage()` that accepts a parameter called
// `slug` and which handles "turning the page" in three steps:
//  1. It should call the `recordChoice()` function (and give it the `slug` as
//     a parameter.
//  2. It should set the `currentPage` value by calling the `getCurrentPage()`
//     function (and give it the `slug` as a parameter).
//  3. It should invoke the `updatePage()` function (and give it the
//     `currentPage` object as a parameter).

function changePage(slug) {
    recordChoice(slug);
    let currentPage = getCurrentPage(slug);
    updatePage(currentPage);
}

///////////////////////////////////////////////////
//////// Story Data //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Only edit this data to change/enhance the story. Be sure to watch for how  //
// changes to the story data might affect the mechanisms that output the      //
// story.                                                                     //
////////////////////////////////////////////////////////////////////////////////
// NOTE: The data below is organized as a JS Object. The content for each     //
// page is stored using a "slug" -- a short alphanumeric identifier (for      //
// example, "p1", "p2", "homeEnd", etc.). Each page contains a `text`         //
// property and a `choices` property. The `choices` property is an Array that //
// contains all of the choices, including the slug that each choice should    //
// link to.                                                                   //
////////////////////////////////////////////////////////////////////////////////

var storyData = {
    title: `Where to go in Central NY`,
    p1: {
        text: `What's one song that describes your mood today?`,
        choices: [{
            text: `ME! by Taylor Swift.`,
            link: 'p2'
        }, {
            text: `Hardwired by Metallica.`,
            link: 'p3'
        }]
    },
    gildedClub: {
        text: `Drinks at the Gilded Club. <br><br> If you want to wear a fedora or flapper dress you'll feel at home.`,

        choices: [{
            text: `Reserve a seat at the bar at 9 p.m.`,
            link: 'reservePlan'
        }]
    },
    p2: {
        text: `What kind of pet do you want?`,
        choices: [{
            text: `I want a bearded dragon... or maybe a snake`,
            link: 'p3'
        }, {
            text: `I'm a dog person`,
            link: 'p6'
        }]
    },
    p3: {
        text: `What was ET's favorite candy?`,
        choices: [{
            text: `Reese Pieces`,
            link: 'gildedClub'
        }, {
            text: `M&Ms`,
            link: 'p4'
        }]
    },
    suBasketball: {
        text: `Get ready to cheer on the Orange in the Dome!`,
        choices: [{
            text: `Reserve your tickets`,
            link: 'reservePlan'
        }]
    },
    p4: {
        text: `<i>Sorry, ET enjoyed eating Reeses Pieces</i><br><br>
        Pick a Saturday morning breakfast.`,
        choices: [{
            text: `Eggs and bacon`,
            link: 'p5'
        }, {
            text: `Smoothie`,
            link: `p7`
        }]
    },
    p5: {
        text: `It's your friend's housewarming. Gift or no gift?`,
        choices: [{
            text: `Plant`,
            link: 'p6'
        }, {
            text: `Whiskey`,
            link: 'p8'
        }]
    },
    donutsHike: {
        text: `Enjoy a couple Cereal Killer donuts and coffee before you take a hike at Green Lakes State Park.`, 
                
        choices: [{
            text: `Reserve your donuts`,
            link: 'reservePlan'
        }]
    },
    p6: {
        text: `What search engine do you use?`,
        choices: [{
            text: `Google`,
            link: 'donutsHike'
        }, {
            text: `Bing`,
            link: 'p7'
        }]
    },
    p8: {
        text: `When you turn on your TV, what do you see?`,
        choices: [{
            text: `Apple TV home screen.`,
            link: `suBasketball`,
        }, {
            text: `cable.`,
            link: 'p7'
        }]
    },
    p7: {
        text: `How much water do you drink each day?`,
        choices: [{
            text: `I don't know. I don't count.`,
            link: `turningStone`,
        }, {
            text: `Definitely on my way to a gallon. But I'll check my app`,
            link: 'gildedClub'
        }]
    },

    turningStone: {
        text: `Let someone else wait on you- Enjoy a nice steak, a round of golf, or gmae of black jack at the Turning Stone casino`, 
                
        choices: [{
            text: `Reserve your table for dinner`,
            link: 'reservePlan'
        }]
    },
    reservePlan: {
        text: `Great! See you there`,
        choices: [{
            text: `Looking for different plans?`,
            link: 'p1'
        }]
    }
};

///////////////////////////////////////////////////
//////// Main Script /////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// This script runs the game. You should only edit it if you are attempting a //
// stretch goal. Otherwise, this script calls the functions that you have     //
// created above.                                                             //
////////////////////////////////////////////////////////////////////////////////

let title = document.querySelector('#story-title');
title.innerHTML = storyData.title;


function addEventListeners() {
    let choices = document.querySelectorAll('#choices li');
    for (choice of choices) {
        choice.addEventListener('click', function (e) {
            console.log(`Moving to page: ${e.target.dataset.slug}`);
            changePage(e.target.dataset.slug);
        })
    }
}

let undo = document.querySelector('#undo');
undo.addEventListener('click', function (e) {
    console.log('Undoing last choice.');
    let slug = undoChoice();
    currentPage = getCurrentPage(slug);
    updatePage(currentPage);
})

currentPage = storyData.p1;
updatePage(currentPage);