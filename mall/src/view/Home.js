import React from 'react';
import { withRouter ,Link} from 'react-router-dom'
import Scroll from "./scroll"
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
                {/* <Scroll/> */}
                <a className="home" href='/detail?name=yushasha'>去detail</a>
                <Link to={'/app'}>去App</Link>
                <div onClick={this.gotoRouter.bind(this)}>  <button >   通过函数跳转</button></div>
            </div>
        )
    }
}
export default withRouter(Home)