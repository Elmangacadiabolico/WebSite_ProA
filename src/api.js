import axios from 'axios';

// Se crea una instancia de Axios con una configuración base.
// Todas las peticiones que usen esta instancia apuntarán a la URL del backend.

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Ajusta la URL si es diferente
  withCredentials: true, // Importante para enviar cookies de sesión
});

export default apiClient;
