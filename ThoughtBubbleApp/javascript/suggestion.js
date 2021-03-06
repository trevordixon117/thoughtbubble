window.onload = init;

/* Global Variables */
var bubbles = [];

/* Element declarations */
var suggestionBox = document.getElementById("suggestionBox");
var bubbleContainer1 = document.getElementById("bubbleContainer1");
var bubbleContainer2 = document.getElementById("bubbleContainer2");
var problemBox = document.getElementById("problemBox");
var thoughtDisplay = document.getElementById("thoughtDisplay");

/* ID declarations */
const bubbleIDStub = 'bubble';

/* Class declarations */
const bubbleClasses = ['hovicon', 'effect-8'];


//set up user data
function init() {
    var isHost = localStorage.getItem("isHost");
    var name = localStorage.getItem("name");
    console.log("is host: " + isHost);
    console.log("name: " + name);
}


//submit thought when the user presses 'enter'
suggestionBox.addEventListener("keypress", function(e) {
    if(e.charCode === 13) {
        onSubmit();
    }
});

//display the thought   ***ADD EVENT LISTENER***
function displayThought(bubbleID) {
    //grab the index from the end of the id (e.g. if the id is 'bubble15', we just want to get the substring beyond 'bubble')
    //subtract 1 because ID's are 1-infinity, but their indexes are 0-infinity
    var index = bubbleID.substring(bubbleIDStub.length) - 1;

    thoughtDisplay.innerText = bubbles[index].text;
}

function onSubmit() {
    console.log('hi');
    var thought = suggestionBox.value;

    //only add a new bubble if there's text in the input box and the same thought hasn't already been submitted...
    if(thought && thoughtIsUnique(thought)) {
        var bubbleData = {
            text: thought,
            id: bubbleContainer1.childElementCount + 1
        };
        bubbles.push(bubbleData);
        addBubbleToPage();

        //clear the submission box
        suggestionBox.value = "";


        /*To Do: Send data to server






         */
    }
}

//looks through all submitted bubbles and returns true if none of them have the same text as thought.text
function thoughtIsUnique(thought) {
    var isUnique = true;

    bubbles.forEach(item => {
        if(item.text === thought) {
            isUnique = false;
            console.log('found duplicate');
        }
    });

    return isUnique;
}

function addBubbleToPage() {
    //create elements
    var bubbleWrapper = document.createElement("div");
    var bubble = document.createElement("i");

    //add classes
    bubbleWrapper.classList.add("p-2");
    bubbleClasses.forEach(function(item) {
        bubble.classList.add(item);
    });

    //id the bubble as currentNumberOfBubbles + 1
    var bubbleCount = bubbleContainer1.childElementCount + bubbleContainer2.childElementCount;
    bubble.id = bubbleIDStub + (bubbleCount + 1);
    bubble.innerText = bubbleCount + 1;

    bubbleWrapper.appendChild(bubble);
    bubbleContainer1.appendChild(bubbleWrapper);

    bubble.addEventListener("click", function(e) {
        displayThought(bubble.id);
    });

    positionBubbleWithoutOverlap(bubbleWrapper);
}

//moves the bubble to container2 if it overlaps in container1
function positionBubbleWithoutOverlap(bubble) {
    if(bubbleIsOverlapping(bubble)) {
        console.log("overlap");
        bubbleContainer1.removeChild(bubble);
        bubbleContainer2.appendChild(bubble);
    }
}

function bubbleIsOverlapping(bubble) {
    //store the bounds of each element
    var bubbleBounds = bubble.getBoundingClientRect();
    var problemBounds = problemBox.getBoundingClientRect();

    //return true if there's overlap, false if there's not
    return !(bubbleBounds.right < problemBounds.left ||
             bubbleBounds.left > problemBounds.right ||
             bubbleBounds.bottom < problemBounds.top ||
             bubbleBounds.top > problemBounds.bottom);
}