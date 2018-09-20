import * as React from 'react';
import {
    HashRouter,
    Redirect,
    Route
} from 'react-router-dom';

import Suggestion from './suggestion';
// import EntryPoint from './entrypoint';
import Decision from './decision';

interface IAppState {
    currentPage: string | null,
    targetPage: string | null
}

class App extends React.Component<{}, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: null,
            targetPage: null
        }
    }

    public loadPage = (pageName: string) => {
        console.log('load ' + pageName);
        this.setState({targetPage: pageName});
    }

    public updateCurrentPage = (page: string) => {
        this.setState({currentPage: page});
    }

    public render() {
        if(this.state.targetPage === this.state.currentPage) {
            console.log('r1');
            // do nothing--we're already at the right page
        }
        else if(this.state.targetPage === 'entrypoint') {
            console.log('loading entrypoint');
            return <HashRouter><Redirect to='/' /></HashRouter>;
        }
        else if(this.state.targetPage === 'suggestion') {
            console.log('r2');
            return <HashRouter><Redirect to='/suggestion' /></HashRouter>;
        }
        else if(this.state.targetPage === 'decision') {
            console.log('r3');
            return <HashRouter><Redirect to='/decision' /></HashRouter>;
        }
        else {
            console.log('targetPage: ' + this.state.targetPage);
            console.log('currentPage: ' + this.state.currentPage);
        }

        return (
            <HashRouter>
                <div>

                    <div className="content">
                        {/*<Route*/}
                               {/*path="/"*/}
                               {/*render={(props) => <EntryPoint {...props} onSetTarget={this.loadPage} />}*/}
                               {/*/>*/}
                        <Route path="/" component={Suggestion}/>
                        <Route path="/decision" component={Decision}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
