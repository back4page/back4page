import Link from "next/link";
import { countriesData } from "../data/countriesData";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

function Locations() {
  const [showCountries, setShowCountries] = useState(false);

  const toggle = (country) => {
    if (showCountries === country) {
      return setShowCountries(null);
    }

    setShowCountries(country);
  };

  return (
    <div className="space-y-4 py-4 border-y border-gray-500">
      {countriesData &&
        countriesData.map((country, i) => (
          <div key={i} className="">
            <div className="">
              <button
                className="w-full text-start bg-gray-900 text-custom-yellow p-3 rounded-lg text-2xl lg:text-[32px] lg:font-medium"
                onClick={() => toggle(country.name)}
              >
                {country.name}
              </button>
              {/* <p className="text-[16px]">
                Backpage replacement in {country.name}, all the states, every
                city, downtown, suburb, municipal area. Find a match from below
                or post your own ads and enjoy tonns of knocks - message, calls,
                inboxes, emails from {country.name}.
              </p> */}
            </div>
            {showCountries === country.name && (
              <div className="mt-4 pb-4 pl-2 lg:pl-4 space-y-8 columns-2 lg:columns-3">
                {country.states &&
                  country.states.map((state, i) => (
                    <div key={i} className="break-inside-avoid">
                      <div className="">
                        <p className="text-custom-yellow2 font-semibold">
                          {state.name}
                        </p>
                        <div className="mt-2 space-y-4">
                          {state.cities &&
                            state.cities.map((city, i) => (
                              <div key={i} className="ml-[15px]">
                                <div className="flex items-center gap-[5px]">
                                  <span className="text-[14px]">
                                    <FaMapMarkerAlt />
                                  </span>
                                  <p className="text-[15px] capitalize hover:underline cursor-pointer break-all">
                                    <Link
                                      href={`/${city
                                        .split("/")
                                        .join("_")
                                        .split(" ")
                                        .join("-")
                                        .split(".")
                                        .join("")
                                        .split("'")
                                        .join("")
                                        .toLowerCase()}`}
                                    >
                                      {city.split("-").join(" ")}
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Locations;
