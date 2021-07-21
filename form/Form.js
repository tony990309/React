import React from "react";

class Controlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "預設資料" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name :&nbsp;
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <p>{this.state.value}，您好。</p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "try to write something...",
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(e) {
    this.setState({ data: e.target.value });
  }
  render() {
    return (
      <div>
        <Content
          myDataProp={this.state.data}
          updateStateProp={this.updateState}
        ></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.myDataProp}
          onChange={this.props.updateStateProp}
        />
        <h3>{this.props.myDataProp}</h3>
      </div>
    );
  }
}

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "預設資料" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name :&nbsp;
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="同學A">同學A</option>
            <option value="老師B">老師B</option>
            <option value="路人C">路人C</option>
            <option value="寵物D">寵物D</option>
          </select>
        </label>
        <p>您選擇的是：{this.state.value}</p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Multiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    alert("Is going : " + this.state.isGoing + "\nNumber of Guests : " + this.state.numberOfGuests);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
            min="0"
            max="10"
          />
        </label><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Controlled Components</h1>
        <Controlled />
        <hr />
        <h1>Textarea Tag</h1>
        <Textarea />
        <hr />
        <h1>Select Tag</h1>
        <Select />
        <hr />
        <h1>Multiple Inputs</h1>
        <Multiple />
      </div>
    );
  }
}

export default App;
