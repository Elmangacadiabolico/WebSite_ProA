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

El backend está construido con Next.js y se encarga de la API, la conexión a la base de datos con Prisma y la autenticación de usuarios con Next-Auth.

### Tecnologías Utilizadas (Backend)

-   [Next.js](https://nextjs.org/)
-   [Next-Auth](https://next-auth.js.org/) para la autenticación.
-   [Prisma](https://www.prisma.io/) como ORM para la base de datos.
-   [PostgreSQL](https://www.postgresql.org/) como base de datos, gestionada con Docker.

### Configuración de la Base de Datos (Primera vez)

1.  **Iniciar Docker:** Asegúrate de que la aplicación Docker Desktop esté corriendo.
2.  **Levantar el contenedor:** En la raíz del proyecto, ejecuta:
    ```sh
    docker-compose up -d
    ```
3.  **Sincronizar la base de datos:** Prisma necesita crear las tablas a partir del esquema. Ejecuta:
    ```sh
    cd servidor && npx prisma db push
    ```

### Cómo Empezar (Backend)

1.  **Navega a la carpeta del servidor:**
    ```sh
    cd servidor
    ```
2.  **Instala las dependencias:**
    ```sh
    npm install
    ```
3.  **Configura las variables de entorno:**
    *   Crea una copia del archivo `.env.example` (si existe) y renómbrala a `.env`.
    *   Añade tus credenciales de Google y un `NEXTAUTH_SECRET`.
    *   La `DATABASE_URL` ya debería estar configurada por `prisma init`.
4.  **Ejecuta el servidor de desarrollo:**
    ```sh
    npm run dev
    ```
    El servidor de la API estará disponible en `http://localhost:3000`.

## Scripts Disponibles

Cada parte (frontend y backend) tiene sus propios scripts (`dev`, `build`, `lint`, etc.) que se ejecutan desde sus respectivas carpetas.
