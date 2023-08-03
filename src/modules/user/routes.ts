import { FastifyInstance } from "fastify";

async function userRoutes(server: FastifyInstance) {
  server.get("/", (req, res) => {
    res.send("Hello World!");
  });
}

export default userRoutes;
