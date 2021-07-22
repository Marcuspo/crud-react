import React, { useEffect, useState } from "react"

import fire from "../../Components/Fire/Fire.js"

import {
  ButtonLogin,
  LoginDiv,
  LoginContainer,
  ButtonContainer,
  ErrorMsg,
} from "./Styles"

function Login() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, emailUpdateError] = useState("")
  const [passwordError, passwordUpdateError] = useState("")

  function handleLogin() {
    fire
      .auth()
      .signInWithEmailAndPassword(password, email)
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            emailUpdateError(err.message)
            break
          case "auth/wrong-password":
            passwordUpdateError(err.message)
            break
        }
      })
  }

  function handleLogOut() {
    fire.auth().signOut()
  }

  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  console.log(authListener)

  return (
    <LoginDiv>
      <LoginContainer>
        <label>Email:</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ErrorMsg>{emailError}</ErrorMsg>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ErrorMsg>{passwordError}</ErrorMsg>
        <ButtonContainer>
          <ButtonLogin onClick={handleLogin}>Logar</ButtonLogin>
          <p>
            Não tem conta? <span>Clique aqui!</span>
          </p>
        </ButtonContainer>
      </LoginContainer>
    </LoginDiv>
  )
}

export default Login
