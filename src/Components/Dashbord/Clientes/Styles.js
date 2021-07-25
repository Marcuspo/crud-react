import styled from "styled-components"

export const ClientesDiv = styled.div`
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
export const CardGroupTwo = styled.div`
  padding: 15px;
  flex-direction: row;
`
export const TextCard = styled.text`
  display: flex;
`
export const ButtonMore = styled.div`
  background-color: rgb(96, 59, 187);
  margin-top: 5px;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const TextCardButton = styled(TextCard)`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  border: none;
`
export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`
