import React from "react";
import { Formik, Form } from "formik";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import { TextField } from "../common/InputField";

function UpdatePassword() {
  const initialvalues = {
    old_password: "",
    new_password: "",
    retype_new_password: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <div className="font-roboto pb-[10px] flex justify-center font-thin">
      <div className="lg:w-[540px]">
        <h1 className="text-center text-[32px] text-white mb-3 uppercase">
          UPDATE PASSWORD
        </h1>

        <div className="pt-14 pb-14 border-t border-custom-yellow2">
          <Formik
            initialValues={initialvalues}
            // validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="">
                  <TextField
                    label="Old Password"
                    name="old_password"
                    type="password"
                    autoComplete="on"
                    icon={<FaLock />}
                  />
                  <TextField
                    label="New Password"
                    name="new_password"
                    type="password"
                    autoComplete="on"
                    icon={<FaLock />}
                  />

                  <TextField
                    label="Retype New Password"
                    name="retype_new_password"
                    type="password"
                    autoComplete="on"
                    icon={<FaLock />}
                  />
                  <div className="grid grid-cols-3">
                    <div className="col-start-2 col-span-2">
                      <button
                        type="submit"
                        className="button self-end mr-[10px] capitalize px-[12px] py-[7px]"
                      >
                        Change Password
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
  );
}

export default UpdatePassword;
