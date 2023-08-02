// Import the framework and instantiate it
import Fastify from "fastify";
import db from "./decorators/db";

import { Repository } from "typeorm";
import { User } from "./modules/user/entity";
import { TodoList } from "./modules/todolist/entity";

declare module "fastify" {
  export interface FastifyInstance {
    db: {
      user: Repository<User>;
      todolist: Repository<TodoList>;
    };
  }
}

const fastify = Fastify({
  logger: true,
});

async function main() {
  fastify.register(db);

  fastify.get("/", (request, reply) => {
    return fastify.db.user;
  });

  try {
    await fastify.listen({ port: 3000 });
    console.log("app was running");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
