import React from "react";
import { Formik, Form } from "formik";
import Layout from "../components/Layout";
import { TextField } from "../components/common/InputField";
import { FaAt, FaLock } from "react-icons/fa";
import Link from "next/link";

function UserResetPage() {
  const initialvalues = {
    email: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <>
      <div className="font-roboto pt-[30px] pb-[350px] flex justify-center font-thin">
        <div className="lg:w-[540px]">
          <h1 className="text-center text-[32px] text-white mb-3">
            RESET PASSWORD
          </h1>

          <div className="pt-16 pb-4 border-t border-custom-yellow2">
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
