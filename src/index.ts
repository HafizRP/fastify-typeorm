// Import the framework and instantiate it
import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import db from "./decorators/db";
import userRoutes from "./modules/user/routes";
import authRoutes from "./modules/auth/routes";
import fastifyJwt from "@fastify/jwt";
import { TodoRoutes } from "./modules/todolist/routes";
import auth from "./decorators/auth";

const fastify = Fastify({
  logger: true,
});

async function main() {
  fastify.register(fastifyJwt, {
    secret: "dasdsadasdsasad",
  });

  fastify.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch (error) {
        return reply.send(error);
      }
    }
  );

  for (const key in auth) {
    fastify.decorate(auth[key].name, auth[key].handler);
  }

  fastify.register(db);

  fastify.register(userRoutes, {
    prefix: "api/user",
  });

  fastify.register(authRoutes, {
    prefix: "api/auth",
  });

  fastify.register(TodoRoutes, {
    prefix: "api/todolist",
  });

  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    process.exit(1);
  }
}

main();
