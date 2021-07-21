import { combineReducers } from 'redux';
import { POST } from './action.js';

const initialData = {
    boards : [ "Gossiping", "NBA", "Music"],
    articles : []
}

function articleAdder(state = initialData, action){
    switch(action.type){
        case POST:
            console.log("post");
            return Object.assign({},state,{
                articles : [state.articles, action.article]
            });
        default:
            return state;
    }
}

const articleAdderApp = combineReducers({
    articleAdder
});

export default articleAdderApp;