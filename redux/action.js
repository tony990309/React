// action types 
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const DOUBLE = 'DOUBLE';
export const HALF = 'HALF';


// action creators
export function add(){
    console.log("onclick add()");
    return {
        type : PLUS,
        num :1
    }
};
export function sub(){
    return{
        type : MINUS,
        num : 1
    }
};
export function double(){
    return {
        type : DOUBLE,
        num : 2
    }
};
export function half(){
    return{
        type : HALF,
        num : 2
    }
};