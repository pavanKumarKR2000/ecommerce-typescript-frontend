import { z } from "zod";

export const shippingAddressSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name should be a string",
    })
    .min(1, { message: "Name is required" })
    .min(3, { message: "Length of the name should be greater than 2" })
    .trim(),
  address: z.string().min(1, { message: "Address is required" }),
  postalCode: z.coerce
    .number()
    .min(1, { message: "Postal code is required" })
    .positive({ message: "Postal code must be a positive number" }),
  state: z.string().min(1, { message: "State is required" }),
  city: z.string().min(1, { message: "City is required" }),
});
