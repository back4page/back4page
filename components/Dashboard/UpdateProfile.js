import React from "react";
import { Formik, Form } from "formik";
import { FaAlignLeft, FaAt, FaHashtag, FaLock } from "react-icons/fa";
import Link from "next/link";
import { TextField, SelectField } from "../common/InputField";

function UpdateProfile() {
  const initialvalues = {
    name: "",
    email: "",
    gender: "",
    age: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <div className="font-roboto py-[30px] flex justify-center font-thin">
      <div className="lg:w-[540px]">
        <h1 className="text-center text-[32px] text-white mb-3 uppercase">
          UPDATE PROFILE
        </h1>

        <div className="pt-14 pb-4 border-t border-custom-yellow2">
          <p className="pb-10 text-custom-gray7 text-[15px] font-medium">
            20% crypto bonus offer at <span className="link"> BUY CREDIT </span>
            page.
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
                    label="Name"
                    name="name"
                    type="text"
                    icon={<FaAlignLeft />}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    icon={<FaAt />}
                  />
                  <SelectField
                    label="Gender"
                    placeholder="Select Gender"
                    name="gender"
                    type="text"
                    options={["Male", "Female", "Other"]}
                  />

                  <TextField
                    label="Age"
                    name="age"
                    type="text"
                    icon={<FaHashtag />}
                  />
                  <div className="grid grid-cols-3">
                    <div className="col-start-2 col-span-2">
                      <button
                        type="submit"
                        className="button self-end mr-[30px] capitalize px-[12px] py-[7px]"
                      >
                        Update Profile
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

export default UpdateProfile;
