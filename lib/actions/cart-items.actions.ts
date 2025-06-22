"use server";
import { cookies } from "next/headers";
import { api } from "../axios";

export const addCartItem = async (productId: number, quantity: number) => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await api.post(
      "/cart/items",
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateCartItem = async (
  id: number,
  productId: number,
  quantity: number,
) => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await api.put(
      `/cart/items/${id}`,
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
