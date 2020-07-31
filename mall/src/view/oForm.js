import React from 'react'
export default class oForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            value: ''
        }
    }
    handleChange = (e) => {
        let key = e.target.name;
        this.setState({
            [key] : e.target.value
        })
        
    }
    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    }


    render() {
        return (
            <div>

                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        名字:
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                    </label>
                    <label htmlFor="">
                        文章
                        <textarea name="value" id="" value={this.state.value} onChange={this.handleChange} cols="30" rows="10"></textarea>
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
}