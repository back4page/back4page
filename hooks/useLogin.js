import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function useLogin() {
  const router = useRouter();

  const { data, status } = useSession();

  const loginUser = async (values) => {
    const res = await signIn("google", {
      // callbackUrl: `${window.location.origin}/dashboard`,
    });

    if (res?.ok) {
      console.log("res", res);
      router.reload();
      // toast.success("Signed in Successfully");
      toast.success("Signed in Successfully");
      // router.push("/dashboard");
    }

    if (res?.error) {
      // router.reload();
      console.log(res);
      toast.error(res?.error);
    }
  };

  return { loginUser };
}

export default useLogin;

//with credentials
// import { toast } from "react-toastify";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/router";

// function useLogin() {
//   const router = useRouter();

//   const { data, status } = useSession();

//   const loginUser = async (values) => {
//     const res = await signIn("credentials", {
//       ...values,
//       // callbackUrl: `${window.location.origin}/dashboard`,
//       redirect: false,
//     });

//     // const { ok, error } = res;

//     if (res?.ok) {
//       console.log(res);
//       router.reload();
//       // toast.success("Signed in Successfully");
//       toast.success("Signed in Successfully");
//       // router.push("/dashboard");
//     }

//     if (res?.error) {
//       // router.reload();
//       console.log(res);
//       toast.error(res?.error);
//     }
//   };

//   return { loginUser };
// }

// export default useLogin;
