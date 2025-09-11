import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });

  // Proteger el endpoint: solo para usuarios autenticados
  if (!session) {
    return res.status(401).json({ message: 'No autenticado' });
  }

  // Obtener el email del usuario de la sesión
  const userEmail = session.user.email;

  // Buscar el usuario en la base de datos
  const user = await prisma.user.findUnique({ where: { email: userEmail } });
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  if (req.method === 'GET') {
    // Obtener todas las tareas del usuario
    const tareas = await prisma.tarea.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    });
    return res.status(200).json(tareas);
  }

  if (req.method === 'POST') {
    const { titulo } = req.body;

    if (!titulo) {
      return res.status(400).json({ message: 'El título es requerido' });
    }

    // Crear una nueva tarea asociada al usuario
    const nuevaTarea = await prisma.tarea.create({
      data: {
        titulo,
        user: {
          connect: { id: user.id },
        },
      },
    });
    return res.status(201).json(nuevaTarea);
  }

  // Si es otro método HTTP, no está permitido
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Método ${req.method} no permitido`);
}
