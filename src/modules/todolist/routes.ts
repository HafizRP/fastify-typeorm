import { FastifyInstance } from "fastify";
import { getTodos } from "./controller";

export async function TodoRoutes(server: FastifyInstance) {
  server.get("/", { preHandler: [server.authenticate, server.auth] }, getTodos);
}
