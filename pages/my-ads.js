import { getServerSession } from "next-auth";
import Table from "../components/Table";
import { adsColumn } from "../components/Table/columns/adsColumn";
import { API_URL } from "../config";
import { authOptions } from "./api/auth/[...nextauth]";

function MyAdsPage({ data }) {
  // console.log("fetched ads", data);
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

  console.log("dashboard", posts);

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

export async function getServerSideProps({ req, res }) {
  const {
    user: { token, id },
  } = await getServerSession(req, res, authOptions);

  const url = `${API_URL}/posts/get/${id}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  // console.log(data);

  return {
    props: { data },
  };
}

export default MyAdsPage;
