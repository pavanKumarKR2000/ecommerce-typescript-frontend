import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { z } from "zod";

export const productCategorySchema = z.enum(
  PRODUCT_CATEGORIES.map((category) => category.name) as any,
  {
    required_error: "Product category is required",
    invalid_type_error: "Product category is invalid",
  },
);

//<string, readonly [string, ...string[]]
export type ProductCategory = z.infer<typeof productCategorySchema>;
