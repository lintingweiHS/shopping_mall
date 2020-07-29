import React from 'react';
import { withRouter } from 'react-router-dom'

class Detail extends React.Component {
    constructor(props) {
        super(props);
        console.log(this)
        this.state = { isToggleOn: true };
    }
    xdecodeQuery(queryStr) {
        let query = {}
        // 中文需解码
        queryStr = decodeURI(queryStr.replace('?', ''))
        let queryArr = queryStr.split('&')
        queryArr.forEach(item => {
            let keyAndValue = item.split('=')
            query[keyAndValue[0]] = keyAndValue[1]
        })
        return query
    }
    handleClick =()=> {
        this.setState(() => ({
            isToggleOn: !this.state.isToggleOn
        }))
    }
    gotoHome =() => {
        console.log(this)
        this.props.history.push({
            pathname: '/home'
        })
    }
    render() {
      
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <a onClick={this.gotoHome}>去Home</a>
            </div>
        )
    }
}

export default withRouter(Detail)