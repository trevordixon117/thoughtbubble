import * as React from 'react';

class Decision extends React.Component {
    public render() {
        return (
            <body>
                <div className="jumbotron" id="solutionBox">
                    <h1 className="display-4">This is the solution title</h1>
                    <p className="lead">This is the description for the solution. It will probably be pretty long, like this one is. It may go into extra, unnecessary detail. I think this is long enough.</p>
                </div>
            </body>
        );
    }
}

export default Decision;