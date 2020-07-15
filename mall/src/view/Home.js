import React from 'react';
import { withRouter } from 'react-router-dom'
class Home extends React.Component {

    encodeQuery(query) {
        let queryStr = ''
        let keys = Object.keys(query)
        // a=1&b=2
        keys.forEach((item, index) => {
            queryStr = index
                ? `${queryStr}&${item}=${query[item]}`
                : `${queryStr}${item}=${query[item]}`
        })
        return queryStr
    }
    gotoRouter() {
        console.log(this, this.props, 123)
        this.props.history.push({
            pathname: '/detail', search: this.encodeQuery({
                id: 12345
            })
        })
    }
    render() {
        return (
            <div>
                <a href='/detail'>去detail</a>
                <div onClick={this.gotoRouter.bind(this)}>  <button >   通过函数跳转</button></div>
            </div>
        )
    }
}
export default withRouter(Home)