"use server";
import { redirect } from "next/navigation";
// import { cookies } from "next/headers";
//   const token = cookies().get('authToken')?.value
import { api } from "../axios";
import { setTimeout } from "node:timers";

export const signUpUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  console.log({ name, email, password });

  try {
    // const res = await api.get("/products/featured-products");
    // const featuredProducts = res.data;
    // return featuredProducts;
    await new Promise((res, rej) => {
      setTimeout(() => {
        res("");
      }, 5000);
    });

    return {
      success: true,
      message: "user signed up successfully",
      data: { id: 1, name, email, role: "user" },
    };
  } catch (err) {
    // console.log(err);
    // redirect("/error");
  }
};

export const signInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  console.log({ email, password });

  try {
    // const res = await api.get("/products/featured-products");
    // const featuredProducts = res.data;
    // return featuredProducts;
    await new Promise((res, rej) => {
      setTimeout(() => {
        res("");
      }, 5000);
    });

    return {
      success: true,
      message: "user signed up successfully",
      data: { id: 1, email, role: "user" },
    };
  } catch (err) {
    // console.log(err);
    // redirect("/error");
  }
};
