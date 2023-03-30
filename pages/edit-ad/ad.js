import React from "react";
import PostAd from "../../components/Dashboard/PostAd";
import { servicesData } from "../../components/data/servicesData";
import { API_URL } from "../../config";

function EditPaidAd({ ad }) {
  const formTitle = `Edit "${ad?.title}"`;

  const selectedServices = [
    "Adult",
    "Dating",
    "Automotive",
    "Buy,Sell,Trade",
    "Community",
    "Jobs",
    "Local Places",
    "Musician",
    "Real Estate",
    "Rentals",
    "Services",
    "Massage",
  ];

  const services = selectedServices.map((service) =>
    servicesData.find((services) => services.name === service)
  );

  return (
    <>
      <PostAd formTitle={formTitle} services={services} ad={ad} />
    </>
  );
}

export default EditPaidAd;

export async function getServerSideProps({ query: { postId } }) {
  const url = `${API_URL}/single/post/get/${postId}`;
  const res = await fetch(url);
  const data = await res.json();

  console.log("data is", data);

  const ad = data?.success;

  if (res.ok) {
    return { props: { ad } };
  } else {
    return {
      notFound: true,
    };
  }
}
