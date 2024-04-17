import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const isSignedIn = request.cookies.get("signedIn")?.value;
    if(!isSignedIn)
    {
      return NextResponse.redirect(new URL('/ui-factory/signin', request.url));
    }

}
export const config = {
  matcher: ['/ui-factory/add-component', '/ui-factory/admin-dashboard', '/ui-factory/user-queries'],
}
