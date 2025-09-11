# Pagina Proa - Proyecto Full-Stack

Este repositorio contiene un proyecto web full-stack compuesto por un frontend desarrollado con React + Vite y un backend desarrollado con Next.js.

## Arquitectura del Proyecto

El proyecto está organizado en dos partes principales:

-   `/` (raíz): Contiene el frontend de React.
-   `/servidor`: Contiene el backend de Next.js, que gestiona la lógica de negocio, las API y la autenticación.

---

## Frontend (React + Vite)

El frontend es una aplicación de una sola página (SPA) construida con React y Vite.

### Tecnologías Utilizadas (Frontend)

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [React Router](https://reactrouter.com/) para el enrutamiento.
-   [Bootstrap](https://getbootstrap.com/) para los estilos.
-   [React Icons](https://react-icons.github.io/react-icons/) para los iconos.
-   [Axios](https://axios-http.com/) para realizar peticiones HTTP al backend.

### Cómo Empezar (Frontend)

1.  **Navega a la raíz del proyecto.**
2.  **Instala las dependencias:**
    ```sh
    npm install
    ```
3.  **Ejecuta el servidor de desarrollo:**
    ```sh
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

---

## Backend (Next.js)

El backend está construido con Next.js y gestiona los datos y la autenticación de usuarios a través de `next-auth`.

### Tecnologías Utilizadas (Backend)

-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/) (requerido por Next.js)
-   [Next-Auth](https://next-auth.js.org/) para la autenticación.

### Cómo Empezar (Backend)

1.  **Navega a la carpeta del servidor:**
    ```sh
    cd servidor
    ```
2.  **Instala las dependencias:**
    ```sh
    npm install
    ```
3.  **Ejecuta el servidor de desarrollo:**
    ```sh
    npm run dev
    ```
    El servidor de la API estará disponible en `http://localhost:3000`.

## Scripts Disponibles

Cada parte (frontend y backend) tiene sus propios scripts (`dev`, `build`, `lint`, etc.) que se ejecutan desde sus respectivas carpetas.
