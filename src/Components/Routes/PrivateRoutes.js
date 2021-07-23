import { Route, Redirect } from "react-router"

import isLogged from "../Fire/Auth"

function PrivateRoutes(props) {
  return isLogged() ? <Route {...props} /> : <Redirect path="/" />
}

export default PrivateRoutes
