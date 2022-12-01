import { getSession } from "next-auth/react";

export async function redirectPage(context, callback) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/user-signin",
        permanent: false,
      },
    };
  }

  return callback();
}
