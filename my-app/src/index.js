import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { HashRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';


import './index.css';
import App from './App';
import reducer from './reducers';
import About from './About';
import Track from './Track.js';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/tracks/:id" component={Track} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
