import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import { countriesData } from "../../../../components/data/countriesData";
import { API_URL } from "../../../../config";
import Link from "next/link";
import { allCategories } from "../../../../components/data/all/allCategories";
import { allCities } from "../../../../components/data/all/allCities";

// const testTitle = [
//   {
//     name: "Title 1",
//   },
//   {
//     name: "Title 2",
//   },
//   {
//     name: "Title 3",
//   },
//   {
//     name: "Title 4",
//   },
//   {
//     name: "Title 5",
//   },
//   {
//     name: "Title 6",
//   },
// ];

function CategoryPage({ data, categoryName, cityName }) {
  // const router = useRouter();
  // const { category, city } = router.query;

  console.log("fetched data", data);

  // const result = countriesData.map((country) =>
  //   country.states.map((cities) =>
  //     cities.cities.filter((value) => value === city && cities)
  //   )
  // );

  // const cityName = city && city.split("_").join("/").split("-").join(" ");

  // useEffect(() => {
  //   const result =
  //     countriesData &&
  //     countriesData.map((country) =>
  //       country.states.map(
  //         (state) => state.cities.filter((ct) => ct === cityName && cityName)
  //         // map((ct) => ct.filter((value) => value === cityName))
  //         // state.cities.map((singleCity) => {
  //         //   const city = singleCity
  //         //     // .split("/")
  //         //     // .join("")
  //         //     .split("/")
  //         //     .join("_")
  //         //     .split(" ")
  //         //     .join("-")
  //         //     .split(".")
  //         //     .join("")
  //         //     .split("'")
  //         //     .join("")
  //         //     .toLowerCase();

  //         //   if (cityName === city) {
  //         //     console.log(cities);
  //         //   }
  //         // })
  //       )
  //     );

  //   console.log(result);
  // }, [cityName]);

  // const categoryName = category?.split("_").join("/").split("-").join(" ");
  // const cityName = city?.split("_").join("/").split("-").join(" ");

  // useEffect(() => {
  //   // const url = `${API_URL}/post/get/${city}/${category}`;
  //   const url =
  //     "https://boiling-dusk-89135.herokuapp.com/v1/post/get/auburn/appliances";
  //   console.log(url);
  //   const fetchData = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  const adTitles = data?.success?.title;

  return (
    <>
      <div className="h-[770px]">
        <h1 className="text-[32px] font-semibold">
          <span className="capitalize">{categoryName}</span> in{" "}
          <span className="capitalize">{cityName}</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          reprehenderit assumenda perferendis minima beatae placeat dolorem
          voluptate! Illo vitae eveniet ratione veniam sit eaque quasi
          repellendus fuga mollitia, nemo enim aspernatur veritatis esse
          temporibus? Amet pariatur iure libero, at fugit ratione numquam
          molestias enim laborum nihil saepe, ducimus recusandae beatae.
        </p>

        <div className="my-5">
          {adTitles?.map((title, i) => (
            <div
              key={i}
              className=" odd:bg-custom-gray8 even:bg-custom-gray2 -mx-4 p-3"
            >
              <Link href="/">
                <span className=" text-custom-yellow2 hover:text-white hover:underline text-lg">
                  {title}
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* <div className="my-5">
          {testTitle.map((title, i) => (
            <div
              key={i}
              className=" odd:bg-custom-gray8 even:bg-custom-gray2 -mx-4 p-3"
            >
              <Link href="/">
                <span className=" text-custom-yellow2 hover:text-white hover:underline text-lg">
                  {title.name}
                </span>
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { city, category } = query;
  // console.log(city, category);
  const url = `${API_URL}/post/get/${city}/${category}`;
  // const url = "https://jsonplaceholder.typicode.com/todos";
  console.log(url);
  const res = await fetch(url);

  const data = await res.json();

  // console.log(data);

  // console.log(allCategories);

  if (!allCities.includes(city) || !allCategories.includes(category)) {
    return {
      notFound: true,
    };
  }

  const categoryName = category?.split("_").join("/").split("-").join(" ");
  const cityName = city?.split("_").join("/").split("-").join(" ");

  return {
    props: {
      data,
      categoryName,
      cityName,
    },
  };
}

export default CategoryPage;
