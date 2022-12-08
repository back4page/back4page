import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Banner from "../components/Home/Banner";
import Description from "../components/Home/Description";
import Locations from "../components/Home/Locations";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  // const { data } = useSession();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <Banner />
      <Locations />
      <Description />
    </>
  );
}

// export default function Home() {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   // const [category, setCategory] = useState("");

//   console.log(selectedFiles);

//   const handleImageChange = (e) => {
//     setSelectedFiles(e.target.files);

//     let formData = new FormData();
//     // formData.append("category", category);
//     Array.from(selectedFiles).forEach((item) => formData.append("image", item));

//     // console.log(formData);
//     // console.log([...formData.entries()]);
//   };

//   const handleImageDelete = (i) => {
//     const updatedImages = Array.from(selectedFiles).filter(
//       (item, index) => index !== i
//     );
//     setSelectedFiles(updatedImages);
//     // formik.setFieldValue("images", updatedImages);
//   };

//   const renderImages = (source) => {
//     return Array.from(source).map((image, i) => {
//       return (
//         <div key={i} className="relative">
//           <Image
//             className="p-2"
//             src={image ? URL.createObjectURL(image) : null}
//             width={100}
//             height={100}
//           />
//           <span
//             className="absolute top-1 right-1 bg-white border border-slate-700 p-[2px] rounded-full text-slate-700 shadow-lg text-[15px]"
//             onClick={() => handleImageDelete(i)}
//           >
//             <FaTimes />
//           </span>
//         </div>
//       );
//     });
//   };

//   return (
//     <Layout>
//       <div className="my-[300px] ml-[300px]">
//         multiple image upload test
//         <div className="mt-10">
//           <input
//             type="file"
//             id="file"
//             name="file[]"
//             multiple
//             // onChange={(e) => setSelectedFiles(e.target.files)}
//             onChange={handleImageChange}
//             accept="image/*"
//           />
//         </div>
//         <div className="mt-10 flex gap-2">{renderImages(selectedFiles)}</div>
//         {/* <button className="mt-4 bg-cyan-500 px-4 py-2" onClick={handleSubmit}>
//           Submit
//         </button> */}
//       </div>
//     </Layout>
//   );
// }
