import React from "react";
import ReactDOM from "react-dom";

class SetState extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    var scoreValue = this.state.score;
    scoreValue += 1;
    this.setState({ score: scoreValue });
  }
  render() {
    return (
      <div>
        <h1>得分：{this.state.score}</h1>
        <button onClick={this.updateState}>加 1 分</button>
      </div>
    );
  }
}

class ForceUpdate extends React.Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  forceUpdateHandler() {
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
        <h4>Random number: {Math.random()}</h4>
      </div>
    );
  }
}

class FindDOMNode extends React.Component {
  constructor() {
    super();
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  }
  findDomNodeHandler() {
    var myDiv = document.getElementById("myDiv");
    console.log(ReactDOM.findDOMNode(myDiv));
  }
  render() {
    return (
      <div>
        <button onClick={this.findDomNodeHandler}>FIND DOME NODE</button>
        <div id="myDiv">NODE</div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <SetState />
        <hr />
        <ForceUpdate />
        <hr />
        <FindDOMNode />
      </div>
    );
  }
}

export default App;