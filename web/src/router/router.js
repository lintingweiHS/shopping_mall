import React from "react";
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "../view/home/home";
import List from "../view/list";
import Login from "../view/login/login";
import ListView from "@/view/home/listview";
import User from "@/view/user/index";
import Tabbar from "@/components/Tabbar/";
import Classification from "@/view/classification/index";
import Shoppingcart from "@/view/shoppingcart/index";
import Shopdetail from "@/view/shopdetail/index";


export default function Index() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/listview" component={ListView} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/list" component={List} />
          <Route path="/classification" component={Classification} />
          <Route path="/shoppingcart" component={Shoppingcart} />
          <Route path="/shopdetail" component={Shopdetail} />
          <Route path="/" component={Home} />
        </Switch>
        <Tabbar />
      </Router>
    </div>
  );
}
