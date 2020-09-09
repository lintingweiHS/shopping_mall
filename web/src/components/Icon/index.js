import React from 'react'
export default class oIcon extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <i  className={"icon iconfont "+this.props.iconName}></i>
        )
    }
}    