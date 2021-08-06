import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import { Formik } from "formik"
import { Form, Col, Row } from "react-bootstrap"

import { DivForm } from "./Styles"
import { Switch } from "@material-ui/core"
import history from "../../Routes/history"

function Forms() {
  const [redirect, setRedirect] = useState(false)

  function updatePage() {
    history.push("/dashboard/clientes")
    window.location.reload(true)
  }

  function onSubmit(values, actions) {
    fetch("http://localhost:3001/desafio/usuarios/", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      if (data.ok) {
        setRedirect(true)
        console.log(data)
      }
    })
    //console.log(values)
  }

  return redirect ? (
    <Redirect to="/dashboard/clientes" />
  ) : (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        cliente: {
          veiculo_utilizado: true,
          tipo_cliente: false,
          nome_fantasia: "",
          razao_social: "",
          cpf_cnpj: "",
          email: "",
          abertura_horario: 1545,
          dia_atendimento: "",
        },
        endereco: {
          cep: "",
          rua: "",
          numero: "",
          cidade: "",
          estado: "",
        },
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <DivForm>
          <Form onSubmit={handleSubmit}>
            CPF
            <Switch
              checked={values.cliente.tipo_cliente}
              onChange={handleChange}
              name={"cliente.tipo_cliente"}
              color="primary"
            />
            CNPJ
            <div>
              <Form.Label>
                {values.cliente.tipo_cliente ? "CNPJ" : "CPF"}
              </Form.Label>
            </div>
            <Form.Control
              type="text"
              name={"cliente.cpf_cnpj"}
              onChange={handleChange}
            />
            <Form.Group as={Col} md="4" controlId="razao-social-form">
              <Form.Label>Razão social</Form.Label>
              <Form.Control
                type="text"
                name={"cliente.razao_social"}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="nome-fantasia-form">
              <Form.Label>Nome fantasia</Form.Label>
              <Form.Control
                type="text"
                name={"cliente.nome_fantasia"}
                onChange={handleChange}
              />
            </Form.Group>
            Veículo utilizado: Carro
            <Switch
              checked={values.cliente.veiculo_utilizado}
              onChange={handleChange}
              name={"cliente.veiculo_utilizado"}
              color="primary"
            />
            Caminhão
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Dia de atendimento</Form.Label>
                <Form.Control
                  type="date"
                  name={"cliente.dia_atendimento"}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Abertura horário</Form.Label>
                <Form.Control
                  type="time"
                  name={"cliente.abertura_horario"}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name={"cliente.email"}
              onChange={handleChange}
            />
            <Form>
              Endereço:
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>CEP:</Form.Label>
                  <Form.Control
                    type="text"
                    name={"endereco.cep"}
                    onChange={handleChange}
                    maxLength="8"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    type="text"
                    name={"endereco.estado"}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                name={"endereco.rua"}
                onChange={handleChange}
              />
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Número:</Form.Label>
                  <Form.Control
                    type="text"
                    name={"endereco.numero"}
                    onChange={handleChange}
                    maxLength="8"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    type="text"
                    name={"endereco.cidade"}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name={"cliente.telefone"}
                onChange={handleChange}
              />
            </Form>
            <button className="button" type="submit" onClick={updatePage}>
              Cadastrar cliente
            </button>
          </Form>
        </DivForm>
      )}
    </Formik>
  )
}

export default Forms
