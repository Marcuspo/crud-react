import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import history from "../../Routes/history"

import api from "../../Services/services"

import {
  ClientesDiv,
  CardGroupTwo,
  TextCard,
  ButtonMore,
  TextCardButton,
  Pagination,
} from "./Styles"

function Cliente() {
  const [usuario, setUsuario] = useState([])
  const [page, setPage] = useState([1])

  useEffect(() => {
    loadUsuarios()
  }, [])

  async function loadUsuarios(page = 1) {
    const response = await api.get(`/usuarios/?page=${page}`)
    const { docs } = response.data

    setUsuario(docs)
    setPage(page)
  }

  async function nextPage() {
    const response = await api.get(`/usuarios/?page=${page + 1}`)

    const { docs } = response.data

    setUsuario(docs)
  }

  async function previousPage() {
    const response = await api.get(`/usuarios/?page=${page}`)

    const { docs } = response.data

    setUsuario(docs)
  }

  function handleBackToDash() {
    history.push("/dashboard")
    window.location.reload(true)
  }

  return (
    <ClientesDiv>
      <nav>
        <h2>Clientes</h2>
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
              <TextCard>
                Tipo de pessoa:
                {usuario.cliente.tipo_cliente ? (
                  <b> Jurídica</b>
                ) : (
                  <b> Física</b>
                )}
              </TextCard>
              <ButtonMore>
                <Link>
                  <TextCardButton>Editar</TextCardButton>
                  <TextCardButton>Excluir</TextCardButton>
                </Link>
              </ButtonMore>
            </Card.Body>
          </Card>
        ))}
      </CardGroupTwo>
      <Pagination>
        <button onClick={previousPage}>Página Anterior</button>
        <button onClick={nextPage}>Próxima página</button>
      </Pagination>
    </ClientesDiv>
  )
}

export default Cliente
