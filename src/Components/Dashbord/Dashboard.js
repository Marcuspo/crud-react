import React from "react"

import fire from "../Fire/Fire"

import { DashbordDiv } from "./Styles"

function Dashbord() {
  function handleLogOut() {
    fire.auth().signOut()
    localStorage.setItem("app-token", "")
    window.location.reload(true)
  }

  return (
    <DashbordDiv>
      <nav>
        <h2>Dashboard</h2>
        <button onClick={handleLogOut}>Log-Out</button>
      </nav>
    </DashbordDiv>
  )
}

export default Dashbord
