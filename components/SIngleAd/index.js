import Image from "next/image";

function SingleAd({ post }) {
  return (
    <div className="mt-5">
      <h1 className="text-4xl">{post?.title}</h1>
      {/* <h1 className="text-4xl">Ad Title</h1> */}

      <div className="mt-4 py-4 border-t border-gray-800/50">
        <p className="">
          {post?.description}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero
          dolorem omnis? Facilis enim sapiente laborum nam voluptatibus quia,
          aliquam ipsam, ea distinctio soluta tenetur, nemo ab impedit mollitia
          deleniti quo commodi asperiores tempora voluptatem saepe quaerat. Sit,
          impedit dolor. */}
        </p>

        <div className="py-5 grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
          {post?.images?.map((image, i) => (
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
            <p className="">{post?.email}</p>
            {/* <button className="button font-normal text-black px-5 py-2 rounded">
              Get Contact Email
            </button> */}
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">Contact Number:</p>
            <p className="">{post?.phone}</p>
            {/* <button className="button font-normal text-black px-5 py-2 rounded">
              Get Contact Number
            </button> */}
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold">Age:</p>
            <p className="">{post?.age}</p>
            <span className="text-custom-gray7">(report if not 18+)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleAd;
