import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { API_URL } from "../../../config";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/user-signin",
    // error: "/404",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        // const url = `${API_URL}/user/login`;
        // const response = await fetch(url, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     // Authorization: `Bearer ${secret}`, //secret from .env
        //   },
        //   body: JSON.stringify(user),
        // });

        // const data = await response.json();

        const response = {
          ok: true,
        }; //fake response

        const data = {
          token: response.ok ? "token from backend" : null,
        }; //fake data

        if (response.ok) {
          // console.log("success", data);
          user.accessToken = data.token; //data.token could change

          return true;
        } else {
          // console.log("error", data);
          return false;
        }
      }

      return false;
    },

    async jwt({ token, user }) {
      if (user) {
        // console.log("jwt token", token);
        token.accessToken = user.accessToken;
      }

      return token;
    },

    async session({ token, session }) {
      if (token) {
        session.accessToken = token.accessToken;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);

//with credentials
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import cookie from "cookie";
// import { API_URL } from "../../../config";

// const nextAuthOptions = (req, res) => {
//   return {
//     // session: {
//     //   strategy: "jwt",
//     // },
//     providers: [
//       CredentialsProvider({
//         name: "Credentials",
//         // credentials: {},
//         authorize: async (credentials) => {
//           // const payload = {
//           //   email: credentials.email,
//           //   password: credentials.password,
//           // };
//           const { ...values } = credentials;

//           const url = `${API_URL}/user/login`;

//           const response = await fetch(url, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//           });

//           const user = await response.json();

//           console.log("main", user);

//           // if (response.ok && user) {
//           if (response.ok && user.token && user.id) {
//             res.setHeader("Set-Cookie", [
//               // cookie.serialize("token", user.token, {
//               //   httpOnly: true,
//               //   secure: process.env.NODE_ENV !== "development",
//               //   maxAge: 30 * 24 * 60 * 60, // 30 days
//               //   sameSite: "strict",
//               //   path: "/",
//               // }),
//               cookie.serialize("id", user.id, {
//                 // httpOnly: true,
//                 // secure: process.env.NODE_ENV !== "development",
//                 maxAge: 30 * 24 * 60 * 60, // 30 days
//                 sameSite: "strict",
//                 path: "/",
//               }),
//             ]);
//             return user;
//           } else {
//             // console.log("error", user);
//             throw new Error(user.error);
//             // throw new Error(user.error || user.message);
//           }
//         },
//       }),
//     ],

//     pages: {
//       signIn: "/user-signin",
//     },

// callbacks: {
//   jwt: async ({ token, user, account }) => {
//     // console.log("xxs", token);
//     if (user) {
//       token.user = user;

//       token.accessToken = user.access_token;

//       // token.token = user.token;
//       // token.id = user.id;
//       // token.role = user.role;
//       // token.user_name = user.user_name;
//       // token.institution_name = user.institution_name;
//     }
//     if (account) {
//       token.accessToken = account.access_token;
//     }

//     // console.log("account is", account);

//     return token;
//   },
//   session: async ({ session, token }) => {
//     if (token) {
//       session.user = token.user;
//       // session.token = token.user.token;
//       // session.id = token.user.id;
//       // session.identity_id = token.user.identity_id;
//     }

//     // console.log("session IS", session);

//     return session;
//   },
// },

//     secret: process.env.NEXTAUTH_SECRET,
//   };
// };

// export default (req, res) => {
//   return NextAuth(req, res, nextAuthOptions(req, res));
// };
