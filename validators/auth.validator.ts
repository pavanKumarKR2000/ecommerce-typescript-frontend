import { z } from "zod";

export const signUpUserSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .min(3, { message: "Length of the name should be greater than 2" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(6, { message: "Length of the password should be greater than 5" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" })
      .min(6, {
        message: "Length of the confirm password should be greater than 5",
      }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const signInUserSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Length of the password should be greater than 5" }),
});
