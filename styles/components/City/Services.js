import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { servicesData } from "../data/servicesData";

function Services() {
  const router = useRouter();
  const { city } = router.query;

  // console.log(city);

  // const { asPath } = useRouter();

  // const pageName = (path) =>
  //   path
  //     .substring(path.lastIndexOf("/") + 1)
  //     .split("-")
  //     .join(" ");

  // pageName(asPath);

  // console.log(pageName(asPath));

  // const cityUppercase = () => {
  //   return city.charAt(0).toUpperCase() + city.slice(1);
  // };

  // const cityName = cityUppercase();

  const cityName = city?.split("-").join(" ").split("_").join("/");
  // .split("/")
  // .join("")
  // .split(" ")
  // .join("-")
  // .split(".")
  // .join("")
  // .split("'")
  // .join("")
  // .toLowerCase();

  return (
    <>
      <div className="">
        <h1 className=" text-white text-[32px] lg:font-medium leading-tight">
          <span className="capitalize">{cityName}</span> back4page Classified
        </h1>
        <p className="text-[16px] mt-1">
          Find Personal Ads like megapersonal similar to&nbsp;
          <i>
            Craiglist
            <span className="capitalize"> {cityName}</span>
          </i>{" "}
          and nearby town and cities. Lonely heart Personals aka personales are
          roaming around. Get single girls, hook them up and release your
          pressure. Love the way you are. Enjoy your best moment with backpage
          <span className="capitalize"> {cityName}</span> . If you are looking
          for back4page <span className="capitalize">{cityName}</span> or double
          list
          <span className="capitalize"> {cityName}</span> you are in perfect
          place.
        </p>
      </div>
      <div className="mt-5 space-y-8 columns-2 lg:columns-3">
        {servicesData &&
          servicesData.map((service, i) => (
            <div key={i} className="break-inside-avoid">
              <div className="text-custom-yellow2 font-semibold">
                {service.name}
              </div>
              <ul className="mt-2 space-y-4">
                {service.categories &&
                  service.categories.map((category, i) => (
                    <div key={i} className="flex">
                      <p className="text-[15px] ml-[18px] capitalize break-all hover:underline">
                        <Link
                          href={`/${city}/post/${category
                            .split("/")
                            .join("_")
                            .split(" ")
                            .join("-")
                            .split(".")
                            .join("")
                            .toLowerCase()}`}
                        >
                          {category}
                        </Link>
                      </p>
                    </div>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
}

export default Services;
