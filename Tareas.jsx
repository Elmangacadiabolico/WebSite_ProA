import React, { useState, useEffect } from "react";
import "../CSS/tareas.css";

function Tarea({ tarea, completarTarea, eliminarTarea }) {
  return (
    <li className="tarea-item">
      <span className={tarea.completada ? "completada" : ""}>
        {tarea.titulo}
      </span>
      {!tarea.completada && (
        <button className="btn-completar" onClick={() => completarTarea(tarea.id)}>
          Completar
        </button>
      )}
      <button className="btn-eliminar" onClick={() => eliminarTarea(tarea.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default function TareasApp() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");

  // 🔹 Cargar tareas desde localStorage cuando se monta el componente
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  // 🔹 Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (!titulo.trim()) return;
    const nuevaTarea = {
      id: Date.now(), // Generamos un ID único local
      titulo,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
    setTitulo("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: true } : t
      )
    );
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
