import { useFormikContext } from "formik";
import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";

function ImageField2({
  label,
  name,
  imageFiles,
  setImageFiles,
  imageUrl,
  required,
}) {
  const formik = useFormikContext();
  const hiddenFileInput = useRef(null);

  // const [imageFiles, setImageFiles] = useState([]);
  // const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    formik.setFieldValue("images", imageUrl);
  }, [imageUrl]);

  const handleImageChange = (e) => {
    // setImageFiles(e.target.files);
    // let ImagesArray = Object.entries(e.target.files).map((e) =>
    //   URL.createObjectURL(e[1])
    // );
    let ImagesArray = Object.entries(e.target.files).map((e) => {
      return {
        preview: URL.createObjectURL(e[1]),
        file: e,
      };
    });

    console.log("imagesArray", ImagesArray);

    setImageFiles([...imageFiles, ...ImagesArray]);
  };

  const handleImageRemove = () => {};

  return (
    <div className="">
      <div className="">
        {/* <label htmlFor={name} className="mb-2  inline-block">
          {label}
        </label> */}
        <div className="">
          <button
            type="button"
            onClick={() => hiddenFileInput.current?.click()}
            className={`bg-green-700 text-white text-sm font-bold px-3 py-1.5 rounded ${
              imageFiles.length >= 4 && "hidden"
            }`}
          >
            {/* {formik.values.imageUrl ? "Change" : "Add Profile Picture"} */}
            Add Images
          </button>
          {imageFiles.length > 0 &&
            (imageFiles.length <= 4 ? (
              <div className="mt-4 flex items-center gap-5">
                {imageFiles.map((singleImage, i) => (
                  <div key={i} className=" relative w-[80px] h-[80px]">
                    <Image
                      src={singleImage.preview}
                      alt="image preview"
                      layout="fill"
                      objectFit="cover"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 font-bold text-black bg-white p-1 rounded-full"
                      onClick={() => {
                        setImageFiles(
                          imageFiles.filter(
                            (image) => image.preview !== singleImage.preview
                          )
                        );
                      }}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <p className="">Max Image reached</p>
                <button
                  type="button"
                  className="text-sm font-bold px-3 py-1 rounded bg-green-700"
                  onClick={() => setImageFiles([])}
                >
                  Try again
                </button>
              </div>
            ))}
          {/* {formik.values.imageUrl && (
            <button
              type="button"
              className="bg-red-700 text-white text-sm font-bold px-3 py-1.5 rounded"
              onClick={handleImageRemove}
            >
              Delete
            </button>
          )} */}
        </div>
        <input
          id={name}
          ref={hiddenFileInput}
          type="file"
          name="images"
          className="hidden"
          onChange={handleImageChange}
          accept="image/*"
          multiple={true}
          required={required}
          disabled={imageFiles.length >= 4}
        />
      </div>
    </div>
  );
}

export default ImageField2;
