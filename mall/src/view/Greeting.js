import React from 'react'

export default class Greeting extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            key: false
        }
    }
    UserGreeting = (props) => {
        return <h1>Welcome back!</h1>;
    }

    GuestGreeting = (props) => {
        return <h1>Please sign up.</h1>;
    }
    Greeting = (props) => {
        // if(props){
        //     return null
        // }
        const isLoggedIn = props;
        if (isLoggedIn) {
            return this.UserGreeting();
        }
        return this.GuestGreeting();
    }
    handleClick = () => {
        this.setState(() => ({
            key: !this.state.key
        }))
    }
    render() {
        return (
            <div>
                {this.Greeting(this.state.key)}
                <button onClick={this.handleClick}>{this.state.key ? 'on' :'off'}</button>
            </div>
        )
    }
}