import * as React from 'react';
import Timer from './timer';
import BubbleComponent from './BubbleComponent';

import { IBubble } from './IBubble';

interface ISuggestion {
    meetingTimer: Timer,
    activeTimer: Timer,
    meetingTime: string,
    activeTime: string,
    intervalID: any,
    bubbles: IBubble[],
    thoughtDisplay: string,
    thoughtEntry: string
}

class Suggestion extends React.Component<{}, ISuggestion> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeTime: "",
            activeTimer: new Timer(0,5,0),
            bubbles:[],
            intervalID: 0,
            meetingTime: "",
            meetingTimer: new Timer(1,0,0),
            thoughtDisplay: "Click on a thought to view its contents...",
            thoughtEntry: ""
        };
    }

    public componentDidMount() {
        const intervalId = setInterval(this.updateTimers, 1000);
        this.setState({intervalID: intervalId});
    }

    public onSubmit = () => {
        const placeholderBubble = {
            description: this.state.thoughtEntry,
            id: this.state.bubbles.length,
            onClick: this.onBubbleSelect,
            submitter: "Test Joey",
            title: "Test Title"
        }
        const newBubblesArray = this.state.bubbles;
        newBubblesArray.push(placeholderBubble);

        this.setState({bubbles: newBubblesArray});
    }

    public updateEntry = (event : any) => {
        this.setState({thoughtEntry: event.target.value});
    }

    public onBubbleSelect = (id: number) => {
        console.log(id);
        this.setState({thoughtDisplay: this.state.bubbles[id].description});
    }

    public updateTimers = () => {
        this.setState({meetingTime: this.state.meetingTimer.tickDown()});
        this.setState({activeTime: this.state.activeTimer.tickDown()});
    }

    public render() {
        return (
            // <!-- Thought bubbles can scale if we add "transform: scale(0.5)" -->
            <div className="container">

                {/*Total timer*/}
                <div id="top-right-title">Meeting Time</div>
                <div id="top-right-timer">{this.state.meetingTimer.display()}</div>

                {/*// Thought Bubble Icon */}
                <div className="top-left-title">Thought Bubble</div>

                {/*// Thought Summary*/}
                <div className="top-middle-banner p-1"><i id="thoughtDisplay">{this.state.thoughtDisplay}</i></div>

                {/*// Problem */}
                <h1 id="problemBox" className="ProblemBox display-1"> This is an example problem. <br/> What is the solution? </h1>

                {/*// Bottom bar */}
                <div className="d-flex justify-content-start">

                    {/*// Thought input */}
                    <div className="input-group input-group-lg footer mb-3 flex-grow-1">
                        <input onChange={this.updateEntry} type="text" id="suggestionBox" className="form-control" placeholder="Enter your thought..." aria-label="Enter your thought" aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button id="suggestionSubmitBtn" className="btn btn-success" type="button" onClick={this.onSubmit}>Submit</button>
                            </div>
                        <div id="active-timer">{this.state.activeTimer.display()}</div>
                    </div>
                </div>

                {/*//  Thought bubbles -->*/}
                <div id="bubbleContainer1" className="d-flex flex-wrap justify-content-start bContainerOffset">
                    {this.state.bubbles.map(
                        bubble => <BubbleComponent key={bubble.id}
                                                   id={bubble.id}
                                                   title={bubble.title}
                                                   description = {bubble.description}
                                                   submitter = {bubble.submitter}
                                                   onClick = {this.onBubbleSelect}
                        />
                    )}
                </div>
                <div id="bubbleContainer2" className="d-flex flex-wrap justify-content-start bubble2"/>
            </div>
        );
    }
}

export default Suggestion;