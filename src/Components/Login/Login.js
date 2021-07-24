import React, { useState } from "react"

import fire from "../../Components/Fire/Fire.js"

import STORAGE_KEY from "../Fire/Auth"
import history from "../Routes/history"

import {
  ButtonLogin,
  LoginDiv,
  LoginContainer,
  ButtonContainer,
  ErrorMsg,
} from "./Styles"

function Login() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, emailUpdateError] = useState("")
  const [passwordError, passwordUpdateError] = useState("")

  function handleLogin() {
    fire
      .auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then((resp) => {
        if (resp) {
          localStorage.setItem("app-token", resp.user.refreshToken)
          history.push("/dashboard")
          console.log(resp.user.refreshToken)
          window.location.reload(true)
        } else {
          window.location.reload(true)
        }
      })
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            emailUpdateError(err.message)
            localStorage.setItem(STORAGE_KEY, "errou")
            break
          case "auth/wrong-password":
            passwordUpdateError(err.message)
            localStorage.setItem(STORAGE_KEY, "errou")
            break
        }
      })
  }

  return (
    <LoginDiv>
      <LoginContainer>
        <label>Email:</label>
        <input
          type="email"
          name="email"
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
        </ButtonContainer>
      </LoginContainer>
    </LoginDiv>
  )
}

export default Login
