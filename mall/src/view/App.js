import React, { Component } from 'react'
import { withRouter, Link, NavLink } from 'react-router-dom'

class App extends Component {
    state = {


    }
    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <ul>
                    <li>
                        <Link to="/App">App</Link>
                    </li>
                    <li>
                        <Link to="/app/name">Home</Link>
                    </li>
                    <li>
                        <NavLink to={"/scroll"}>Scroll</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/detail">detail</Link>
                    </li>
                    <li>
                        <Link to="/time">time</Link>
                    </li>
                    <li>
                        <Link to="/form">form</Link>
                    </li>
                    <li>
                        <Link to="/BoilingVerdict">BoilingVerdict</Link>
                    </li>
                    <li>
                        <Link to="/FancyBorder">FancyBorder</Link>
                    </li>
                </ul>

            </div>
        )
    }

}

export default withRouter(App)