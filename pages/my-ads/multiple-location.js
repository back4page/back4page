import { getServerSession } from "next-auth";
import React from "react";
import Table from "../../components/Table";
import { adsColumnMultiple } from "../../components/Table/columns/adsColumnMultiple";
import Tabs from "../../components/Tabs";
import { API_URL } from "../../config";
import { authOptions } from "../api/auth/[...nextauth]";

function MultipleLocationAd({ posts }) {
  return (
    <Tabs>
      <div className="my-10">
        {posts && (
          <Table columnsHeading={adsColumnMultiple} usersData={posts} />
        )}
      </div>
    </Tabs>
  );
}

export default MultipleLocationAd;

export async function getServerSideProps({ req, res }) {
  const {
    user: { token, id },
  } = await getServerSession(req, res, authOptions);

  // const url = `${API_URL}/posts/get/${id}`;
  const url = `${API_URL}/post/multiple/data/${id}`;

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
