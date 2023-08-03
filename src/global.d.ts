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
