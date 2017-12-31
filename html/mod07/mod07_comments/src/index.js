import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';

function devBuildOnly(args) {
    return args;
}

let store = createStore(
    reducer,
    devBuildOnly(window.devToolsExtension ? window.devToolsExtension() : f => f)
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
);
registerServiceWorker();
