import React from "react"

import fire from "../Fire/Fire"

import { DashbordDiv } from "./Styles"

function Dashbord() {
  function handleLogOut() {
    fire.auth().signOut()
  }

  return <DashbordDiv>T</DashbordDiv>
}

export default Dashbord
