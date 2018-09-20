import * as React from 'react';

class EntryPoint extends React.Component {
    public onHostRoom() {
        console.log('click on host room');
    }

    public onJoinRoom() {
        console.log('clicked on join room');
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
                                        <input type="text" className="form-control" id="hostName" name="name"
                                               placeholder="Name" required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Title/ID:</label>
                                        <input type="text" className="form-control" id="email" name="title"
                                               placeholder="Title/ID" required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Question:</label>
                                        <input type="text" className="form-control" id="mobile" name="question"
                                               placeholder="Question" required={true}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Hours:</label>
                                        <input type="number" name="hours" min="0" max="24"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Minutes:</label>
                                        <input type="number" name="minutes" min="0" max="59"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" id="hostStart" className="btn btn-primary">Start Meeting</button>
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
                                        <label>Title/ID:</label>
                                        <input type="text" className="form-control" id="title" name="title"
                                               placeholder="Title" required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input type="text" className="form-control" id="password" name="password"
                                               placeholder="Password" required={true}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input type="text" className="form-control" id="userName" name="name"
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