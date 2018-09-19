/* Class declarations */
var UserData = /** @class */ (function () {
    function UserData(isHost, name) {
        this.isHost = isHost;
        this.name = name;
    }
    UserData.prototype.save = function () {
        console.log('saving: ' + this.isHost + ", " + name);
        localStorage.setItem("isHost", this.isHost.toString());
        localStorage.setItem("name", this.name);
    };
    UserData.prototype.setIsHost = function (_isHost) {
        this.isHost = _isHost;
    };
    UserData.prototype.setName = function (_name) {
        this.name = _name;
    };
    return UserData;
}());
/* Element declarations */
var hostName = document.getElementById("hostName");
var userName = document.getElementById("userName");
/* Global variables */
var redirectLink = 'suggestion.html';
var userData = new UserData(false, "");
function saveUserData(isHost) {
    userData.setIsHost(isHost);
    if (isHost) {
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
