import * as React from 'react';
// @ts-ignore
// @ts-ignore
import {
    HashRouter,
    Redirect,
    Route
} from 'react-router-dom';

import Suggestion from './suggestion';
import EntryPoint from './entrypoint';
import Decision from './decision';

interface IAppState {
    currentPage: JSX.Element,
    targetPage: JSX.Element
}

class App extends React.Component<{}, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: <div/>,
            targetPage: <div/>
        }
    }

    public loadPage = (pageName: string) => {
        console.log('load ' + pageName);
        if(pageName === 'entrypoint') {
            console.log('loading entrypoint');
            this.setState({currentPage: <HashRouter><Redirect to='/' /></HashRouter>});
            this.setState({targetPage: <HashRouter><Redirect to='/' /></HashRouter>});
        }
        else if(pageName === 'suggestion') {
            console.log('r2');
            this.setState({currentPage: <HashRouter><Redirect to='/suggestion' /></HashRouter>});
            this.setState( {targetPage: <HashRouter><Redirect to='/suggestion' /></HashRouter>});
        }
        else if(pageName === 'decision') {
            console.log('r3');
            this.setState({currentPage: <HashRouter><Redirect to='/decision' /></HashRouter>});
            this.setState({targetPage: <HashRouter><Redirect to='/decision' /></HashRouter>});
        }
    }

    public updateCurrentPage = (page: string) => {
        this.setState({currentPage: <div/>});
    }

    public render() {
        if(this.state.targetPage.toString() === this.state.currentPage.toString()) {
            console.log('r1');
            // do nothing--we're already at the right page
        }
        else {
            console.log('loading '+this.state.currentPage.toString());
            return this.state.currentPage;
        }

        return (
            <HashRouter>
                <div>

                    <div className="content">
                        <Route
                               path="/"
                               render={(props) => <EntryPoint {...props} onSetTarget={this.loadPage} />}
                               />
                        <Route path="/suggestion" component={Suggestion}/>
                        <Route path="/decision" component={Decision}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
