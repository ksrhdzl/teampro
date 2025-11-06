// import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import i18nMiddleware from 'next-intl/middleware';
import { routing } from '@/libraries/i18n/routing';

export async function proxy(request: NextRequest) {
  const handleI18n = await i18nMiddleware(routing);

  // const url = request.nextUrl;
  // let hostname = request.headers.get("host") || "";

  // // Remove port if it exists
  // hostname = hostname.split(":")[0];

  // // Define allowed domains (including main domain and localhost)
  // const allowedDomains = ["localhost"];

  // // Check if the current hostname is in the list of allowed domains
  // const isMainDomain = allowedDomains.includes(hostname);

  // // Extract subdomain if not a main domain
  // const subdomain = isMainDomain ? null : hostname.split(".")[0];

  // console.log('Middleware: Hostname:', hostname);
  // console.log('Middleware: Subdomain:', subdomain);

  // If it's a main domain, allow the request to proceed
  // if (isMainDomain) {
  //   console.log('Middleware: Main domain detected, passing through');
  //   return NextResponse.next();
  // }

  // Handle subdomain logic
  // if (subdomain) {
  //   try {
  //     // Use fetch to verify if the subdomain exists
  //     const response = await fetch(
  //       `${url.origin}/api/tenant?subdomain=${subdomain}`,
  //     );

  //     if (response.ok) {
  //       console.log('Middleware: Valid subdomain detected, rewriting URL');
  //       // Rewrite the URL to a dynamic route based on the subdomain
  //       return NextResponse.rewrite(
  //         new URL(`/${subdomain}${url.pathname}`, req.url),
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Middleware: Error fetching tenant:', error);
  //   }
  // }

  // console.log('Middleware: Invalid subdomain or domain, returning 404');
  // If none of the above conditions are met, return a 404 response
  // return new NextResponse(null, { status: 404 });

  return handleI18n(request);
}
export const config = {
  matcher: [
    // '/((?!api|_next/static|_static|_next/image|favicon.ico|sitemap.xml|robots.txt|[\\w-]+\\.\\w+).*)',
    // matcher: ["/", "/(ar|en|fa|ku)/:path*"],
    // ----
    // Match all pathnames except for
    // - … if they start with `/app`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|favicon|day|wus/calendar|wus/live|mob/calendar|mob/live|stage/calendar|stage/live|_next|.*\\..*).*)',
    // matcher: '/((?!app|.*\\..*).*)',
  ],
};
// export async function middleware(request: NextRequest): Promise<NextResponse> {
//   if (request.method === "GET") {
//     const response = NextResponse.next();
//     const session = request.cookies.get("session")?.value ?? null;
//     if (session !== null) {
//       // Only extend cookie expiration on GET requests since we can be sure
//       // a new session wasn't set when handling the request.
//       response.cookies.set("session", session, {
//         path: "/",
//         maxAge: 60 * 60 * 24 * 30,
//         sameSite: "lax",
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//       });
//     }
//     return response;
//   }

//   const originHeader = request.headers.get("Origin");
//   // NOTE: You may need to use `X-Forwarded-Host` instead
//   const hostHeader = request.headers.get("Host");
//   if (originHeader === null || hostHeader === null) {
//     return new NextResponse(null, {
//       status: 403,
//     });
//   }
//   let origin: URL;
//   try {
//     origin = new URL(originHeader);
//   } catch {
//     return new NextResponse(null, {
//       status: 403,
//     });
//   }
//   if (origin.host !== hostHeader) {
//     return new NextResponse(null, {
//       status: 403,
//     });
//   }
//   return NextResponse.next();
// }

// ----------------
// import { cookies } from 'next/headers';
// import { NextRequest, NextResponse } from 'next/server';
// import { decrypt } from './libraries/utilities/session.utility';

// // 1. Specify protected and public routes
// const protectedRoutes = ['/dashboard'];
// const publicRoutes = ['/login', '/signup', '/'];

// export default async function middleware(req: NextRequest) {
//   // 2. Check if the current route is protected or public
//   const path = req.nextUrl.pathname;
//   const isProtectedRoute = protectedRoutes.includes(path);
//   const isPublicRoute = publicRoutes.includes(path);

//   // 3. Decrypt the session from the cookie
//   const cookie = (await cookies()).get('session')?.value;
//   const session = await decrypt(cookie);

//   // 4. Redirect to /login if the user is not authenticated
//   if (
//     // isProtectedRoute &&
//     !session?.userId
//   ) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl));
//   }

//   // 5. Redirect to /dashboard if the user is authenticated
//   if (
//     // isPublicRoute &&
//     session?.userId &&
//     !req.nextUrl.pathname.startsWith('/dashboard')
//   ) {
//     return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
//   }

//   return NextResponse.next();
// }

// // Routes Middleware should not run on
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };
