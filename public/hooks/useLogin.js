import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function useLogin() {
  const router = useRouter();

  const { data, status } = useSession();

  const loginUser = async (values) => {
    const res = await signIn("credentials", {
      ...values,
      // callbackUrl: `${window.location.origin}/dashboard`,
      redirect: false,
    });

    // const { ok, error } = res;

    if (res?.ok) {
      console.log(res);
      router.reload();
      // router.push("/dashboard");
      // toast.success("Signed in Successfully");
    }

    if (res?.error) {
      // router.reload();
      console.log(res);
      toast.error(res?.error);
    }
  };

  // const loginUser = (values) => {
  //   signIn("credentials", {
  //     ...values,
  //     loginRoute,
  //     redirect: false,
  //     // The page where you want to redirect to after a
  //     // successful login
  //     // callbackUrl: `${window.location.origin}/${dashboardRoute}`,
  //     // callbackUrl: dashboardRoute,
  //   }).then(({ ok, error }) => {
  //     if (ok) {
  //       // id && Cookies.set("id", id, { expires: 30 });
  //       // user_name && Cookies.set("user_name", user_name, { expires: 30 });
  //       // institution_name &&
  //       //   Cookies.set("institution_name", institution_name, { expires: 30 });
  //       // role && Cookies.set("role", role, { expires: 30 });
  //       router.push(`/${dashboardRoute}`);
  //     } else {
  //       console.log(error);
  //       toast.error(error);
  //     }
  //   });
  // };

  return { loginUser };
}

export default useLogin;
