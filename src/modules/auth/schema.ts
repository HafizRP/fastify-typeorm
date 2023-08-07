import joi from "joi";

export const SignInSchema = joi.object<LoginInput>({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const RegisterSchema = joi.object<RegisterInput>({
  username: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().email().required(),
});

export const SignInResponseSchema = joi.object({
  accessToken: joi.string(),
});

export class LoginInput {
  email: string;
  password: string;
}

export class RegisterInput {
  email: string;
  password: string;
  username: string;
}
