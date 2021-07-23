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
        <PrivateRoutes path={"/dashboard"} component={Dashbord} />
        <Route path={"/"} exact>
          <Login />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
