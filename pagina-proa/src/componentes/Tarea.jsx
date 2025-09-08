import React, { useState } from "react";

function Tarea({ tarea, completarTarea, eliminarTarea }) {
  return (
    <li>
      <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.titulo}
      </span>
      {!tarea.completada && (
        <button onClick={() => completarTarea(tarea.id)}>:D Completar</button>
      )}
      <button onClick={() => eliminarTarea(tarea.id)}>:c Eliminar</button>
    </li>
  );
}

function TareasApp() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");

  const agregarTarea = () => {
    if (!titulo.trim()) return;
    const nuevaTarea = {
      id: Date.now(),
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

  const totalCompletadas = tareas.reduce(
    (acc, tarea) => (tarea.completada ? acc + 1 : acc),
    0
  );

  return (
    <div>
      <h2> Tareas</h2>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>

      <h3>Pendientes</h3>
      <ul>
        {tareas.filter((t) => !t.completada).map((t) => (
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
        {tareas.filter((t) => t.completada).map((t) => (
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

export default TareasApp;