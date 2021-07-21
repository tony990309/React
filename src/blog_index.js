import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import articleAdderApp from '../blog/reducers'
import App from "../blog/App.js";

let store = createStore(articleAdderApp);
console.log(store);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById("app")
);