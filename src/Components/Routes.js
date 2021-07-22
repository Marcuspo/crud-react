import React from "react"
import { Router, Switch, Route } from "react-router-dom"

import Login from "./Login/Login"
import Dashbord from "./Dashbord/Dashbord"
import NotFound from "./NotFound/Notfound"
import history from "./history"

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} component={Login} exact />
        <Route path={"/dashbord "} component={Dashbord} exact />;
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
