import React from "react";
import { Formik, Form } from "formik";
import Layout from "../components/Layout";
import { TextField } from "../components/common/InputField";
import { FaAt, FaLock } from "react-icons/fa";
import Link from "next/link";
import { API_URL } from "../config";
import useLogin from "../hooks/useLogin";
import { getSession } from "next-auth/react";
// import { unstable_getServerSession } from "next-auth";
// import { RotatingLines } from "react-loader-spinner";
// import { ToastContainer, toast } from "react-toastify";

function UserSigninPage() {
  const initialvalues = {
    email: "",
    password: "",
  };

  const { loginUser } = useLogin();

  const handleSubmit = async (values, formik) => {
    // console.log(values);

    loginUser(values);

    // const url = `${API_URL}/user/login`;

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });

    // const data = await res.json();

    // if (res.ok) {
    //   console.log("success", data);
    //   // formik.resetForm();
    // } else {
    //   console.log("error", data);
    // }
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="font-roboto pt-[30px] pb-[360px] flex justify-center font-thin">
        <div className="lg:w-[540px]">
          <h1 className="text-center text-[32px] text-white">
            Sign in: Bedpage
          </h1>

          <div className="pt-10 pb-4">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="">
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      icon={<FaAt />}
                    />
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      autoComplete="on"
                      icon={<FaLock />}
                    />
                    <div className="grid grid-cols-3">
                      <div className="col-start-3 col-span-2">
                        <button
                          type="submit"
                          className="button capitalize px-[12px] py-[7px]"
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="flex flex-col items-center">
            <div className="lg:pr-32 text-center font-extralight text-custom-yellow2 hover:text-custom-blue2 hover:underline">
              <Link href="/user-reset">Forgot Password?</Link>
            </div>
            <p className="pt-[41px] font-extralight text-custom-yellow2">
              Don`t have an account?
            </p>

            {/* <button className="button self-end mt-4 mr-[116px] capitalize px-[13px] py-[7px]">
              Join Now
            </button> */}

            <Link href="/user-signup" passHref>
              <a>
                <button className="button ml-[180px] lg:ml-[220px] mt-4 capitalize px-[13px] py-[7px]">
                  Sign Up
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // const session = await unstable_getServerSession(context.req, context.res);

  console.log("session is", session);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default UserSigninPage;
