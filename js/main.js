
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
    let slug = choiceList[choiceList.length-1];
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
            link: 'homeEnd'
        }]
    },
    homeEnd: {
        text: `Drinks at the Gilded Club!
                <br><br>.`,
                
        choices: [{
            text: `Reserve a seat at the bar at 9 p.m.`,
            link: 'p1'
        }]
    },
    p2: {
        text: `What kind of pet do you want?`,
        choices: [{
            text: `Of course I want a bearded dragon... or maybe a snake`,
            link: 'p3'
        }, {
            text: `I'm a dog person`,
            link: 'homeEnd'
        }]
    },
    p3: {
        text: `What would you not eat?`,
        choices: [{
            text: `Reptiles. I would never eat a snake`,
            link: 'basketEnd'
        }, {
            text: `Chocolate lava cake. No way.`,
            link: 'p4'
        }]
    },
    basketEnd: {
        text: `You fly directly into a picnic basket, which slams shut behind you.
                You are stuck until some kind human comes to open the basket.
                But at least the cat didn't eat you!
                <br><br>
                The End`,
        choices: [{
            text: `Start over?`,
            link: 'p1'
        }]
    },
    p4: {
        text: `You zoom towards the cat, who is surprised by the direct approach
                and leaps off the table. You pull up sharply and make it over the
                big oak tree to a safe cruising altitude. The sun is shining,
                the wind is beneath your wings, and you have a beak full of
                cheese.`,
        choices: [{
            text: `Find somewhere nice to eat your cheese.`,
            link: 'p5'
        }]
    },
    p5: {
        text: `You find a secluded fence post in the middle of a large field
                full of wildflowers. You decide this will be a wonderful place
                to have a snack.
                <br><br>
                Just as you settle down you see Mr. Fox strolling down the path
                towards your fence post.`,
        choices: [{
            text: `Say, "Hello Mr. Fox! Join me for cheese."`,
            link: 'shareCheese'
        }, {
            text: `Keep a wary eye on Mr. Fox.`,
            link: 'p6'
        }]
    },
    shareCheese: {
        text: `You hop down to the ground and Mr. Fox helps you break the cheese
                in half. He is very grateful to you for sharing your cheese, and
                he gives you a lovely ribbon for your nest.
                <br><br>
                The End`,
        choices: [{
            text: `Start over?`,
            link: 'p1'
        }]
    },
    p6: {
        text: `Mr. Fox approaches and says, "Hello crow! It's been so
                long since we've seen each other. I've missed hearing your
                lovely singing voice. Won't you sing me a tune before I go?`,
        choices: [{
            text: `Sing a song for Mr. Fox.`,
            link: 'dropCheeseEnd'
        }, {
            text: `Remain silent.`,
            link: 'p7'
        }]
    },
    dropCheeseEnd: {
        text: `You open your beak to sing a lovely song, and your cheese comes
                tumbling out. Mr. Fox quickly snaps the cheese out of the air
                as it falls and gobbles it up!
                <br><br>
                The End`,
        choices: [{
            text: `Start over?`,
            link: 'p1'
        }]
    },
    p7: {
        text: `You remain silent through all of Mr. Fox's flattery. In the end,
                he knows you won't fall for his tricks, and he leaves you alone.
                <br><br>
                Finally able to relax in quiet, you enjoy your well-earned
                cheese.
                <br><br>
                The End`,
        choices: [{
            text: `Play again?`,
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