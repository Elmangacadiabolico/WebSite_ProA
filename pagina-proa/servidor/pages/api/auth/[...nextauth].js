import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await fetch(process.env.DATABASE_BUILD_URL + "/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            name: user.name,
            provider: "google",
          }),
        });
      } catch (err) {
        console.error("Error guardando en DB:", err);
      }
      return true;
    },
    async session({ session }) {
      session.user.role = "user";
      return session;
    },
  },
});
