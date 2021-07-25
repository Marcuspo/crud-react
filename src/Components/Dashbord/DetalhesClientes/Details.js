import { Link } from "react-router-dom"
import history from "../../Routes/history"

import { DetailsPage } from "./Styles"

function Cadastro() {
  function handleBackToDash() {
    history.push("/dashboard/clientes")
    window.location.reload(true)
  }

  return (
    <DetailsPage>
      <nav>
        <h2>Detalhes</h2>
        <Link to="/dashboard/clientes" onClick={handleBackToDash}>
          <button>Voltar</button>
        </Link>
      </nav>
      Detalhes
    </DetailsPage>
  )
}

export default Cadastro
