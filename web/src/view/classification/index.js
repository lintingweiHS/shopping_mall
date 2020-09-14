import React, { Component } from 'react'
import axios from '_lib/axios.js'
export default class Classification extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.getData()
    }
    getData = () =>{
        axios.$Get("api/store/category").then(res =>{
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <div className="class_tree">
                    <div className="tab"></div>
                </div>
            </div>
        )
    }
}
