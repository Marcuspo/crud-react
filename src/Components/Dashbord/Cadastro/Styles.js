import styled from "styled-components"

export const CadastroDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
  nav {
    background: #603bbb;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    color: #fff;
  }
  button {
    color: #fff;
    width: 86px;
    padding: 8px 0;
    background: #3a2b58;
    cursor: pointer;
  }
`
export const DivForm = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 45px;
  .col-md-4 {
    width: 100%;
  }

  .button {
    margin-top: 15px;
  }
`
