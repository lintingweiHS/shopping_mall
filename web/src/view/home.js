import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axios.post('api/passport/login', {
            username: 123,
            password: 132
        }).then(res =>{
            console.log('aaa')
        })
    }

    render() {

        return (
            <div>
                home
            </div>
        )
    }
}

export default Home