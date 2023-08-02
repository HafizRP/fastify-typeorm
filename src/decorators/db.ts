import "reflect-metadata";

import fastifyPlugin from "fastify-plugin";
import { DataSource } from "typeorm";
import { TodoList } from "../modules/todolist/entity";
import { User } from "../modules/user/entity";
export default fastifyPlugin(async (app) => {
  const connection = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "fastify-typeorm",
    entities: [TodoList, User],
    synchronize: true,
  });

  try {
    const d = await connection.initialize();

    app.decorate("db", {
      user: d.getRepository(User),
      todolist: d.getRepository(TodoList),
    });
  } catch (error) {
    console.log(error);
  }
});
