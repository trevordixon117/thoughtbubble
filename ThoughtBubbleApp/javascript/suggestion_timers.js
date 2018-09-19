/* Timer Declarations */
function Timer(hours, minutes, seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
}

Timer.prototype.setElement = function(htmlElement){
    this.element = htmlElement;
}

Timer.prototype.display = function(){
    var padHours = this.hours.toString().padStart(2,"0");
    var padMinutes = this.minutes.toString().padStart(2,"0");
    var padSeconds = this.seconds.toString().padStart(2,"0");
    this.element.innerText = padHours + ":" + padMinutes + ":" + padSeconds;
}

Timer.prototype.tickDown = function(){
    this.seconds--;
    if(this.seconds < 0){
        this.seconds = 59;
        this.minutes--;
        if(this.minutes < 0){
            this.minutes = 59
            this.hours--;
            if(this.hours < 0){
                this.seconds = 0;
                this.minutes = 0;
                this.hours = 0;
            }
        }
    }

    this.display()
}

/*Set up Timers*/
var meetingTimer = new Timer(1,0,0);
meetingTimer.setElement(document.getElementById("top-right-timer"));
meetingTimer.display();
var activeTimer = new Timer(0,30,0);
activeTimer.setElement(document.getElementById("active-timer"));
activeTimer.display();

var intervalAction = setInterval(updateTimers, 1000);
function updateTimers() {
    meetingTimer.tickDown();
    activeTimer.tickDown();
}