import React from 'react';

class AutoFocus extends React.Component {

   componentDidMount() {
      const input = document.getElementById("input");
        this.textInput.focus();
   }

   render() {
      return (
         <div>
         <input
            type="text"
            ref={(parm) => { this.textInput = parm; }}
            id="input"
         />
         </div>
      );
   }
}

class OnClick extends React.Component {
    constructor(props) {
       super(props);
       this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
         this.textInput.focus();
    }
 
    render() {
       return (
          <div>
          <input
             type="text"
             ref={(input) => { this.textInput = input; }} 
          />
          <input
             type="button"
             value="Focus the text input"
             onClick={this.focusTextInput}
          />
          </div>
       );
    }
 }

class App extends React.Component {
    render() {
       return (
          <div>
                <h1>Auto Focus</h1>
                <AutoFocus />
                <hr />
                <h1>Focus after clicking button</h1>
                <OnClick />
          </div>
       );
    }
 }

export default App;