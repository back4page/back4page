import { servicesData } from "../servicesData";

export const allCategories = servicesData.flatMap((service) =>
  service.categories.flatMap((category) =>
    category
      .split("/")
      .join("_")
      .split(" ")
      .join("-")
      .split(".")
      .join("")
      // .split(",")
      // .join("")
      .toLowerCase()
  )
);
