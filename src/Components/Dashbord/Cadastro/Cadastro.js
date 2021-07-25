import { Link } from "react-router-dom"
import history from "../../Routes/history"

import { CadastroDiv } from "./Styles"

function Cadastro() {
  function handleBackToDash() {
    history.push("/dashboard")
    window.location.reload(true)
  }

  return (
    <CadastroDiv>
      <nav>
        <h2>Clientes</h2>
        <Link to="/dashboard" onClick={handleBackToDash}>
          <button>Voltar</button>
        </Link>
      </nav>
      Cadastro
    </CadastroDiv>
  )
}

export default Cadastro
