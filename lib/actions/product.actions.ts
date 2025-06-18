"use server";
// import { cookies } from "next/headers";
//   const token = cookies().get('authToken')?.value
import { api } from "../axios";
export const getFeaturedProducts = async () => {
  try {
    const res = await api.get("/products/featured-products");

    const featuredProducts = res.data;
    return featuredProducts;
  } catch (err) {
    console.log(err);
  }
};
