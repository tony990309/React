import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: 0,
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(event) {
      var score = this.state.value;
      score += 1; 
      this.setState({value: score});
   }
   render() {
      return (
         <div>
            <button onClick = {this.updateState}>Add</button>
            <h4>{this.state.value}</h4>
         </div>
      );
   }
}
export default App;