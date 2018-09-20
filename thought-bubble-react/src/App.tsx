import * as React from 'react';
import {
    HashRouter,
    NavLink,
    Route
} from 'react-router-dom';

import Suggestion from './suggestion';
import EntryPoint from './entrypoint';
import Decision from './decision';

class App extends React.Component {

    public render() {
        return (
            <HashRouter>
                <div>
                    <NavLink to="/">Entry Point</NavLink>
                    <NavLink to="/suggestion">Suggestion</NavLink>
                    <NavLink to="/decision">Decision</NavLink>

                    <div className="content">
                        <Route exact={true} path="/" component={EntryPoint}/>
                        <Route path="/suggestion" component={Suggestion}/>
                        <Route path="/decision" component={Decision}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
