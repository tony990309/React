import { combineReducers } from 'redux';
import { POST } from './action.js';

const initialData = {
    boards : [ "Gossiping", "NBA", "Music"],
    articles : [{board:"NBA",title:"test",content:"first article"}]
}

function articleAdder(state = initialData, action){
    switch(action.type){
        case POST:
            var newArticles = state.articles;
            newArticles.push(action.article);
            return Object.assign({},state,{
                articles: newArticles
            });
        default:
            return state;
    }
}

const articleAdderApp = combineReducers({
    articleAdder
});

export default articleAdderApp;