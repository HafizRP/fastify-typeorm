import { FastifyReply, FastifyRequest } from "fastify";
import {
  RegisterInput,
  RegisterSchema,
  SignInInput,
  SignInSchema,
} from "./schema";

export async function login(
  request: FastifyRequest<{ Body: SignInInput }>,
  reply: FastifyReply
) {
  try {
    const body: SignInInput = await SignInSchema.validateAsync(request.body);
    return body;
  } catch (error) {
    throw error;
  }
}

export async function register(
  request: FastifyRequest<{ Body: RegisterInput }>,
  reply: FastifyReply
) {
  try {
    const body = await RegisterSchema.validateAsync(request.body);

    return body;
  } catch (error) {
    throw error;
  }
}
