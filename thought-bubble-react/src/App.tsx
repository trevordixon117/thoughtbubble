import * as React from 'react';

class App extends React.Component {
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
                                        <label>Hour select:</label>
                                        <select className="form-control" id="exampleSelect1">
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="exampleSelect1">Minute select:</label>
                                        <select className="form-control" id="exampleSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>

                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" id="hostStart"
                                        className="btn btn-primary">Start Meeting
                                </button>
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
                                <button type="button" className="btn btn-primary btn-info">Join
                                    Room
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
