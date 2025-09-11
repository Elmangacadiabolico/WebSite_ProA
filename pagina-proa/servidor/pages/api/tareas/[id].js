import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'No autenticado' });
  }

  const { id: tareaId } = req.query; // Obtiene el ID de la tarea desde la URL

  // Busca la tarea para asegurarse de que pertenece al usuario logueado
  const tarea = await prisma.tarea.findFirst({
    where: {
      id: tareaId,
      user: { email: session.user.email },
    },
  });

  if (!tarea) {
    return res.status(404).json({ message: 'Tarea no encontrada o no tienes permiso' });
  }

  if (req.method === 'PUT') {
    // Marcar la tarea como completada
    const tareaActualizada = await prisma.tarea.update({
      where: { id: tareaId },
      data: { completada: true },
    });
    return res.status(200).json(tareaActualizada);
  }

  if (req.method === 'DELETE') {
    // Eliminar la tarea
    await prisma.tarea.delete({
      where: { id: tareaId },
    });
    return res.status(204).end(); // 204 No Content
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  return res.status(405).end(`Método ${req.method} no permitido`);
}
