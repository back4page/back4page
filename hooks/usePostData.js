import { API_URL } from "../config";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useState } from "react";

function usePostData(category) {
  const router = useRouter();
  const [fetchedData, setFetchedData] = useState("");

  const { data } = useSession();
  const { token, id } = data ? data.user : "";

  const url = `${API_URL}/post/add/${category}/${id}`;

  // useEffect(() => {
  //   console.log(`${API_URL}${path}/${id}`);
  // }, [data]);

  // console.log(`${API_URL}${path}/${id}`);

  // const url = `https://boiling-dusk-89135.herokuapp.com/v1/post/add/free/${data?.id}`;

  const postData = async (values, formik, redirect) => {
    // console.log(values);
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
      !redirect && toast.success("Submitted Successfully");
      // formik.resetForm();
      redirect && data.id && router.push(`/${redirect}/${data.id}`);
      redirect && data.post.id && router.push(`/${redirect}/${data.post.id}`);
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return { postData };
}

export default usePostData;

// // import { useSelector } from "react-redux";
// import { useSession } from "next-auth/react";
// import { API_URL } from "../../config";
// import { toast } from "react-toastify";

// function usePostData(route) {
//   // const { token, id } = useSelector((state) => state.auth);
//   const { data } = useSession();
//   const { token, id } = data ? data.user : "";

//   const url = `${API_URL}${route}/${id}`;

//   const postData = async (values, formik) => {
//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(values),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       toast.success("Form Submitted Successfully!");
//       console.log("message", data.data);
//       // formik.resetForm();
//     } else {
//       console.log("error", data.message);
//       toast.error(data.message);
//     }
//   };

//   return { postData };
// }

// export default usePostData;
