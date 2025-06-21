import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name should be a string",
    })
    .min(1, { message: "Name is required" })
    .min(3, { message: "Length of the name should be greater than 2" })
    .trim(),
  description: z.string().optional(),
  price: z.coerce
    .number()
    .min(1, { message: "Price is required" })
    .positive({ message: "Price must be a positive number" }),
  stock: z.coerce
    .number()
    .min(0, { message: "Stock is required" })
    .nonnegative({ message: "Stock must be a positive number" }),
  brand: z
    .string()
    .min(1, { message: "Brand is required" })
    .min(3, { message: "Length of the brand should be greater than 2" }),
  category: z.string({
    required_error: "Category is required",
  }),
  images: z.array(z.string()).optional(),
  isFeatured: z.boolean().default(false),
});

export const updateProductSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name should be a string",
    })
    .min(1, { message: "Name is required" })
    .min(3, { message: "Length of the name should be greater than 2" })
    .trim(),
  description: z.string().optional(),
  price: z.coerce
    .number()
    .min(1, { message: "Price is required" })
    .positive({ message: "Price must be a positive number" }),
  stock: z.coerce
    .number()
    .min(0, { message: "Stock must be a positive number" }),
  brand: z
    .string()
    .min(1, { message: "Brand is required" })
    .min(3, { message: "Length of the brand should be greater than 2" }),
  category: z.string({
    required_error: "Category is required",
  }),
  isFeatured: z.boolean().default(false),
});
