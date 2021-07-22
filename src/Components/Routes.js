import React from "react"
import { Router, Switch, Route } from "react-router-dom"

import Login from "./Login/Login"
import Dashbord from "./Dashbord/Dashbord"
import history from "./history"

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} component={Login} exact />
        <Route path={"/dashbord "} component={Dashbord} exact />
      </Switch>
    </Router>
  )
}

export default Routes
