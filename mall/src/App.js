import React, { Component } from 'react'
import Table from './Table'
import From from './Form'
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
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
                <From handleSubmit={this.handleSubmit} />
            </div>
        )
    }
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
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

export default App