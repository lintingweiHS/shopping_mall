import React from 'react'
import ScrolltoTop from './ScrolltoTop'
import { BrowserRouter } from 'react-router-dom'
import './home.css'

const title = {
    'color':'red'
}
export default class react extends React.Component {
    toTop(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <BrowserRouter>
                <ScrolltoTop />
                <h1 className="home" style={title}>scroll</h1>
                <h1>scroll</h1><h1>scroll</h1><h1>scroll</h1><h1>scroll</h1><h1>scroll</h1>
                <h1>scroll</h1><h1>scroll</h1><h1>scroll</h1><h1>scroll</h1><h1>scroll</h1>
                <h1>scroll</h1><h1>scroll</h1><h1 onClick={this.toTop}>scroll123123</h1>
            </BrowserRouter>
        )
    }
}