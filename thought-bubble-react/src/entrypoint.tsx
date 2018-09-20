import * as React from 'react';

interface IAttributes {
    hostName: string | undefined,
    hours: string | undefined,
    isHost: boolean | undefined,
    minutes: string | undefined,
    password: string | undefined,
    question: string | undefined,
    userName: string | undefined,
    userPassword: string | undefined
}

class EntryPoint extends React.Component<{}, IAttributes> {
    constructor(props: any) {
        super(props);
        this.state = {
            hostName: undefined,
            hours: undefined,
            isHost: undefined,
            minutes: undefined,
            password: undefined,
            question: undefined,
            userName: undefined,
            userPassword: undefined
        };
    }

    public onHostRoom = () => {
        this.setState({isHost: true});
        console.log("isHost = " + this.state.isHost);
    }

    public onJoinRoom = () => {
        this.setState({isHost: false});
        console.log("isHost = " + this.state.isHost);
    }

    public hostSubmission = () => {
        if (this.state.isHost) {
            console.log("hostName: " +this.state.hostName);

        }
    }

    public updateHostValue = (evt: any) => {
        this.setState({hostName: evt.target.value});
    }

    public updateQuestionValue = (evt: any) => {
        this.setState({question: evt.target.value});
    }

    public updateHoursValue = (evt: any) => {
        this.setState({hours: evt.target.value});
    }

    public updateMinutesValue = (evt: any) => {
        this.setState({minutes: evt.target.value});
    }

    public updateUserPasswordValue = (evt: any) => {
        this.setState({userPassword: evt.target.value});
    }

    public updateUserNameValue = (evt: any) => {
        this.setState({userName: evt.target.value});
    }

    public updatePasswordValue = (evt: any) => {
        this.setState({password: evt.target.value});
    }


    public render() {
        return (
            <div>
                <button onClick={this.onHostRoom} className="button" id="hostButton" data-toggle="modal" data-target="#exampleModalLong"
                        data-whatever="@host">Host a Room
                </button>
                <button onClick={this.onJoinRoom} className="button" id="userButton" data-toggle="modal" data-target="#exampleModal"
                        data-whatever="@user">Join a Room
                </button>

                <div className="modal fade" id="exampleModalLong" role="dialog"
                     aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Thought Bubble Maker</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <br style={{clear: "both"}}/>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input value={this.state.hostName} onChange={this.updateHostValue} type="text" className="form-control" id="hostName" name="name"
                                               placeholder="Name" required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Question:</label>
                                        <input value={this.state.question} onChange={this.updateQuestionValue} type="text" className="form-control" id="question" name="question"
                                               placeholder="Question" required={true}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input value={this.state.password} onChange={this.updatePasswordValue}type="number" name="minutes" min="0" max="59"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Hours:</label>
                                        <input value={this.state.hours} onChange={this.updateHoursValue} type="number" name="hours" min="0" max="24"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Minutes:</label>
                                        <input value={this.state.minutes} onChange={this.updateMinutesValue}type="number" name="minutes" min="0" max="59"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" onClick={this.hostSubmission} id="hostStart" className="btn btn-primary">Start Meeting</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Join A Room</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Question:</label>
                                        <input value={this.state.question} onChange={this.updateQuestionValue} type="text" className="form-control" id="question" name="question"
                                               placeholder="Question" required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input value={this.state.userPassword} onChange={this.updateUserPasswordValue} type="text" className="form-control" id="password" name="password"
                                               placeholder="Password" required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input value={this.state.userName} onChange={this.updateUserNameValue} type="text" className="form-control" id="userName" name="name"
                                               placeholder="Name" required={true}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary btn-info">Join Room</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EntryPoint;