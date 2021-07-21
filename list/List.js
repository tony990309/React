import React from 'react';

class List extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
           <li>
              {number}
           </li>
        );
        return (
           <ul>{listItems}</ul>
        );
     }  
}

class SingleLine extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        return (
           <ul>{
              numbers.map((number) => <li> {number} </li>)
           }</ul>
        );
     }
  
}

class Keys extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItem = numbers.map((number)=>
           <ListNumber key = { number.toString() } value = { number } />
           );
        return (
           <ul>{listItem}</ul>
        );
     }  
}

class ListNumber extends React.Component{
    constructor(){
       super();
    }
    render(){
       return (
          <li>{this.props.value}</li>
       );      
    }
} 

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>List</h1>
                <List />
                <hr />
                <h1>Single Line</h1>
                <SingleLine />
                <hr />
                <h1>Keys</h1>
                <Keys />
            </div>
        );
    }
}

export default App;