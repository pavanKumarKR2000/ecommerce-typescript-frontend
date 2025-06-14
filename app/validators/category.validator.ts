import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { z } from "zod";

export const productCategorySchema = z.enum(PRODUCT_CATEGORIES, {
  required_error: "Product category is required",
  invalid_type_error: "Product category is invalid",
});

export type ProductCategory = z.infer<typeof productCategorySchema>;
