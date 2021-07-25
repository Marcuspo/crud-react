import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import history from "../../Routes/history"
import Form from "./Form"

import { CadastroDiv } from "./Styles"

const Cadastro = () => {
  function handleBackToDash() {
    history.push("/dashboard")
    window.location.reload(true)
  }

  return (
    <CadastroDiv>
      <nav>
        <h2>Cadastro</h2>
        <Link to="/dashboard" onClick={handleBackToDash}>
          <button>Voltar</button>
        </Link>
      </nav>
      <Form />
    </CadastroDiv>
  )
}

export default Cadastro
