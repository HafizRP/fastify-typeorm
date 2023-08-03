import joi from "joi";

export const SignInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const RegisterSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().email().required(),
});

export class SignInInput {
  email: string;
  password: string;
}

export class RegisterInput {
  email: string;
  password: string;
  username: string;
}
