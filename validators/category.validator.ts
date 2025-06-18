import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { z } from "zod";

export const productCategorySchema = z.enum(
  PRODUCT_CATEGORIES.map((category) => category.name) as any,
  {
    required_error: "Category is required",
    invalid_type_error: "Category is invalid",
  },
);
