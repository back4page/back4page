import { API_URL } from "../config";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useState } from "react";

function useEditData(postId) {
  const router = useRouter();
  const [fetchedData, setFetchedData] = useState("");

  const { data } = useSession();
  const { token, id } = data ? data.user : "";

  const url = `${API_URL}/post/add/edit/${id}/${postId}`;

  const editData = async (values, formik, redirect) => {
    // console.log(values, url);
    // return;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("preview", data);
      // setFetchedData(data.)
      toast.success("Ad Edited Successfully");
      // formik.resetForm();
      // isLive === true
      //   ? router.push(`/ad/${postId}`)
      //   : router.push(`/post-ad/preview/${postId}`);

      router.push(`/ad/${postId}`);

      // isLive === true && router.push(`/ad/${postId}`);
      // isLive === false && router.push(`/post-ad/preview/${postId}`);
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return { editData };
}

export default useEditData;
