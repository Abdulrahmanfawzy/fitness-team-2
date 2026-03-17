import * as zod from "zod";
export const ForgotPasswordSchema = zod.object({
  email: zod
    .string()
    .nonempty("email is required")
    .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "invalid email"),
});

export const ResetPasswordSchema = zod
  .object({
    password: zod
      .string()
      .nonempty("password is required")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Use at least 8 characters including letters, numbers, and a special symbol",
      ),
    rePassword: zod.string().nonempty("rePassword is required"),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "password and rePassword moust be the same",
  });
