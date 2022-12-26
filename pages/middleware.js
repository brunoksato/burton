/*eslint-disable */
import { NextResponse } from "next/server";

export function middleware(req) {
  if (req.nextUrl.pathname === "/delivery") {
    return NextResponse.redirect(
      new URL("https://www.goomer.app/burton-cervejas-artesanais-1", req.url)
    );
  }
  return NextResponse.redirect(new URL("https://www.instagram.com/burtoncervejaria/", req.url));
}

export const config = {
  matcher: "/((?!api|_next/static|favicon.ico).*)"
};
