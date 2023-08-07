import { FastifyReply, FastifyRequest } from "fastify";

export async function getTodos(request: FastifyRequest, reply: FastifyReply) {
  return request.server.db.todolist.find();
}
