// Import the framework and instantiate it
import Fastify from "fastify";
import db from "./decorators/db";
import userRoutes from "./modules/user/routes";
import authRoutes from "./modules/auth/routes";

const fastify = Fastify({
  logger: true,
});

async function main() {
  fastify.register(db);

  fastify.register(userRoutes, {
    prefix: "api/user",
  });

  fastify.register(authRoutes, {
    prefix: "api/auth",
  });

  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
