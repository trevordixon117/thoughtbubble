import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/entrypoint.css';
import "./stylesheets/decision.css";
import './stylesheets/suggestion.css';
import './stylesheets/bubble.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
