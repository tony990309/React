import React,{ PropTypes } from 'react';

function StateBoard({value, value2, onClickAdd, onClickSub, onClickDouble, onClickHalf}){
    return(
        <div>
            <h1>加減</h1>
            <h1>{value}</h1>
            <button onClick={() => onClickAdd()}>+1</button>
            <button onClick={() => onClickSub()}>-1</button>
            <hr />
            <h1>乘除</h1>
            <h1>{value2}</h1>
            <button onClick={() => onClickDouble()}>x2</button>
            <button onClick={() => onClickHalf()}>/2</button>
        </div>
    );
}

export default StateBoard;