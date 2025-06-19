"use server";
import { cookies } from "next/headers";
import { api } from "../axios";
import { revalidatePath } from "next/cache";
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

    revalidatePath("/admin/products");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (id: number, product: any) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await api.put(`/products/${id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    revalidatePath("/admin/products");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = async () => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await api.get("/products", {
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

export const getProduct = async (id: number) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await api.get(`/products/${id}`, {
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

export const deleteProduct = async (id: number) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await api.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    revalidatePath("/admin/products");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
