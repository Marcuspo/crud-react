import React from "react"
import { Link } from "react-router-dom"

import fire from "../Fire/Fire"

import Button from "./Button/Button"

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
        <Link to="/" onClick={handleLogOut}>
          <button>LogOut</button>
        </Link>
      </nav>
      <Button />
    </DashbordDiv>
  )
}

export default Dashbord
