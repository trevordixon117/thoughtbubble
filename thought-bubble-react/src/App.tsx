import * as React from 'react';
import {
    HashRouter,
    NavLink,
    Route
} from 'react-router-dom';

import Suggestion from './suggestion';
import EntryPoint from './entrypoint';

class App extends React.Component {

    public render() {
        return (
            <HashRouter>
                <div>
                    <NavLink to="/entrypoint">Entry Point</NavLink>
                    <NavLink to="/suggestion"> Suggestion</NavLink>

                    <div className="content">
                        <Route path="/entrypoint" component={EntryPoint}/>
                        <Route path="/suggestion" component={Suggestion}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
