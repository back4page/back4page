import React, { useState } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import { FaHashtag } from "react-icons/fa";
import Link from "next/link";
import {
  TextField,
  SelectField,
  TextArea,
  TextArea2,
} from "../common/InputField";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { countriesData } from "../data/countriesData";

function MessageBlast() {
  const initialvalues = {
    to_whom: "",
    send_via: "",
    country: "",
    state: "",
    message: "",
    receivers: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  const countriesSelect = countriesData.map((country, i) => [country.name]);

  const statesSelect = (value) => {
    if (!value) {
      return ["- - - Select Country First - - -"];
    } else {
      const country = countriesData.find((country) => country.name === value);
      const states = country.states.map((state) => state.name);
      return states;
    }
  };

  return (
    <div className="font-roboto pt-[30px] pb-[200px] flex justify-center font-thin">
      <div className="lg:w-[540px]">
        <h1 className="text-center text-[32px] text-white mb-3 uppercase">
          Message Blast
        </h1>

        <div className="pt-4 pb-4 border-t border-custom-yellow2">
          <div className="flex justify-center items-center gap-1">
            <p className="text-custom-yellow2 text-center font-medium">
              Send thousands of messages within a few clicks.
            </p>
          </div>

          <div className="my-4 text-gray-800 bg-custom-blue rounded-md py-[11px] pl-8 pr-6 lg:pr-16  font-normal ">
            <p>Send your offer via -</p>
            <p>A. Email</p>
            <p>B. Short Message (SMS).</p>
          </div>

          <p className="my-7 mr-[55px] text-custom-gray7 font-medium">
            <i>
              You can send message to maximum 10000 users per state. We will
              select most active 10k prospects from our 50+ similar websites
              with 7.9M+ users. The more you send, the less you pay.
            </i>
          </p>
          <Formik
            initialValues={initialvalues}
            // validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="">
                  <SelectField
                    label="To Whom"
                    placeholder="Select whom to message"
                    name="to_whom"
                    type="text"
                    options={[
                      "To Female for Dating",
                      "To Male for Dating",
                      "To Bi/Trans/Gay",
                      "To Category Business Users",
                      "To Health and Fitness Users",
                      "To Service Users",
                      "To Tech Users",
                      "To Other Users",
                    ]}
                  />
                  <SelectField
                    label="Send Via"
                    placeholder="Select Send Via"
                    name="send_via"
                    type="text"
                    options={[
                      "Email (10 cents per email)",
                      "SMS (35 cents per SMS)",
                    ]}
                  />
                  <SelectField
                    label="Country"
                    placeholder="Select Country"
                    name="country"
                    type="text"
                    options={countriesSelect}
                  />
                  <SelectField
                    label="State"
                    placeholder="Select State"
                    name="state"
                    type="text"
                    options={statesSelect(formik.values.country)}
                  />
                  <TextArea2 label="Message" name="message" type="text" />
                  <TextField
                    label="How Many Receivers"
                    name="receivers"
                    type="number"
                    icon={<FaHashtag />}
                  />

                  <div className="mt-5 flex flex-col lg:flex-row justify-center items-center lg:gap-[200px]">
                    <h1 className="text-[32px] text-white">Bill: $0.00</h1>
                    <button
                      type="submit"
                      className="button px-[12px] py-[7px] uppercase"
                    >
                      Send {">>"}
                    </button>
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

export default MessageBlast;
