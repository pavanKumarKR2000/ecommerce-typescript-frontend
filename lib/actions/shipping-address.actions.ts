"use server";
import { cookies } from "next/headers";
import { api } from "../axios";

export const addShippingAddress = async (shippingAddress: any) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await api.post("/shipping-addresses", shippingAddress, {
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

export const getShippingAddressesOfUser = async () => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await api.get("/shipping-addresses", {
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
