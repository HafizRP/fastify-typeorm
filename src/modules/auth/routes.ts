import { FastifyInstance } from "fastify";
import { register, login } from "./controller";
import j2s from "joi-to-swagger";
import { SignInResponseSchema } from "./schema";

async function authRoutes(server: FastifyInstance) {
  server.post("/login", login);
  server.post("/register", register);
}

export default authRoutes;
