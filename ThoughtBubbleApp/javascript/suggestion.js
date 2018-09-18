/* Global Variables */
var bubbles = [];

/* Element declarations */
var suggestionBox = document.getElementById("suggestionBox");
var bubbleContainer = document.getElementById("bubbleContainer");

/* ID declarations */
const bubbleIDStub = 'bubble';

/* Class declarations */
const bubbleClasses = ['hovicon', 'effect-8'];


/* Functions */
function onSubmit() {
    var thought = suggestionBox.value;

    //don't do anything if there's no thought in the input...
    if(thought) {
        console.log("submission: " + thought);
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

    //id the bubble as currentNumberOfBubbles
    var bubbleCount = bubbleContainer.childElementCount;
    bubble.id = bubbleIDStub + (bubbleCount + 1);
    bubble.innerText = bubbleCount + 1;

    bubbleWrapper.appendChild(bubble);
    bubbleContainer.appendChild(bubbleWrapper);
}

//      <div class="p-2">
//          <i class="hovicon effect-8">b1</i>
//      </div>