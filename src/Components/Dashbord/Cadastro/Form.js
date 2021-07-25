import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const Form = () => {
  const [usuario, setUsuario] = useState({
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
  })
  const [redirect, setRedirect] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setUsuario({
      ...usuario,
    })

    console.log(usuario)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3001/desafio/usuarios/", {
      method: "post",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      if (data.ok) {
        setRedirect(true)
      }
    })
  }

  return redirect ? (
    <Redirect to="/dashboard/clientes" />
  ) : (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Criar Usuário</legend>
        <div className="usuario-insert">
          <label htmlFor="nome">Razão social</label>
          <br />
          <input
            type="text"
            id="razaoSocial"
            name="nome"
            placeholder="Razão social"
            required
            value={usuario.cliente.razao_social}
            onChange={handleChange}
          />
        </div>
        <div className="usuario-insert">
          <label htmlFor="matricula">Matrícula</label>
          <br />
          <input
            type="number"
            id="matricula"
            name="matricula"
            placeholder="Matrícula"
            required
            value={usuario.matricula}
            onChange={handleChange}
          />
        </div>
        <div className="usuario-insert">
          <label htmlFor="cidade">Cidade</label>
          <br />
          <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Cidade"
            minLength={3}
            maxLength={100}
            required
            value={usuario.endereco.cidade}
            onChange={handleChange}
          />
        </div>
        <div className="usuario-insert">
          <label htmlFor="estado">Estado</label>
          <br />
          <input
            type="text"
            id="estado"
            name="estado"
            placeholder="Estado"
            minLength={2}
            maxLength={2}
            required
            value={usuario.endereco.estado}
            onChange={handleChange}
          />
        </div>
        <div className="usuario-insert">
          <label>
            <input
              type="radio"
              name="ativo"
              value="true"
              checked={usuario.ativo}
              onChange={handleChange}
            />
            Ativo
          </label>
        </div>
        <label>
          <input
            type="radio"
            name="ativo"
            value="false"
            checked={!usuario.ativo}
            onChange={handleChange}
          />
          Inativo
        </label>
        <button type="submit">Cadastrar</button>
      </fieldset>
    </form>
  )
}

export default Form
