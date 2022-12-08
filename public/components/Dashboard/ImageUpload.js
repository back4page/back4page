//cloudinary
import { useFormikContext } from "formik";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

function ImageUpload() {
  const [imageUrl, setImageUrl] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [imageEvent, setImageEvent] = useState("");

  const formik = useFormikContext();

  useEffect(() => {
    // console.log(imageUrl);
    formik.setFieldValue("images", imageUrl);
  }, [imageUrl]);

  const handleImageChange = async (e) => {
    // e.preventDefault();

    setImagesPreview(e.target.files);

    let formData = new FormData();
    Array.from(e.target.files).forEach((file) => {
      formData.append("file", file);
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

    // console.log(formData);

    // const res = await fetch(
    //   "https://api.cloudinary.com/v1_1/ddxy1wdgy/image/upload",
    //   {
    //     method: "POST",
    //     // body: formData,
    //     body: files,
    //   }
    // );

    // const data = await res.json();

    // if (res.ok) {
    //   console.log("success", data);
    //   // setPhotoPreview(data.secure_url);
    //   // formik.setFieldValue("photo", data.secure_url);
    // } else {
    //   console.log("failed", data);
    // }

    // formik.setFieldValue("images", formData);

    // console.log([...formData.entries()]);
  };

  const handleImageDelete = (i) => {
    // image.target.value[i] = null;
    const updatedImages = Array.from(formik.values.images).filter(
      (item, index) => index !== i
    );
    // formData.append("category", category);
    // setSelectedFiles(updatedImages);
    let formData = new FormData();
    Array.from(updatedImages).forEach((item) => formData.append("image", item));
    formik.setFieldValue("images", formData);

    const updatedPreview = Array.from(imagesPreview).filter(
      (item, index) => index !== i
    );
    setImagesPreview(updatedPreview);

    // formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="text-black font-normal">
      <div className="flex items-center gap-2 bg-white rounded py-1 px-1">
        <input
          type="file"
          name="images"
          className=""
          onChange={handleImageChange}
          accept="image/*"
          multiple={true}
          onClick={(e) => setImageEvent(e)}
        />
        <div className="">
          <button
            type="button"
            className="px-2 bg-[#E5E5E5] border border-black text-sm"
            onClick={() => {
              imageEvent.target.value = null;
              formik.setFieldValue("images", "");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        {imageUrl?.map((image, i) => (
          <div key={i} className="relative">
            <Image
              alt="image"
              className="p-2"
              src={image}
              width={100}
              height={100}
            />
            {/* <span
              className="absolute top-1 right-1 bg-white border border-slate-700 p-[2px] rounded-full text-slate-700 shadow-lg text-[15px]"
              onClick={() => handleImageDelete(i)}
            >
              <FaTimes />
            </span> */}
          </div>
        ))}
      </div>

      {/* <div className="mt-3 flex gap-2">
        {Array.from(imagesPreview).map((image, i) => (
          <div key={i} className="relative">
            <Image
              alt="image"
              className="p-2"
              src={image ? URL.createObjectURL(image) : null}
              width={100}
              height={100}
            /> */}
      {/* <span
              className="absolute top-1 right-1 bg-white border border-slate-700 p-[2px] rounded-full text-slate-700 shadow-lg text-[15px]"
              onClick={() => handleImageDelete(i)}
            >
              <FaTimes />
            </span> */}
      {/* </div>
        ))}
      </div> */}
    </div>
  );
}

export default ImageUpload;

//backend
// import { useFormikContext } from "formik";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { FaTimes } from "react-icons/fa";

// function ImageUpload() {
//   const [imagesPreview, setImagesPreview] = useState([]);

//   const [imageEvent, setImageEvent] = useState("");

//   const formik = useFormikContext();

//   const handleImageChange = (e) => {
//     // e.preventDefault();

//     setImagesPreview(e.target.files);

//     let formData = new FormData();

//     Array.from(e.target.files).forEach((item) =>
//       formData.append("image", item)
//     );
//     formik.setFieldValue("images", formData);

//     console.log([...formData.entries()]);
//   };

//   const handleImageDelete = (i) => {
//     // image.target.value[i] = null;
//     const updatedImages = Array.from(formik.values.images).filter(
//       (item, index) => index !== i
//     );
//     // formData.append("category", category);
//     // setSelectedFiles(updatedImages);
//     let formData = new FormData();
//     Array.from(updatedImages).forEach((item) => formData.append("image", item));
//     formik.setFieldValue("images", formData);

//     const updatedPreview = Array.from(imagesPreview).filter(
//       (item, index) => index !== i
//     );
//     setImagesPreview(updatedPreview);

//     // formik.setFieldValue("images", updatedImages);
//   };

//   return (
//     <div className="text-black font-normal">
//       <div className="flex items-center gap-2 bg-white rounded py-1 px-1">
//         <input
//           type="file"
//           name="images"
//           className=""
//           onChange={handleImageChange}
//           accept="image/*"
//           multiple={true}
//           onClick={(e) => setImageEvent(e)}
//         />
//         <div className="">
//           <button
//             type="button"
//             className="px-2 bg-[#E5E5E5] border border-black text-sm"
//             onClick={() => {
//               // fileRef.current.files = null;
//               imageEvent.target.value = null;
//               formik.setFieldValue("images", "");
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       <div className="mt-3 flex gap-2">
//         {Array.from(imagesPreview).map((image, i) => (
//           <div key={i} className="relative">
//             <Image
//               alt="image"
//               className="p-2"
//               src={image ? URL.createObjectURL(image) : null}
//               width={100}
//               height={100}
//             />
//             {/* <span
//               className="absolute top-1 right-1 bg-white border border-slate-700 p-[2px] rounded-full text-slate-700 shadow-lg text-[15px]"
//               onClick={() => handleImageDelete(i)}
//             >
//               <FaTimes />
//             </span> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ImageUpload;
