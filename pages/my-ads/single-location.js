import { getServerSession } from "next-auth";
import React from "react";
import Table from "../../components/Table";
import { adsColumnSingle } from "../../components/Table/columns/adsColumnSingle";
import Tabs from "../../components/Tabs";
import { API_URL } from "../../config";
import { authOptions } from "../api/auth/[...nextauth]";

function SingleLocationAd({ posts }) {
  return (
    <Tabs>
      <div className="my-10">
        {posts && <Table columnsHeading={adsColumnSingle} usersData={posts} />}
      </div>
    </Tabs>
  );
}

export default SingleLocationAd;

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
    props: { posts: data.success },
  };
}
