import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../config";

function usePostNoId(path) {
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState("");
  const router = useRouter();
  const url = `${API_URL}${path}`;

  console.log("status", success);

  const postData = async (values) => {
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
      console.log("good", data);
      toast.success(data.success);
      // router.push(redirect);
      setSuccess(true);
      setResponse(data);
      // formik.resetForm();
    } else {
      console.log("bad", data);
      setSuccess(false);
      toast.error("Something Went Wrong");
    }
  };

  console.log("response", response);

  return { postData, success, response };
}

export default usePostNoId;
