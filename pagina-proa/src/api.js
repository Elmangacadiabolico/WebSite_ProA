import axios from 'axios';

// Se crea una instancia de Axios con una configuración base.
// Todas las peticiones que usen esta instancia apuntarán a la URL del backend.

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Apunta al backend de Next.js y a su carpeta /api
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
