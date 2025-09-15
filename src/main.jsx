import React from "react";
import { createRoot } from "react-dom/client";
import { SessionProvider } from "next-auth/react";
import App from "./App";
import "./Global.css"; // <-- importa aquí los estilos globales

// Activa modo oscuro por defecto y persiste en localStorage
if (typeof window !== "undefined") {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.remove("dark");
  } else {
    // por defecto: dark
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  </React.StrictMode>
);
