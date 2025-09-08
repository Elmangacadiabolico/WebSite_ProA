import React, { useState } from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault() // evita recargar la página

    try {
      // Ejemplo con fakestoreapi
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: email,
        password: password,
      })

      console.log("Respuesta del login:", response.data)
      setSuccess(true)
      setError(null)
    } catch (err) {
      setError("Credenciales inválidas o error de conexión")
      setSuccess(false)
    }
  }

  return (
    <div style={{maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px"}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email o Usuario:</label>
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{width: "100%", marginBottom: "10px"}}
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{width: "100%", marginBottom: "10px"}}
          />
        </div>

        <button type="submit">Ingresar</button>
      </form>

      {success && <p style={{color: "green"}}>✅ Login exitoso!</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  )
}

export default Login
