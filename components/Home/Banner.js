import Image from "next/image";
import Link from "next/link";
// import { modelsData } from "../data/modelsData";

function Banner({ popularAds, isLoading, isError }) {
  return (
    <div className="mb-8">
      {/* <div className="">
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
      </div> */}

      <div className="my-[15px]">
        <p className="text-center text-xl font-semibold text-custom-yellow tracking-[7px] ">
          ---- Popular <span className="px-[6px]"></span> Ads ----
        </p>

        <div className="mt-4 flex justify-center items-center flex-wrap">
          {isLoading && (
            <p className="text-xl h-[100px] text-custom-yellow tracking-widest">
              Loading...
            </p>
          )}
          {isError && (
            <p className="text-xl h-[100px] text-red-500">
              Something Went Wrong
            </p>
          )}
          {popularAds &&
            popularAds.map((ad, i) => (
              <Link key={i} href={`/ad/${ad.id}`} passHref>
                <a>
                  <div
                    // key={i}
                    className="border-2 border-black relative w-[100px] h-[100px]"
                  >
                    <Image
                      src={ad.images[0]}
                      alt={ad.title}
                      layout="fill"
                      priority
                      // objectFit="cover"
                    />
                  </div>
                </a>
              </Link>
            ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col lg:items-center lg:flex-row gap-[20px] lg:gap-[30px]">
        <div className="flex-1 px-2 text-gray-800 bg-custom-blue rounded-md text-center  py-[11px]">
          <p className="">
            Post your own ad {">"} get emails and calls {">"} Select one {"> "}
            Find your perfect match. You must be 18+
          </p>
        </div>

        <div className="lg:mr-28">
          <Link href="/post-ad" passHref>
            <a>
              <button className="bg-custom-yellow3 px-[7px] py-2  text-gray-800  uppercase rounded hover:bg-custom-yellow4 focus:bg-custom-yellow4 transition duration-200 focus:ring-4 ring-yellow-800">
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
