/* Class declarations */

class UserData {
    private isHost: boolean;
    private name: string;
    constructor(isHost: boolean, name: string) {
        this.isHost = isHost;
        this.name = name;
    }

    save() {
        console.log('saving: ' + this.isHost + ", " + name);
        localStorage.setItem("isHost", this.isHost.toString());
        localStorage.setItem("name", this.name);
    }

    setIsHost(_isHost: boolean) {
        this.isHost = _isHost;
    }

    setName(_name: string) {
        this.name = _name;
    }
}


/* Element declarations */
var hostName = document.getElementById("hostName");
var userName = document.getElementById("userName");


/* Global variables */
const redirectLink = 'suggestion.html';
var userData = new UserData(false, "");




function saveUserData(isHost) {
    userData.setIsHost(isHost);
    if(isHost) {
        userData.setName(hostName.value);
    }
    //BUG: Not saving name when not the host
    else {
        console.log("HERE");
        userData.setName(userName.value);
    }
    userData.save();
}

function startMeeting() {
    saveUserData(true);
    window.location.href = redirectLink;
}

function joinMeeting() {
    saveUserData(false);
    window.location.href = redirectLink;
}