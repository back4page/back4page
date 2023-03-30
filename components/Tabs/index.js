import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Tabs({ children }) {
  const tabsOptions = [
    {
      name: "Single Location",
      link: "/my-ads/single-location",
    },
    {
      name: "Multiple Location",
      link: "/my-ads/multiple-location",
    },
  ];

  const router = useRouter();

  return (
    <div className="font-roboto pb-[700px] font-thin">
      <h1 className="text-center text-[32px] text-white mb-8 uppercase">
        MY ADS
      </h1>

      <div className="flex justify-center lg:justify-start items-center mb-10">
        {tabsOptions.map((tab, i) => (
          <Link key={i} href={tab.link} passHref>
            <a>
              <button
                className={`px-5 lg:px-10 py-2 text-sm lg:text-base font-bold ${
                  router.pathname.includes(tab.link)
                    ? "border-b-2 border-gray-300"
                    : "border-b-2 border-gray-600 bg-gray-600 opacity-70"
                } `}
              >
                {tab.name}
              </button>
            </a>
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
}

export default Tabs;
