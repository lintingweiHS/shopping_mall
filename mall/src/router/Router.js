import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router, Route, HashRouter, Switch, Link, useRouteMatch,
    useParams
} from 'react-router-dom'
import Home from '../view/Home'
import Detail from '../view/Detail'
import App from "../view/App"
import Time from '../view/Time'
// import App from '../App'





export default function Index() {

    return (
        <Router>
            <div>
                <ul>
                <li>
                        <Link to="/App">App</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/detail">detail</Link>
                    </li>
                    <li>
                        <Link to="/time">time</Link>
                    </li>
                </ul>

                <Switch>
                   
                    <Route path="/about" component={About}>
                        {/* <About /> */}
                    </Route>
                    <Route path="/topics" component={Topics}>
                        {/* <Topics /> */}
                    </Route>
                    <Route path="/detail">
                        <Detail />
                    </Route>
                    <Route path="/app">
                        < App />
                    </Route>
                    <Route path="/time">
                        <Time/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                 

                </Switch>
            </div>
        </Router>
    );
}



// function Home() {
//     return <h2>Home</h2>;
// }

function About() {
    return <h2>About</h2>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
            </Link>
                    {/* <div onClick={this.toOtherRoute}>跳转路由</div> */}
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}



// ReactDOM.render(<App/>,document.getElementById('root'))