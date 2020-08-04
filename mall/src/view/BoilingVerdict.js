import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default class BoilingVerdict extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            oNumber: 0
        }
    }
    Boiling = (props) => {
        if (this.state.temperature >= 100) {
            return <p>The water would boil.</p>
        }
        return <p>The water would not boil.</p>
    }
    Scale = (props) => {
        return <div>{scaleNames[props]}</div>
    }
    toCelsius = (f) => {
        return (f - 32) * 5 / 9;
    }
    toFahrenheit = (c) => {
        return (c * 9 / 5) + 32
    }
    tryConvert = (t, c) => {
        const input = parseFloat(t)
        if (Number.isNaN(input)) {
            return ''
        }
        const output = Math.round(this[c](input) * 1000) / 1000
        return output.toString();
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        return (

            <div>
                <div>Enter temperature in celsius:</div>
                <input type="text" name="temperature" value={this.setState.temperature} onChange={this.handleChange} />
                {this.Boiling()}
                {this.Scale('c')}
                {this.Scale('f')}

                <input type="text" name="oNumber" value={this.state.oNumber} onChange={this.handleChange} />
                <div> Celsius: {this.tryConvert(this.state.oNumber, 'toCelsius')}</div>
                <div>  Fahrenheit: {this.tryConvert(this.state.oNumber, 'toFahrenheit')}</div>
            </div>
        )
    }
}