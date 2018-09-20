import * as React from 'react';
import Timer from './timer';
import BubbleComponent from './BubbleComponent';

import { IBubble } from './IBubble';

interface IAppState {
    meetingTimer: Timer,
    activeTimer: Timer,
    meetingTime: string,
    activeTime: string,
    intervalID: any,
    bubbles: IBubble[]
}

class Suggestion extends React.Component<{}, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeTime: "",
            activeTimer: new Timer(0,5,0),
            intervalID: 0,
            meetingTime: "",
            meetingTimer: new Timer(1,0,0),
            bubbles:[
                {id:0, title: "No Title", description: "No Description", submitter: "No Joey"},
            ]
        };
    }

    public componentDidMount() {
        const intervalId = setInterval(this.updateTimers, 1000);
        this.setState({intervalID: intervalId});
    }

    public onSubmit() {
        var placeholderBubble = {
            id: 1,
            title: "Test Title",
            description: "Test Description",
            submitter: "Test Joey"
        }
        var newBubblesArray = this.state.bubbles;
        newBubblesArray.push(placeholderBubble);

        this.setState({bubbles: newBubblesArray});
    }

    public updateTimers = () => {
        this.setState({meetingTime: this.state.meetingTimer.tickDown()});
        this.setState({activeTime: this.state.activeTimer.tickDown()});
    }

    public render() {
        return (
            // <!-- Thought bubbles can scale if we add "transform: scale(0.5)" -->
            <div className="container">

                {this.state.bubbles.map(
                    x => <BubbleComponent key={x.name}
                    name={x.name}
                    picture = {x.picture}
                    onDeleted = {this.onCarDelete}/>
                )}

                {/*Total timer*/}
                <div id="top-right-title">Meeting Time</div>
                <div id="top-right-timer">{this.state.meetingTimer.display()}</div>

                {/*// Thought Bubble Icon */}
                <div className="top-left-title">Thought Bubble</div>

                {/*// Thought Summary*/}
                <div className="top-middle-banner p-1"><i id="thoughtDisplay">Click on a thought to view its contents...</i></div>

                {/*// Problem */}
                <h1 id="problemBox" className="ProblemBox display-1"> This is an example problem. <br/> What is the solution? </h1>

                {/*// Bottom bar */}
                <div className="d-flex justify-content-start">

                    {/*// Thought input */}
                    <div className="input-group input-group-lg footer mb-3 flex-grow-1">
                        <input type="text" id="suggestionBox" className="form-control" placeholder="Enter your thought..." aria-label="Enter your thought" aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button id="suggestionSubmitBtn" className="btn btn-success" type="button" onClick={this.onSubmit}>Submit</button>
                            </div>
                        <div id="active-timer">{this.state.activeTimer.display()}</div>
                    </div>
                </div>

                {/*//  Thought bubbles -->*/}
                <div id="bubbleContainer1" className="d-flex flex-wrap justify-content-start bContainerOffset"/>
                <div id="bubbleContainer2" className="d-flex flex-wrap justify-content-start bubble2"/>
            </div>
        );
    }
}

export default Suggestion;