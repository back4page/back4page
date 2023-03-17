import { Formik, Form } from "formik";
import { TextField } from "../components/common/InputField";
import { FaAt, FaLock } from "react-icons/fa";
import Link from "next/link";
import useLogin from "../hooks/useLogin";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Image from "next/image";

function UserSigninPage() {
  // const initialvalues = {
  //   email: "",
  //   password: "",
  // };

  const { loginUser } = useLogin();

  // const handleSubmit = async (values, formik) => {
  //   // console.log(values);

  //   loginUser(values);
  // };

  return (
    <>
      <div className="font-roboto pt-[30px] pb-[360px] flex justify-center font-thin">
        <div className="lg:w-[540px]">
          <h1 className="text-center text-[32px] text-white">
            Sign in: back4page
          </h1>

          <div className="flex justify-center">
            <button
              className="mt-6 px-3 py-2 bg-white text-[#7F7F7F] font-bold flex items-center gap-3 rounded-sm shadow"
              onClick={() => loginUser()}
            >
              <Image
                src="/images/google-logo.png"
                alt="google logo"
                width={25}
                height={25}
              />
              <p className="">Continue with Google</p>
            </button>
          </div>

          {/* <div className="pt-10 pb-4">
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
          </div> */}

          {/* <div className="flex flex-col items-center">
            <div className="lg:pr-32 text-center font-extralight text-custom-yellow2 hover:text-custom-blue2 hover:underline">
              <Link href="/user-reset">Forgot Password?</Link>
            </div>
            <p className="pt-[41px] font-extralight text-custom-yellow2">
              Don`t have an account?
            </p>

            <Link href="/user-signup" passHref>
              <a>
                <button className="button ml-[180px] lg:ml-[220px] mt-4 capitalize px-[13px] py-[7px]">
                  Sign Up
                </button>
              </a>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  // if (session?.user?.token) {
  //   return {
  //     redirect: {
  //       destination: "/dashboard",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {},
  };
}

export default UserSigninPage;
