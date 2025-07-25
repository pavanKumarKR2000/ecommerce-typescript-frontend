"use server";

import { api } from "../axios";
import { cookies } from "next/headers";

export const signUpUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/auth/sign-up", {
      name,
      email,
      password,
    });

    const setCookie = res.headers["set-cookie"]?.[0];

    if (setCookie) {
      const [cookieNameValue] = setCookie.split(";");
      const [name, value] = cookieNameValue.split("=");

      (await cookies()).set({
        name,
        value,
        httpOnly: true,
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });
    }

    return res.data;
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong while signing up",
      data: null,
    };
  }
};

export const signInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/auth/sign-in", {
      email,
      password,
    });

    const setCookie = res.headers["set-cookie"]?.[0];

    if (setCookie) {
      const [cookieNameValue] = setCookie.split(";");
      const [name, value] = cookieNameValue.split("=");

      (await cookies()).set({
        name,
        value,
        httpOnly: true,
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });
    }

    return res.data;
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong while signing in",
      data: null,
    };
  }
};

export const signOutUser = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await api.post(
      "/auth/sign-out",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );

    (await cookies()).set({
      name: "accessToken",
      value: "",
      httpOnly: true,
      path: "/",
      maxAge: 0,
    });

    return res.data;
  } catch (err) {
    console.log(err);

    return {
      success: false,
      message: "Something went wrong while signing out",
      data: null,
    };
  }
};
