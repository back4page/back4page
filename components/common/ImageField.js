import { useFormikContext } from "formik";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

function ImageField({ images }) {
  const formik = useFormikContext();
  const hiddenFileInput = useRef(null);

  const [imageUrl, setImageUrl] = useState(images || []);
  const [imageFiles, setImageFiles] = useState([]);
  const [isMaxedOut, setIsMaxedOut] = useState(false);

  useEffect(() => {
    // console.log(imageUrl);
    formik.setFieldValue("images", imageUrl);
    imageUrl.length > 4 && setIsMaxedOut(true);
  }, [imageUrl]);

  const handleImageChange = async (e) => {
    if (e.target.files.length > 4) {
      setIsMaxedOut(true);
      return;
    }

    setImageFiles(e.target.files);

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
  };

  const handleImageRemove = (singleImage) => {
    setImageUrl(imageUrl.filter((image) => image !== singleImage));
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <button
            type="button"
            onClick={() => hiddenFileInput.current?.click()}
            className={`bg-green-700 text-white text-sm font-bold px-3 py-1.5 rounded ${
              (imageUrl.length >= 4 || isMaxedOut || imageFiles.length > 4) &&
              "hidden"
            }`}
          >
            Add Images
          </button>
          {!isMaxedOut ? (
            <div className="mt-4 flex items-center gap-5">
              {imageUrl.length > 0 &&
                imageUrl.map((singleImage, i) => (
                  <div key={i} className=" relative">
                    <Image
                      src={singleImage}
                      alt="image preview"
                      width={100}
                      height={100}
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 font-bold text-sm text-black bg-white p-1 rounded-full"
                      onClick={() => handleImageRemove(singleImage)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
            </div>
          ) : (
            <div className="ml-3 sm:ml-0">
              <p className="text-sm lg:text-base">
                Maximum image limit reached.
              </p>
              <div className="">
                <button
                  type="button"
                  className="mt-1 text-sm font-bold px-3 py-1 rounded bg-green-700"
                  onClick={() => {
                    setImageUrl([]);
                    setIsMaxedOut(false);
                  }}
                >
                  Try again
                </button>
              </div>
            </div>
          )}
        </div>
        <input
          ref={hiddenFileInput}
          type="file"
          name="imageUrl"
          className="hidden"
          onChange={handleImageChange}
          accept="image/*"
          multiple={true}
          disabled={imageUrl.length >= 4}
        />
      </div>
    </div>
  );
}

export default ImageField;
