import React, { useState, useEffect } from "react";
import apiClient from "../api"; // Importamos la instancia de Axios
import "../CSS/tareas.css";

function Tarea({ tarea, completarTarea, eliminarTarea }) {
  return (
    <li className="tarea-item">
      <span className={tarea.completada ? "completada" : ""}>
        {tarea.titulo}
      </span>
      {!tarea.completada && (
        <button className="btn-completar" onClick={() => completarTarea(tarea.id)}>Completar</button>
      )}
      <button className="btn-eliminar" onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
    </li>
  );
}

export default function TareasApp() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");

  // useEffect para cargar las tareas desde el backend cuando el componente se monta
  useEffect(() => {
    const fetchTareas = async () => {
      try {
        // NOTA: Esto fallará hasta que crees el endpoint GET /api/tareas en tu backend
        const response = await apiClient.get("/tareas");
        setTareas(response.data);
      } catch (error) {
        console.error("Error al cargar las tareas:", error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    };

    fetchTareas();
  }, []); // El array vacío asegura que se ejecute solo una vez

  const agregarTarea = async () => {
    if (!titulo.trim()) return;
    const nuevaTarea = {
      titulo,
      completada: false,
    };
    try {
      // NOTA: Esto fallará hasta que crees el endpoint POST /api/tareas en tu backend
      const response = await apiClient.post("/tareas", nuevaTarea);
      setTareas([...tareas, response.data]); // Agrega la tarea devuelta por el backend (que tendrá un ID)
      setTitulo("");
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
    }
  };

  const eliminarTarea = async (id) => {
    try {
      // NOTA: Esto fallará hasta que crees el endpoint DELETE /api/tareas/:id en tu backend
      await apiClient.delete(`/tareas/${id}`);
      setTareas(tareas.filter((tarea) => tarea.id !== id));
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  const completarTarea = async (id) => {
    try {
      // NOTA: Esto fallará hasta que crees el endpoint PUT /api/tareas/:id en tu backend
      const response = await apiClient.put(`/tareas/${id}/completar`);
      setTareas(
        tareas.map((t) => (t.id === id ? response.data : t))
      );
    } catch (error) {
      console.error("Error al completar la tarea:", error);
    }
  };

  const totalCompletadas = tareas.filter((t) => t.completada).length;


  return (
    <div className="tareas-app">
      <h2>Tareas</h2>
      <div className="input-group">
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={agregarTarea}>➕ Agregar</button>
      </div>

      <h3>Pendientes</h3>
      <ul>
        {tareas
          .filter((t) => !t.completada)
          .map((t) => (
            <Tarea
              key={t.id}
              tarea={t}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          ))}
      </ul>

      <h3>Completadas</h3>
      <ul>
        {tareas
          .filter((t) => t.completada)
          .map((t) => (
            <Tarea
              key={t.id}
              tarea={t}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          ))}
      </ul>

      <p>
        Total: {tareas.length} | Completadas: {totalCompletadas}
      </p>
    </div>
  );
}