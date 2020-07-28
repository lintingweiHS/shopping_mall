import React, { Component } from 'react'
import { withRouter, Link ,NavLink} from 'react-router-dom'
import Table from './Table'
import From from './Form'
import Home from './Home'
class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],

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
                </ul>
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
                <From handleSubmit={this.handleSubmit} />
            </div>
        )
    }
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }
    removeCharacter = (index) => {
        const { characters } = this.state
        console.log(characters)
        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index
            })
        })
    }
}

export default withRouter(App)