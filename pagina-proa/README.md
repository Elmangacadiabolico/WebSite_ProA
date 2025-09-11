# Pagina Proa - Proyecto Full-Stack

Este repositorio contiene un proyecto web full-stack compuesto por un frontend desarrollado con React + Vite y un backend desarrollado con Next.js.

## Arquitectura del Proyecto

El proyecto está organizado en dos partes principales:

-   `/` (raíz): Contiene el frontend de React.
-   `/servidor`: Contiene el backend de Next.js, que gestiona la lógica de negocio, las API y la autenticación.

---

## Cómo Ejecutar la Aplicación Completa

Para trabajar en el proyecto, necesitarás 3 terminales separadas.

**Terminal 1: Iniciar la Base de Datos**
(Asegúrate de que Docker Desktop esté corriendo)
```sh
# En la raíz del proyecto
docker-compose up -d
```

**Terminal 2: Iniciar el Backend (API)**
```sh
# En la raíz del proyecto
cd servidor
npm run dev
```

**Terminal 3: Iniciar el Frontend (Interfaz de Usuario)**
```sh
# En la raíz del proyecto
npm run dev
```

**URLs importantes:**
- Frontend (tu app): `http://localhost:5173`
- Backend (API): `http://localhost:3000`
- Página de login: `http://localhost:3000/api/auth/signin`

---

## Configuración (Solo la primera vez)

Sigue estos pasos en orden para instalar y configurar todo el proyecto.

### 1. Instalar Dependencias

**a) Frontend:**
```sh
# En la raíz del proyecto
npm install
```

**b) Backend:**
```sh
# En la raíz del proyecto, navega a la carpeta del servidor e instala
cd servidor
npm install
```

### 2. Configurar Base de Datos

1.  **Iniciar Docker:** Asegúrate de que la aplicación Docker Desktop esté corriendo.
2.  **Levantar Contenedor:** En la raíz del proyecto, ejecuta:
    ```sh
    docker-compose up -d
    ```
3.  **Sincronizar Base de Datos:** Vuelve a la carpeta del servidor y ejecuta `prisma db push` para crear las tablas.
    ```sh
    # Si no estás en la carpeta "servidor", entra con: cd servidor
    npx prisma db push
    ```

### 3. Configurar Variables de Entorno (Backend)

Dentro de la carpeta `/servidor`, crea un archivo llamado `.env` y añade las siguientes claves. **¡No compartas este archivo!**

-   `DATABASE_URL`: Debe ser `postgresql://proa_user:proa_password@localhost:5432/proa_db`
-   `GOOGLE_CLIENT_ID`: Tu ID de cliente de Google.
-   `GOOGLE_CLIENT_SECRET`: Tu secreto de cliente de Google.
-   `NEXTAUTH_SECRET`: Una clave secreta larga y aleatoria para firmar las sesiones.

---

## Tecnologías Utilizadas

- **Frontend:** React, Vite, React Router, Bootstrap, Axios.
- **Backend:** Next.js, Next-Auth, Prisma.
- **Base de Datos:** PostgreSQL con Docker.
