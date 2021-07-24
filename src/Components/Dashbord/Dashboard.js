import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

import fire from "../Fire/Fire"

import { DashbordDiv, CardGroup, CardSecond, Buttons } from "./Styles"
import history from "../Routes/history"

function Dashbord() {
  function handleLogOut() {
    fire.auth().signOut()
    localStorage.setItem("app-token", "")
    window.location.reload(true)
  }

  function handleClientes() {
    history.push("/dashboard/clientes")
    window.location.reload(true)
  }

  function handleCadastro() {
    history.push("/dashboard/cadastro")
    window.location.reload(true)
  }

  return (
    <DashbordDiv>
      <nav>
        <h2>Dashboard</h2>
        <Link to="/" onClick={handleLogOut}>
          <button>LogOut</button>
        </Link>
      </nav>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Lista de Clientes</Card.Title>
            <Card.Text>
              Clique no botão para acessar as listas de clientes
            </Card.Text>
            <Buttons>
              <button onClick={handleClientes}>Clientes</button>
            </Buttons>
          </Card.Body>
        </Card>
        <CardSecond>
          <Card>
            <Card.Body>
              <Card.Title>Cadastrar clientes</Card.Title>
              <Card.Text>
                Clique no botão para o cadastro de novos clientes
              </Card.Text>
              <Buttons variant="outline-primary">
                <button onClick={handleCadastro}>Cadastro</button>
              </Buttons>
            </Card.Body>
          </Card>
        </CardSecond>
      </CardGroup>
    </DashbordDiv>
  )
}

export default Dashbord
