import React from 'react';

const scaleName = {
    cm: '公分',
    m: '公尺'
}

class LengthInput extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        // this.setState({length: e.target.value});
        this.props.onLengthChange(e.target.value);
    }

    render(){
        const length = this.props.length;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>{scaleName[scale]}:</legend>
                <input  type="text" 
                        value={length} 
                        onChange = {this.handleChange} />
            </fieldset>
        );
    }
}

function toMeter(cm){
    return cm / 100;
}

function toCentermeter(m){
    return m * 100;
}

function doConvert(unit, convert){
    const input = parseFloat(unit);
    if(isNaN(input))
        return '';
    const output = convert(input);
    return output.toString();
}

class Caculator extends React.Component{
    constructor(){  
        super();
        this.state = {
            length:"",
            scale:"cm"
        }
        this.handleCentermeterChange = this.handleCentermeterChange.bind(this);
        this.handleMeterChange = this.handleMeterChange.bind(this);     
    }

    handleCentermeterChange(len){
        this.setState({length:len , scale:'cm'});
    }

    handleMeterChange(len){
        this.setState({length:len , scale:'m'});
    }

    render(){
        const scale = this.state.scale;
        const length = this.state.length;
        const centermeter = scale === 'm' ? doConvert(length, toCentermeter) : length;
        const meter = scale === 'cm' ? doConvert(length, toMeter) : length;

        return(
            <div>
                <LengthInput scale='cm' length={centermeter} onLengthChange={this.handleCentermeterChange}/>
                <br />
                <LengthInput scale='m' length={meter} onLengthChange={this.handleMeterChange}/>
            </div>
        );
    }
}

export default Caculator;