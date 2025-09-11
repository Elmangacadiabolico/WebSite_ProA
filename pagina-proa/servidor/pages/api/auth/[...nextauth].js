import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  // Usar el adaptador de Prisma para conectar Next-Auth a la base de datos
  adapter: PrismaAdapter(prisma),

  // Configurar los proveedores de autenticación
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Puedes añadir más proveedores aquí (GitHub, Facebook, etc.)
  ],

  // Configuración de la sesión
  session: {
    strategy: 'jwt', // Usar JSON Web Tokens para las sesiones
  },

  // Callbacks para personalizar el comportamiento
  callbacks: {
    async jwt({ token, user }) {
      // Añadir el ID del usuario al token JWT después del inicio de sesión
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Añadir el ID del usuario a la sesión para que esté disponible en el frontend
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },

  // URL secreta para firmar los JWT
  secret: process.env.NEXTAUTH_SECRET,
});