import { getSession } from "next-auth/react";
import React from "react";
import Layout from "../components/Layout";
import Table from "../components/Table";
import { adsColumn } from "../components/Table/columns/adsColumn";
import { API_URL } from "../config";
import useGetData from "../hooks/useGetData";

function MyAdsPage({ data }) {
  // const { fetchedData } = useGetData("/post/get/dashboard");

  // console.log("fetched", fetchedData);
  const posts = data?.success;

  // const posts = [
  //   {
  //     title: "title 1",
  //   },
  //   {
  //     title: "title 2",
  //   },
  //   {
  //     title: "title 3",
  //   },
  // ];

  return (
    <>
      <div className="font-roboto pb-[700px] font-thin">
        <h1 className="text-center text-[32px] text-white mb-1 uppercase">
          MY ADS
        </h1>

        <div className="my-10">
          {posts && <Table columnsHeading={adsColumn} usersData={posts} />}
        </div>

        {/* <div className="flex gap-10 lg:gap-0 justify-between  font-semibold uppercase tracking-wider text-[15px]">
          <div className="flex flex-wrap gap-[6px]">
            <p className="link">Dating</p>
            <span> | </span>
            <p className="link">Men</p>
            <span> | </span>
            <p className="link">Business</p>
            <span> | </span>
            <p className="link">Health</p>
            <span> | </span>
            <p className="link">Service</p>
            <span> | </span>
            <p className="link">Tech</p>
            <span> | </span>
            <p className="link">Others</p>
          </div>
          <div className="lg:pr-[230px] ">Bill</div>
        </div> */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    user: { token, id },
  } = await getSession(context);
  // console.log(token, id);

  const url = `${API_URL}/posts/get/${id}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  // console.log(data);

  return {
    props: { data },
  };
}

export default MyAdsPage;
