import { Formik, Form } from "formik";
import { TextField } from "../common/InputField";
import { FaAt, FaHashtag, FaLock } from "react-icons/fa";
import Link from "next/link";

function Password({ setPasswordChange }) {
  const initialvalues = {
    code: "",
    password: "",
  };

  const handleSubmit = (values, formik) => {
    console.log(values);
    setPasswordChange(true);
  };

  return (
    <div className="">
      <p className="text-custom-yellow2 font-normal mb-7">
        Enter the code from email and change password.
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
                label="Code"
                name="code"
                type="text"
                icon={<FaHashtag />}
                required
              />
              <TextField
                label="New Password"
                name="password"
                type="password"
                icon={<FaLock />}
                required
              />
              <div className="grid grid-cols-3">
                <div className="col-start-2 lg:col-start-3 col-span-2 ml-[50px] lg:ml-0">
                  <button
                    type="submit"
                    className="button px-[14px] py-[7px] uppercase"
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
  );
}

export default Password;
