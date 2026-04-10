import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // 🚫 Block access to workspace if not logged in
  if (!token && request.nextUrl.pathname.startsWith("/workspace")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/workspace/:path*"],
};