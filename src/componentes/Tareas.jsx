import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import apiClient from "../api";
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
  const { data: session, status } = useSession();
  const [tareas, setTareas] = useState([
   
  ]); // Datos mockeados

  const [nuevaTarea, setNuevaTarea] = useState("");

  useEffect(() => {
    // Este código se comenta para evitar la llamada al backend
    // if (status === 'authenticated') {
    //   const fetchTareas = async () => {
    //     try {
    //       const response = await apiClient.get("/tareas");
    //       setTareas(response.data);
    //     } catch (error) {
    //       console.error("Error al cargar las tareas:", error);
    //     }
    //   };
    //   fetchTareas();
    // }
  }, [status]);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() !== "") {
      // Simula la creación de una nueva tarea
      const nuevaTareaObj = {
        id: Date.now(), // Genera un ID único
        titulo: nuevaTarea,
        completada: false,
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea("");
    }
  };

  const completarTarea = (id) => {
    // Simula la actualización de una tarea
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    // Simula la eliminación de una tarea
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const totalCompletadas = tareas.filter((t) => t.completada).length;

  return (
    <div className="tareas-app">
      <h2>Tareas</h2>
      <div className="input-group">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
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