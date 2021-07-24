import React from "react"
import { Router, Switch, Route } from "react-router-dom"

import Login from "../Login/Login"
import Dashbord from "../Dashbord/Dashboard"
import NotFound from "../NotFound/Notfound"
import Cliente from "../Dashbord/Clientes/Clientes"
import Cadastro from "../Dashbord/Cadastro/Cadastro"

import history from "./history"

import PrivateRoutes from "./PrivateRoutes"

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoutes path={"/dashboard"} component={Dashbord} exact />
        <PrivateRoutes path={"/dashboard/clientes"} component={Cliente} exact />
        <PrivateRoutes
          path={"/dashboard/cadsatro"}
          component={Cadastro}
          exact
        />
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
