import Login from "./Components/Login/Login"

import { Switch, Route } from "react-router-dom"
import Dashbord from "./Components/Dashbord/Dashbord"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/dashbord">
          <Dashbord />
        </Route>
      </Switch>
    </div>
  )
}

export default App
