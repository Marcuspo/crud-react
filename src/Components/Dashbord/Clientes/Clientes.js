import { Link } from "react-router-dom"
import history from "../../Routes/history"

import { ClientesDiv } from "./Styles"

function Cliente() {
  function handleBackToDash() {
    history.push("/dashboard")
    window.location.reload(true)
  }

  return (
    <ClientesDiv>
      {" "}
      <nav>
        <h2>Clientes</h2>
        <Link to="/dashboard" onClick={handleBackToDash}>
          <button>Voltar</button>
        </Link>
      </nav>
      Clientes
    </ClientesDiv>
  )
}

export default Cliente
