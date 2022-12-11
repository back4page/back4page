import React, { useState } from "react";
import { Formik, Form } from "formik";
import Layout from "../components/Layout";
import { CodeField, TextField } from "../components/common/InputField";
import { FaAlignLeft, FaAt, FaBullhorn, FaLock } from "react-icons/fa";
import Link from "next/link";
import usePostData from "../hooks/usePostData";
import { API_URL } from "../config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useLogin from "../hooks/useLogin";
import { getSession, useSession } from "next-auth/react";

function UserSignupPage() {
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const router = useRouter();

  const initialvalues = {
    name: "",
    email: "",
    password: "",
    retype_password: "",
    // promo_code: "",
  };

  // const { postData } = usePostData("/user/signup");

  const { data } = useSession();

  const { loginUser } = useLogin();

  const handleSubmit = async (values, formik) => {
    const { name, email, password, retype_password } = values;
    if (password !== retype_password) {
      setPasswordMatchError(true);
    } else {
      // console.log({ name, email, password });
      setPasswordMatchError(false);

      // postData(values);

      const url = `${API_URL}/user/signup`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("success", data);
        // toast.success(data?.message);
        router.push("/verification");
        // toast.success("Account Created Successfully");
        // loginUser({ email, password });
        // if (data) {
        //   router.push("/dashboard");
        // }
        // router.push("/user-signin");
        // formik.resetForm();
      } else {
        console.log("error", data);
        toast.error(data?.message);
      }
    }
  };

  return (
    <>
      <div className="font-roboto pt-[30px] pb-[50px] flex justify-center font-thin">
        <div className="lg:w-[540px]">
          <h1 className="text-center text-[32px] text-white mb-3">
            Join with back4page
          </h1>

          <div className="pt-16 pb-4 border-t border-custom-yellow2">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="">
                    <TextField
                      label="Name"
                      name="name"
                      type="text"
                      icon={<FaAlignLeft />}
                      required
                    />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      icon={<FaAt />}
                      required
                    />
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      autoComplete="on"
                      icon={<FaLock />}
                      required
                    />
                    <TextField
                      label="Retype Password"
                      name="retype_password"
                      type="password"
                      autoComplete="on"
                      icon={<FaLock />}
                      required
                    />
                    {passwordMatchError && (
                      <div className="grid grid-cols-3 mb-[18px]">
                        <p className="col-start-2 col-end-4 text-sm">
                          Password does not match
                        </p>
                      </div>
                    )}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="button mt-2 capitalize px-[12px] py-[7px]"
                      >
                        Sign Up
                      </button>
                    </div>

                    {/* <div className="lg:flex justify-between">
                      <div className="">
                        {!showCodeInput ? (
                          <p
                            className="cursor-pointer"
                            onClick={() => setShowCodeInput(true)}
                          >
                            I have a promo code
                          </p>
                        ) : (
                          <CodeField
                            label="PROMO CODE"
                            name="promo_code"
                            type="text"
                            icon={<FaBullhorn />}
                          />
                        )}
                      </div>

                      <div className="">
                        <button
                          type="submit"
                          className="button self-end mt-2 lg:mt-0 ml-[180px] lg:ml-0 lg:mr-[80px] capitalize px-[12px] py-[7px]"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div> */}
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="mt-10 pt-5 border-t border-gray-800 flex flex-col items-center">
            <p className=" text-custom-yellow2">Already have an account?</p>
            <Link href="/user-signin" passHref>
              <a>
                <button className="button  mt-4 mr-[50px] capitalize px-[13px] py-[7px]">
                  Sign In
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

export default UserSignupPage;
