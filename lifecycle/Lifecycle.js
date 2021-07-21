import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    console.log("Component constructor!");
    super(props);

    this.state = {
      data: 0,
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  setNewNumber() {
    console.log("Update data!");
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    console.log("Component render!");
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("Check shouldComponentUpdate!");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));

// 設定10秒（10000 milliseconds）後解除安裝組件
// setTimeout() 為 javascript 函式，用於設定特定時間後觸發特定行為。
setTimeout(() => {
  ReactDOM.unmountComponentAtNode(document.getElementById("app"));
}, 10000);