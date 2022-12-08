// // import { withAuth } from "next-auth/middleware";
// // import { NextResponse } from "next/server";

// // export default withAuth(
// //   function middleware(req) {
// //     return NextResponse.redirect(new URL("/admin", req.url));
// //   },
// //   {
// //     callbacks: {
// //       authorized({ token }) {
// //         return token?.role === "super admin";
// //       },
// //     },
// //   }
// // );

// // export const config = {
// //   matchers: ["/", "/login:path*"],
// // };

// // export { default } from "next-auth/middleware"
// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";

// // import { Session } from "next-auth";

// // export default withAuth(function middleware(req) {
// //   const { url, nextauth } = req;
// //   const { origin, pathname } = req.nextUrl;

// //   console.log("nextauth", nextauth.token.user.token);

// //   // if (pathname === "/dashboard") {
// //   //   return NextResponse.redirect(`${origin}/user-signin`);
// //   // }
// //   // if (url.includes("/post-ad")) {
// //   //   return NextResponse.redirect(`${origin}/user-signin`);
// //   // }
// //   return NextResponse.next();
// // });

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export default async function middleware(req) {
  // const { url, nextauth } = req;
  const { origin, pathname } = req.nextUrl;

  const jwt = await getToken({ req, secret });
  const token = jwt?.user?.token;

  // console.log("middleware token", token);

  const redirectPage = () => NextResponse.redirect(`${origin}/user-signin`);

  if (!token) {
    // if (pathname.startsWith("/post-ad")) {
    //   return NextResponse.rewrite(new URL(`${origin}/user-signin`, req.url));
    // }

    if (pathname.startsWith("/post-ad")) {
      return redirectPage();
    }
    if (pathname === "/dashboard") {
      return redirectPage();
    }
    if (pathname === "/user-profile") {
      return redirectPage();
    }
    if (pathname === "/buy-credit") {
      return redirectPage();
    }
    if (pathname === "/premium") {
      return redirectPage();
    }
    if (pathname === "/message-blast") {
      return redirectPage();
    }
    if (pathname === "/my-ads") {
      return redirectPage();
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/post-ad/:path*",
    "/dashboard",
    "/user-profile",
    "/buy-credit",
    "/premium",
    "/message-blast",
    "/my-ads",
    // "/post-ad/:path",
  ],
};

// // with next auth
// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: [
//     "/dashboard",
//     "/user-profile",
//     "/buy-credit",
//     "/premium",
//     "/message-blast",
//     "/my-ads",
//     // "/user-signin",
//     "/post-ad/:path*",
//   ],
// };
