import { combineReducers } from 'redux';
import { PLUS, MINUS, DOUBLE, HALF } from './action.js';

const initialData = {
    value : 1
}

function calculator(state = initialData, action){
    switch(action.type){
        case PLUS:
            console.log(state.value + " + " + action.num);
            return Object.assign({},state,{
                value : state.value + action.num
            });
        case MINUS:
            console.log(state.value + " - " + action.num);
            return Object.assign({},state,{
                value : state.value - action.num
            });
        default:
            return state;
    }
}

function calculator2(state = initialData, action){
    switch(action.type){
        case DOUBLE:
            console.log(state.value + " * " + action.num);
            return Object.assign({},state,{
                value : state.value * action.num
            });
        case HALF:
            console.log(state.value + " / " + action.num);
            const float = parseFloat(state.value);
            return Object.assign({},state,{
                value : float / action.num
            });
        default:
            return state;
    }
}

const calculatorApp = combineReducers({
    calculator,
    calculator2
});

export default calculatorApp;