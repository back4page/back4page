import React from "react";

function EditAdPage({ adId }) {
  return (
    <div>
      Edit Ad
      <p className="">{adId}</p>
    </div>
  );
}

export default EditAdPage;

export async function getServerSideProps({ query: { ad_id } }) {
  return {
    props: {
      adId: ad_id,
    },
  };
}
