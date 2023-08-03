import { FastifyInstance } from "fastify";
import { register, login } from "./controller";
import { SignInSchema } from "./schema";

async function authRoutes(server: FastifyInstance) {
  server.post("/login", login);
  server.post("/register", register);
}

export default authRoutes;
