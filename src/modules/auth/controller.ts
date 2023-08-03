import { FastifyReply, FastifyRequest } from "fastify";

export async function signIn(request: FastifyRequest, reply: FastifyReply) {
  return reply.send("Hello");
}
