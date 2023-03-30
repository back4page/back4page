// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// // import { getServerSession } from "next-auth";
// // import { authOptions } from "./pages/api/auth/[...nextauth]";

// const secret = process.env.NEXTAUTH_SECRET;

// export default async function middleware(req, res) {
//   // const { url, nextauth } = req;
//   const { origin, pathname } = req.nextUrl;

//   // const session = getServerSession(req, res, authOptions);

//   // console.log("session fom middleware", session);

//   const jwt = await getToken({ req, secret });
//   const token = jwt?.user?.token;

//   console.log("middleware token", token);

//   const redirectPage = () => NextResponse.redirect(`${origin}/user-signin`);

//   // if (!token) {
//   //   // if (pathname.startsWith("/post-ad")) {
//   //   //   return NextResponse.rewrite(new URL(`${origin}/user-signin`, req.url));
//   //   // }

//   //   if (pathname.startsWith("/post-ad")) {
//   //     return redirectPage();
//   //   }
//   //   if (pathname === "/dashboard") {
//   //     return redirectPage();
//   //   }
//   //   if (pathname === "/user-profile") {
//   //     return redirectPage();
//   //   }
//   //   if (pathname === "/buy-credit") {
//   //     return redirectPage();
//   //   }
//   //   if (pathname === "/premium") {
//   //     return redirectPage();
//   //   }
//   //   if (pathname === "/message-blast") {
//   //     return redirectPage();
//   //   }
//   //   if (pathname === "/my-ads") {
//   //     return redirectPage();
//   //   }
//   //   return NextResponse.next();
//   // }

//   return NextResponse.next();
// }

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/post-ad/:path*",
    "/dashboard",
    "/user-profile",
    "/buy-credit",
    "/premium",
    "/message-blast",
    "/my-ads/:path*",
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
