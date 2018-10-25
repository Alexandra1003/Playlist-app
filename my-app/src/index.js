import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = [
    'Smells like spirit',
    'Enter Sandman'
];

function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playlist, devToolsEnhancer());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
