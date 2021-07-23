import React from "react"
import { Router, Switch, Route } from "react-router-dom"

import Login from "../Login/Login"
import Dashbord from "../Dashbord/Dashboard"
import NotFound from "../NotFound/Notfound"
import history from "./history"

import PrivateRoutes from "./PrivateRoutes"

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} component={Login} exact />
        <PrivateRoutes path={"/dashboard"} component={Dashbord} exact />;
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
