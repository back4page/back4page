import Layout from "../../components/Layout";
import { servicesData } from "../../components/data/servicesData";
import PostAd from "../../components/Dashboard/PostAd";

function PostAdPage() {
  const formTitle = "Post Ad";

  const selectedServices = [
    "Adult",
    "Dating",
    "Automotive",
    "Buy/Sell/Trade",
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
      <PostAd formTitle={formTitle} services={services} />
    </>
  );
}

export default PostAdPage;
