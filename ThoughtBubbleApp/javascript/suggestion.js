/* Global Variables */
var bubbles = [];

/* Element declarations */
var suggestionBox = document.getElementById("suggestionBox");
var bubbleContainer1 = document.getElementById("bubbleContainer1");
var bubbleContainer2 = document.getElementById("bubbleContainer2");
var problemBox = document.getElementById("problemBox");

/* ID declarations */
const bubbleIDStub = 'bubble';

/* Class declarations */
const bubbleClasses = ['hovicon', 'effect-8'];


//submit thought when the user presses 'enter'
suggestionBox.addEventListener("keypress", function(e) {
    if(e.charCode === 13) {
        onSubmit();
    }
})

function onSubmit() {
    var thought = suggestionBox.value;

    //only add a new bubble if there's text in the input box...
    if(thought) {
        var bubbleData = {
            text: thought,
            id: bubbleContainer1.childElementCount + 1
        };
        bubbles.push(bubbleData);
        addBubbleToPage();
    }
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

    positionBubbleWithoutOverlap(bubbleWrapper);
}

//moves the bubble to container2 if it overlaps in container1
function positionBubbleWithoutOverlap(bubble) {
    if(bubbleIsOverlapping(bubble)) {
        console.log("overlap");
        bubbleContainer2.appendChild(bubble);
        bubbleContainer1.removeChild(bubble);
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