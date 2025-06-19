"use server";
import { cookies } from "next/headers";
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

export const addProduct = async (product: any) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await api.post("/products", product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
