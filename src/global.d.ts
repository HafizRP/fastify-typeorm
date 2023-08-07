import { Repository } from "typeorm";
import { User } from "./modules/user/entity";
import { TodoList } from "./modules/todolist/entity";
import { JWT } from "@fastify/jwt";

declare module "fastify" {
  export interface FastifyRequest {
    jwt: JWT;
  }

  export interface FastifyInstance {
    db: {
      user: Repository<User>;
      todolist: Repository<TodoList>;
    };

    auth: any;

    authenticate: any;
  }
}

declare module "@fastify/jwt" {
  export interface FastifyJWT {
    user: {
      id: number;
      email: string;
    };
  }
}
