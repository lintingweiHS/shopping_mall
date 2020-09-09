import React from 'react'
import {
    BrowserRouter as Router, Route, HashRouter, Switch, Link, useRouteMatch,
    useParams
} from 'react-router-dom'
import App from '../App.js'
import Home from '../view/home/home'
import List from '../view/list'
import Login from '../view/login/login'
export default function Index(){

        return(
            <Router>
                <Switch>
                
                {/* <Route path="/home"  component={Home}/> */}
                <Route path="/login" component={Login} />
                <Route path="/list"  component={List}/>
                <Route path="/" component={ Home }/>
                </Switch>

            </Router>
        )
}