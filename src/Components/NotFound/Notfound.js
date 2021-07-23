import history from "../Routes/history"

function NotFound() {
  function GoHomeNow() {
    history.push("/")
    window.location.reload(true)
  }

  return (
    <h1>
      Você foi longe demais, você está sendo transferi...
      <button onClick={GoHomeNow}>Ir para Home</button>
    </h1>
  )
}

export default NotFound
