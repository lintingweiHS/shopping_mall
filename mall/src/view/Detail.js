import React from 'react';
import { withRouter } from 'react-router-dom'

class Detail extends React.Component {
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
    render() {

        console.log(this.props.location.search?this.xdecodeQuery(this.props.location.search):'')
        return (
            <div>
                <a href='/'>去Home</a>
            </div>
        )
    }
}

export default withRouter(Detail)