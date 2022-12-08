import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaGlobeAmericas } from "react-icons/fa";

function Location({ setLocationArray }) {
  const router = useRouter();
  const { selectState, selectCity, postAdForm } = router.query;

  const [countryName, setCountryName] = useState("");
  const state = selectCity?.split("-").join(" ").split("_").join("/");
  const city = postAdForm?.split("-").join(" ").split("_").join("/");

  useEffect(() => {
    const shortCountry = () => {
      switch (selectState) {
        case "united-states":
          setCountryName("US");
          break;
        case "europe":
          setCountryName("EU");
          break;
        case "africa":
          setCountryName("AF");
          break;
        case "latin-america-and-caribbean":
          setCountryName("LA&CB");
          break;
        case "asia-pacific-and-middle-east":
          setCountryName("AP&ME");
          break;
        case "canada":
          setCountryName("CA");
          break;
        case "australia-and-oceania":
          setCountryName("AU&OC");
          break;
        default:
          setCountryName("");
          break;
      }
    };

    shortCountry();

    setLocationArray([countryName, state, city]);
  }, [selectState, countryName, state, city, setCountryName, setLocationArray]);

  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <p className="col-span-1">Location:</p>
      <div className="col-span-2 bg-slate-200 text-slate-600 px-4 py-1 flex items-center gap-1 rounded font-normal text-[15px]">
        <span className="text-base">
          <FaGlobeAmericas />
        </span>

        <p className="capitalize">
          {countryName} {">"} {state} {">"} {city}
        </p>
      </div>
    </div>
  );
}

export default Location;
