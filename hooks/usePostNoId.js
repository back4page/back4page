import { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../config";

function usePostNoId(path) {
  const [success, setSuccess] = useState(false);
  const url = `${API_URL}${path}`;

  console.log(url);

  const postData = async (values, formik) => {
    // console.log(values);
    // return;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Submitted Successfully");
      setSuccess(true);
      // formik.resetForm();
    } else {
      console.log("error", data);
      setSuccess(false);
      toast.error("Something Went Wrong");
    }
  };

  return { postData, success };
}

export default usePostNoId;
