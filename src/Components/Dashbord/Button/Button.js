import { Link } from "react-router-dom"
import history from "../../Routes/history"

function Button() {
  function irClientes() {
    history.push("/dashboard/clientes")
    window.location.reload(true)
  }

  return (
    <>
      <Link to="/dashboard/clientes">
        <button onClick={irClientes}>Clientes</button>
      </Link>
      <Link to="/dashboard/cadastro">
        <button>Cadastro</button>
      </Link>
    </>
  )
}

export default Button
