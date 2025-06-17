// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_ROUTES, PROTECTED_ROUTES } from "./lib/constants";

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  console.log("cookie", request.cookies.get("accessToken"));

  const token = request.cookies.get("accessToken")?.value;
  const isAuth = Boolean(token);

  if (isAuth && AUTH_ROUTES.includes(pathName)) {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  if (!isAuth && PROTECTED_ROUTES.includes(pathName)) {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart", "/user/:path*", "/sign-up", "/sign-in", "/cart"], // Only run on these routes
};
