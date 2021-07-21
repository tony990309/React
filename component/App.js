import React from "react";

class Style extends React.Component {
    render() {
        var myStyle = {
            fontSize: 100, // 駝峰式語法
            color: '#FF0000'
        }
        return (
            <div>
                <h1 style={myStyle}>套用Style的h1</h1>
                <h1>沒套用的h1</h1>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>Header</h1>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}

class Yo extends React.Component {
    constructor() {
        super();
        this.state = {
            "name": "Emma",
            "id": 5
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Content />
                <p>by {this.state.name}</p>
                <p>id {this.state.id}</p>
            </div>
        );
    }
}

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "name": "dogA",
                        "age": "1"
                    },
                    {
                        "name": "catB",
                        "age": "2"
                    },
                    {
                        "name": "pigC",
                        "age": "3"
                    }
                ],
            id: "Animal List"
        }
    }
    render() {
        return (
            <div>
                <Header title={this.state.id} />
                <table>
                    <tbody>
                        {
                            this.state.data.map(
                                (animals, i) =>
                                <TableRow key={i} data={animals} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
          </tr>
       );
    }
 } 

class App extends React.Component {
    render() {
        return (
            <div>
                <Style />
                <hr />
                <Yo />
                <hr />
                <State />
            </div>
        );
    }
}

export default App;