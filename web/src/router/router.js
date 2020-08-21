import React from 'react'
import {
    BrowserRouter as Router, Route, HashRouter, Switch, Link, useRouteMatch,
    useParams
} from 'react-router-dom'
import App from '../App.js'
import Home from '../home'
export default function Index(){

        return(
            <Router>
                <Switch>
                
                <Route path="/home"  component={Home}/>
                <Route path="/" component={ App }/>
                </Switch>

            </Router>
        )
}