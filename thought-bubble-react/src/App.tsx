import * as React from 'react';
// @ts-ignore
// @ts-ignore
import {
    HashRouter,
    NavLink,
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
    }

    public updateCurrentPage = (page: string) => {
        this.setState({currentPage: <div/>});
    }

    public render() {

        return (
            <HashRouter>
                <NavLink to={"/"}>EntryPoint</NavLink>
                <NavLink to={"/suggestion"}>Suggestion</NavLink>
                <NavLink to={"/decision"}>Decision</NavLink>
                
                <div className="content">
                    <Route path="/" component={EntryPoint}/>
                    <Route path="/suggestion" component={Suggestion}/>
                    <Route path="/decision" component={Decision}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
