import React from 'react'
import {
    BrowserRouter as Router, Route, HashRouter, Switch, Link, useRouteMatch,
    useParams
} from 'react-router-dom'
import App from '../App.js'
import Home from '../view/home/home'
import List from '../view/list'
export default function Index(){

        return(
            <Router>
                <Switch>
                
                <Route path="/home"  component={Home}/>
                <Route path="/home"  component={List}/>
                <Route path="/" component={ App }/>
                </Switch>

            </Router>
        )
}