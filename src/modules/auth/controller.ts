import { FastifyReply, FastifyRequest } from "fastify";
import {
  RegisterInput,
  RegisterSchema,
  LoginInput,
  SignInSchema,
} from "./schema";

import * as argon from "argon2";

export async function login(
  request: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply
) {
  try {
    const body = await SignInSchema.validateAsync(request.body);

    const user = await request.server.db.user.findOneBy({ email: body.email });

    if (!user)
      throw reply.status(401).send({
        message: "Invalid Credentials",
      });

    const password = argon.verify(user.password, body.password);

    if (!password)
      throw reply.status(401).send({
        message: "Invalid Credentials",
      });

    return reply.code(200).send({
      access_token: request.server.jwt.sign({ id: user.id, email: user.email }),
    });
  } catch (error) {
    throw error;
  }
}

export async function register(
  request: FastifyRequest<{ Body: RegisterInput }>,
  reply: FastifyReply
) {
  try {
    const { password: hash, ...body } = await RegisterSchema.validateAsync(
      request.body
    );

    const users = await request.server.db.user.findOneBy({ email: body.email });

    if (users) return reply.code(401).send({ message: "Credentials Used!" });

    const password = await argon.hash(hash);
    const { password: userPass, ...user } = await request.server.db.user.save({
      ...body,
      password,
    });

    return reply.code(201).send({ message: "User Created", user });
  } catch (error) {
    throw error;
  }
}
