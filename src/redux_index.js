import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import calculatorApp from '../redux/reducers.js';
import App from "../redux/App.js";

let store = createStore(calculatorApp);
console.log(store);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById("app")
);