import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import history from "../../Routes/history"

import api from "../../Services/services"

import { ClientesDiv, CardGroupTwo, TextCard } from "./Styles"

function Cliente() {
  const [usuario, setUsuario] = useState([])
  const [page, setPage] = useState([1])

  useEffect(() => {
    async function loadUsuarios(page = 1) {
      const response = await api.get(`/usuarios/?page=${page}`)
      const { docs } = response.data

      setUsuario(docs)

      setPage(page)
    }
    loadUsuarios()
  }, [usuario])

  function handleBackToDash() {
    history.push("/dashboard")
    window.location.reload(true)
  }

  return (
    <ClientesDiv>
      <nav>
        <h2>Cadastro</h2>
        <Link to="/dashboard" onClick={handleBackToDash}>
          <button>Voltar</button>
        </Link>
      </nav>
      <CardGroupTwo>
        {usuario.map((usuario) => (
          <Card key={usuario._id}>
            <Card.Body>
              <Card.Title>
                Nome fantasia/nome social: {usuario.cliente.nome_fantasia}
              </Card.Title>
              <TextCard>ID: {usuario._id} </TextCard>
              <TextCard>
                Razão social/sobrenome: {usuario.cliente.razao_social}
              </TextCard>
              <TextCard>Tipo de pessoa:</TextCard>
            </Card.Body>
          </Card>
        ))}
      </CardGroupTwo>
    </ClientesDiv>
  )
}

export default Cliente
