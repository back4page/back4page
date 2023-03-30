import { useFormikContext } from "formik";
import { useState } from "react";
import { useEffect } from "react";

function useImageUpload(formik, imageFiles) {
  // const formik = useFormikContext();
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    formik.setFieldValue("images", imageUrl);
  }, [imageUrl]);

  const uploadImage = async () => {
    let formData = new FormData();
    Array.from(imageFiles).forEach((image) => {
      formData.append("file", image.file[1]);
      formData.append("upload_preset", "msz5dddv");

      const upload = async () => {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/ddxy1wdgy/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();

        if (res.ok) {
          console.log("success", data);
          setImageUrl((prev) => [...prev, data.secure_url]);
        } else {
          console.log("failed", data);
        }
      };

      upload();
    });
  };
  return { uploadImage };
}

export default useImageUpload;
