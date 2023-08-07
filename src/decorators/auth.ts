import { FastifyReply, FastifyRequest } from "fastify";

async function rolesAuth(request: FastifyRequest, reply: FastifyReply) {}

export default [
  {
    name: "auth",
    handler: rolesAuth,
  },
];
