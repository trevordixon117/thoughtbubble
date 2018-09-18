/* Global Variables */
var bubbles = [];

/* Element declarations */
var suggestionBox = document.getElementById("suggestionBox");
var bubbleContainer = document.getElementById("bubbleContainer");
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
        console.log("submission: " + thought);
        var bubbleData = {
            text: thought,
            id: bubbleContainer.childElementCount + 1
        };
        bubbles.push(bubbleData);
        addBubbleToPage();

        console.log(bubbles);
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

    //id the bubble as currentNumberOfBubbles
    var bubbleCount = bubbleContainer.childElementCount;
    bubble.id = bubbleIDStub + (bubbleCount + 1);
    bubble.innerText = bubbleCount + 1;

    bubbleWrapper.appendChild(bubble);
    bubbleContainer.appendChild(bubbleWrapper);

    console.log("overlap: " + bubbleIsOverlapping());
}

function bubbleIsOverlapping() {
    var bubbleID = bubbleIDStub + bubbles[bubbles.length-1].id;

    var bubbleBounds = document.getElementById(bubbleID).getBoundingClientRect();
    var problemBounds = problemBox.getBoundingClientRect();

    return !(bubbleBounds.right < problemBounds.left ||
                    bubbleBounds.left > problemBounds.right ||
                    bubbleBounds.bottom < problemBounds.top ||
                    bubbleBounds.top > problemBounds.bottom);
}