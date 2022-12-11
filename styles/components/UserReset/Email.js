import { Formik, Form } from "formik";
import { TextField } from "../common/InputField";
import { FaAt, FaLock } from "react-icons/fa";
import Link from "next/link";

function Email({ setPasswordChange }) {
  const initialvalues = {
    email: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
    setPasswordChange(true);
  };

  return (
    <div className="">
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
  );
}

export default Email;
