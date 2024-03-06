import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // return NextResponse.redirect(new URL("/ui-factory/login", request.url));
  
  // removing cache from headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Cache-Control', 'no-cache');
  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
  return response;
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/ui-factory/dashboard",
// };
