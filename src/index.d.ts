import { User } from "./modules/user/entity";

import { TodoList } from "./modules/todolist/entity";
import { Repository } from "typeorm";

declare module "fastify" {
  export interface FastifyInstance {
    db: {
      user: Repository<User>;
      todolist: Repository<TodoList>;
    };
  }
}
