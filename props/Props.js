import React from 'react';
import PropsType from 'prop-types';

class Animals extends React.Component {
    render() {
       return (
            <div>
                <p>{this.props.animal1}</p>
                <p>{this.props.animal2}</p>
            </div>
        );
    }
}

Animals.defaultProps = {
    animal1: "Dogdog",
    animal2: "Catcat"
}

class Content extends React.Component {
    render() {
        return (
            <h1>{this.props.id}</h1>
        );
    }
}

Content.propTypes = {
    id: PropsType.number
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Emma"
        }
    }
    render() {
        return (
            <div>
                <Animals />
                <hr />
                <Content id = {this.state.name}/>
            </div>
        );
    }
}

export default App;