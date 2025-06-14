import { z } from "zod";
import { productCategorySchema } from "./category.validator";

export const createProductSchema = z.object({
  name: z
    .string({
      required_error: "Product name is required",
      invalid_type_error: "Product name should be a string",
    })
    .min(1, { message: "Product name is required" })
    .trim(),
  description: z.string().optional(),
  price: z
    .number({
      required_error: "Product price is required",
      invalid_type_error: "Product price should be a number",
    })
    .positive({ message: "Price must be a positive number" }),
  inStock: z.boolean().optional().default(true),
  category: productCategorySchema,
  image: z.string().optional(),
});
