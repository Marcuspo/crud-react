import { Link } from "react-router-dom"
import history from "../../Routes/history"

import { CadastroDiv } from "./Styles"

function Cliente() {
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
