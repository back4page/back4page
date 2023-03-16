import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

function useLogOut() {
  const { data } = useSession();
  const router = useRouter();

  const logoutUser = () => {
    signOut({
      callbackUrl: `${window.location.origin}/user-signin`,
      // redirect: false,
    });
  };

  return { logoutUser };
}

export default useLogOut;

//with credentials
// import { useRouter } from "next/router";
// import Cookies from "js-cookie";
// // import cookie from "cookie";
// import { signOut, useSession } from "next-auth/react";

// function useLogOut() {
//   // const dispatch = useDispatch();

//   const { data } = useSession();
//   const router = useRouter();

//   const logoutUser = () => {
//     signOut({
//       callbackUrl: `${window.location.origin}/user-signin`,
//       // redirect: false,
//     });

//     Cookies.remove("id");

//     // await router.push("/user-signin");
//   };

//   return { logoutUser };
// }

// export default useLogOut;
