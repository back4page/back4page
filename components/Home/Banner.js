import Image from "next/image";
import Link from "next/link";
// import { modelsData } from "../data/modelsData";

function Banner({ images, title, postId }) {
  return (
    <div className="mb-8">
      <div className="">
        <h1 className="text-custom-yellow text-[40px] lg:font-semibold leading-tight">
          Discreet Personal Classified Website that works
        </h1>
        <p className="mt-2">
          Backpage is no more 2022 but Back4Page is here. Highly strict to child
          abuse, trafficking. Nothing wrong to visit a personal classified for
          your search for a dating partner. Back4Page (back4Page.com) is much
          like Backpage (backpage.com) in 2022 with option to post ads in
          multiple cities and categories. Our sponsored posts get 10 to 100
          times more response than regular posts, stay out of competition in
          personal ads.
        </p>
      </div>

      <div className="my-[15px]">
        <p className="text-center tracking-[7px] font-light text-slate-200">
          ---- Popular <span className="px-[6px]"></span> Ads ----
        </p>

        <div className="mt-4 flex justify-center items-center flex-wrap">
          {/* {modelsData &&
            modelsData.map((model, i) => (
              <div
                key={i}
                className="border-2 border-black relative w-[100px] h-[100px]"
              >
                <Image
                  src={model.image}
                  alt={model.name}
                  layout="fill"
                  priority
                  // objectFit="cover"
                />
              </div>
            ))} */}

          <Link href={`/ad/${postId}`} passHref>
            <a>
              <div
                // key={i}
                className="border-2 border-black relative w-[100px] h-[100px]"
              >
                <Image
                  src={images}
                  alt={title}
                  layout="fill"
                  priority
                  // objectFit="cover"
                />
              </div>
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-[20px] lg:gap-[30px]">
        <div className="">
          <p className=" text-gray-800 bg-custom-blue rounded-md text-right lg:text-left py-[11px] pl-[30px] lg:pl-[193px] pr-[20px] lg:pr-[35px]">
            Post your own ad {">"} get emails and calls {">"} Select one {"> "}
            Start dating. You must be 18+
          </p>
        </div>

        <div className="">
          <Link href="/post-ad" passHref>
            <a>
              <button className="bg-custom-yellow3 px-[7px] py-[6px]  text-gray-800  uppercase rounded hover:bg-custom-yellow4 focus:bg-custom-yellow4 transition duration-200 focus:ring-4 ring-yellow-800">
                Post Ad Now
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
