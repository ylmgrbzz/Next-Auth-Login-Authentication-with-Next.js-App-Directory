// import nextauth
import NextAuth from "next-auth";

const handler = (req, res) => NextAuth(req, res);

export { handler as GET, handler as POST };
