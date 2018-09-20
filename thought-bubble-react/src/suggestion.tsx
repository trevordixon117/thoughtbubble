import * as React from 'react';

class Suggestion extends React.Component {
    public onSubmit() {
        console.log('submit');
    }

    public render() {
        return (
            // <!-- Thought bubbles can scale if we add "transform: scale(0.5)" -->
            <div className="container">

                {/*Total timer*/}
                <div id="top-right-title">Meeting Time</div>
                <div id="top-right-timer"/>

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
                            <div id="active-timer"/>
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