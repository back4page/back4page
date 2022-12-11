import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "../../components/common/InputField";
import { FaAt, FaLock } from "react-icons/fa";
import Link from "next/link";
// import Email from "../components/UserReset/Email";
import { useState } from "react";
import { useRouter } from "next/router";
import usePostNoId from "../../hooks/usePostNoId";
// import Password from "../components/UserReset/Password";

function UserResetPage() {
  const [passwordChange, setPasswordChange] = useState(false);
  const router = useRouter();
  const initialvalues = {
    email: "",
  };

  const { postData, success } = usePostNoId("/password/reset/email");

  const handleSubmit = (values, formik) => {
    console.log(values);
    postData(values);
    if (success) {
      router.push("/user-reset/code");
    }
  };

  return (
    <>
      <div className="font-roboto pt-[30px] pb-[350px] flex justify-center font-thin">
        <div className="lg:w-[540px]">
          <h1 className="text-center text-[32px] text-white mb-3">
            RESET PASSWORD
          </h1>

          <div className="pt-16 pb-4 border-t border-custom-yellow2">
            {/* {!passwordChange ? (
              <Email setPasswordChange={setPasswordChange} />
            ) : (
              <Password />
            )} */}
            <p className="text-custom-yellow2 font-normal mb-7">
              We will send you a CODE via email.
            </p>
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="">
                    <TextField
                      label="Your Email"
                      name="email"
                      type="email"
                      icon={<FaAt />}
                      required
                    />
                    <div className="grid grid-cols-3">
                      <div className="col-start-2 lg:col-start-3 col-span-2 ml-[50px] lg:ml-0">
                        <button
                          type="submit"
                          className="button px-[14px] py-[7px] uppercase"
                        >
                          Get Code
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserResetPage;
