import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Conexion() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const URL = '' 

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setData(response.data) 
      })
      .catch((err) => {
        setError(err.message) 
      })
  }, []) 

  return (
    <div>
      <h2>Conexion</h2>
      {error && <p>Error: {error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Cargando...</p>}
    </div>
  )
}

export default Conexion
