import React from 'react'
import Table from './Table'
import From from './Form'
export default class oForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            value: '',
            select:'banana',
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
    }
    handleChange = (e) => {
        let key = e.target.name;
        this.setState({
            [key]: e.target.value
        })

    }
    handleSubmit = (e) => {
        console.log(this.state)
        // alert(JSON.stringify(this.state));
        e.preventDefault();
    }

    handleSubmit1 = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }
    removeCharacter = (index) => {
        const { characters } = this.state
        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index
            })
        })
    }
    render() {
        return (
            <div>
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
                <From handleSubmit={this.handleSubmit1} />
                <br/>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        名字:
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                    </label>
                    <label htmlFor="">
                        文章
                        <textarea name="value" id="" value={this.state.value} onChange={this.handleChange} cols="30" rows="10"></textarea>
                    </label>
                    <select name="select" id=""  value={this.state.select} onChange={this.handleChange}>
                        <option value="apple">苹果</option>
                        <option value="orange">橘子</option>
                        <option value="banana">香蕉</option>
                    </select>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
}