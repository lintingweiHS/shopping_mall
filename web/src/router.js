import React from 'react'
import {
    BrowserRouter as Router, Route, HashRouter, Switch, Link, useRouteMatch,
    useParams
} from 'react-router-dom'
import Home from './view/home'

export default function Index() {
    return (


        <Router>
            <Route path="*" component={Home}/>
        </Router>
    )
}
