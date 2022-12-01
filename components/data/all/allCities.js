import { countriesData } from "../countriesData";

export const allCities = countriesData.flatMap((country) =>
  country.states.flatMap((state) =>
    state.cities.flatMap((city) =>
      city
        .split("/")
        .join("_")
        .split(" ")
        .join("-")
        .split(".")
        .join("")
        .split("'")
        .join("")
        .toLowerCase()
    )
  )
);
