import React from "react"
import { Link } from "react-router-dom"
import history from "../../Routes/history"
import Forms from "./Forms"

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
      <Forms />
    </CadastroDiv>
  )
}

export default Cadastro
