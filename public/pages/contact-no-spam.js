import React from "react";
import { Formik, Form } from "formik";
import Layout from "../components/Layout";
import {
  SelectField,
  TextArea,
  TextField,
} from "../components/common/InputField";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

function ContactPage() {
  const initialvalues = {
    reason: "",
    message: "",
    email: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  // const hideSendButton = () => {
  //   return (notAllowed =
  //     "I am a robot (avoid)" ||
  //     "I am not a human (avoid)" ||
  //     "Complain about a post." ||
  //     "My transaction is not showing." ||
  //     "My post was rejected.");
  // };

  // console.log(hideSendButton());

  const showSendButton = (formik) => {
    const value1 = "I am a robot (avoid)";
    const value2 = "I am not a human (avoid)";
    const value3 = "Complain about a post.";
    const value4 = "My transaction is not showing.";
    const value5 = "My post was rejected.";
    const value6 = "I have a business proposal.";
    const value7 = "I need to advertise big.";
    const value8 = "I want to develop similar site.";
    const value9 = "I want to buy this website";

    const reasonValue = formik.values.reason;

    switch (reasonValue) {
      case value1:
        return false;
      // break;
      case value2:
        return false;
      // break;
      case value3:
        return false;
      // break;
      case value4:
        return false;
      // break;
      case value5:
        return false;
      // break;
      case value6:
        return true;
      // break;
      case value7:
        return true;
      // break;
      case value8:
        return true;
      // break;
      case value9:
        return true;
      // break;

      default:
        return false;
      // break;
    }
  };

  return (
    <>
      <div className="pt-[30px] pb-[400px] flex justify-center ">
        <div className="lg:w-[540px]">
          <h1 className="font-roboto text-center text-[32px] text-white font-thin">
            Contact Us
          </h1>

          <div className="pt-2 pb-4">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              // enableReinitialize
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="">
                    <SelectField
                      label="Reason"
                      name="reason"
                      type="text"
                      placeholder="Select Status"
                      options={[
                        "I am a robot (avoid)",
                        "I am not a human (avoid)",
                        "Complain about a post.",
                        "My transaction is not showing.",
                        "My post was rejected.",
                        "I have a business proposal.",
                        "I need to advertise big.",
                        "I want to develop similar site.",
                        "I want to buy this website",
                      ]}
                    />
                    <TextArea label="Message" name="message" type="text" />
                    <TextField
                      label="Your Email"
                      name="email"
                      type="email"
                      icon={<FaEnvelope />}
                      placeholder="abc...@gmail.com"
                    />

                    {/* {formik.values.reason !== "" && !formik.values.message && (
                      <div
                        className="self-center mr-[123px]"
                        // onClick={() => console.log(showSendButton(formik))}
                      >
                        <button
                          type="submit"
                          className="bg-green-600 rounded  capitalize px-[12px] py-[7px]"
                        >
                          send
                        </button>
                      </div>
                    )} */}

                    {showSendButton(formik) && (
                      <div className="grid grid-cols-3">
                        <div className="col-start-2 col-span-2">
                          <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 focus:bg-green-700 focus:ring-4 ring-green-800 rounded capitalize px-[12px] py-[7px] transition duration-200"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    )}
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

export default ContactPage;
