import styled from "styled-components"

export const LoginDiv = styled.div`
  min-height: 100vh;
  padding: 0 20px;
  background: #e9e9e9;
  display: flex;
`

export const LoginContainer = styled.div`
  padding: 60px;
  margin: auto;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
  box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);
  label {
    color: white;
    margin: 14px 0;
    display: block;
    font-size: 22px;
    line-height: 1;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 19px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    letter-spacing: 1px;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 24px 10px;

  p {
    margin: 14px 0 0 0;
    text-align: right;
    color: #fff;
  }
  span {
    color: yellow;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-left: 5px;
    cursor: pointer;
    transition: all 400ms ease-in-out;
  }
  span:hover {
    color: red;
  }
`
export const ErrorMsg = styled.div`
  color: red;
  font-size: 16px;
`

export const ButtonLogin = styled.button`
  border: none;
  outline: none;
  width: 100%;
  padding: 15px 0;
  color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
  background: #603bbb;
  cursor: pointer;
`
