import React from 'react'

export default class List extends React.Component{
    constructor(props){
        super(props)

    }
    setList = ()=>{
        const list = [1,2,3,4,5,6,7,8,9,];
        const listItems = list.map((number)=>
            <li key={number.toString()}>{number}</li>
        )
        console.log(listItems)
        return (
            <ul>
                {listItems}
            </ul>
        )
    }
    render(){
        return(
            <div>
                {this.setList()}
            </div>
        )
    }
}