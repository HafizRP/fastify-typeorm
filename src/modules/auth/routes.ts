import { FastifyInstance } from "fastify";
import { signIn } from "./controller";

async function authRoutes(server: FastifyInstance) {
  server.get("/", (request, reply) => {
    reply.send("Hello World!");
  });
  server.post("/", signIn);
}

export default authRoutes;
