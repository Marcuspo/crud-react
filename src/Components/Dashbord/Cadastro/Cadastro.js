import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import history from "../../Routes/history"

import api from "../../Services/services"

import { CadastroDiv } from "./Styles"

function Cliente() {
  const [usuario, setUsuario] = useState([])
  const [page, setPage] = useState([1])

  useEffect(async () => {
    const response = await api.get
  }, [])

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
      Cadastro
    </CadastroDiv>
  )
}

export default Cliente
