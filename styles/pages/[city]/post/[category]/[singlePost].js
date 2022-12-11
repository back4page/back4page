import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { API_URL } from "../../../../config";
import Model from "../../../../public/images/models/model4.webp";

const images = [Model, Model, Model, Model];

function SinglePost({ data }) {
  return (
    <div className="flex flex-col items-center py-10 lg:px-[100px]">
      <h1 className="text-4xl">{data?.title || "Ad Title"}</h1>

      <div className="mt-4 py-4 border-t border-gray-800/50">
        <p className="">
          {/* {data?.description || ""} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero
          dolorem omnis? Facilis enim sapiente laborum nam voluptatibus quia,
          aliquam ipsam, ea distinctio soluta tenetur, nemo ab impedit mollitia
          deleniti quo commodi asperiores tempora voluptatem saepe quaerat. Sit,
          impedit dolor.
        </p>

        <div className="py-5 grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
          {images?.map((image, i) => (
            <div
              key={i}
              className="relative w-[300px] h-[300px] border-[8px] border-black"
            >
              <Image src={image} alt="model" layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>

        <div className="py-5 space-y-5">
          <div className="flex items-center gap-2">
            <p className="font-bold">Email:</p>
            <p className="">email@email.com</p>
            {/* <button className="button font-normal text-black px-5 py-2 rounded">
              Get Contact Email
            </button> */}
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">Contact Number:</p>
            <p className="">+987654321</p>
            {/* <button className="button font-normal text-black px-5 py-2 rounded">
              Get Contact Number
            </button> */}
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">Age:</p>
            <p className="">26</p>
            <span className="text-custom-gray7">(report if not 18+)</span>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-3 flex justify-end">
            <button className="px-2 py-[6px] flex justify-center items-center gap-1 text-red-400 border border-red-400 uppercase">
              <FaExclamationTriangle />
              <span>REPORT</span>
            </button>
          </div>
          <div className="text-gray-800 bg-custom-blue rounded-md  px-8 py-4">
            <p>
              Post your own ad {">"} get emails {">"} Select one {">"} Start
              dating.
            </p>
            <p>*You must be 18+.</p>

            <Link href="/post-ad" passHref>
              <a>
                <button className="mt-7 px-4 py-2 rounded text-white bg-custom-gray9 hover:bg-custom-gray10 focus:ring-[3px] ring-custom-gray10/40 transition duration-300 uppercase">
                  POST AD NOW
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { singlePost } }) {
  const url = `${API_URL}/post/get/single/${singlePost}`;
  const res = await fetch(url);
  const data = await res.json();

  console.log("data is", data);

  if (res.ok) {
    return { props: { data } };
  } else {
    return {
      notFound: true,
    };
  }
}

export default SinglePost;
