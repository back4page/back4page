import { servicesData } from "../../components/data/servicesData";
// import Old2MultipleLocationAd from "../../components/Dashboard/Old2MultipleLocationAd";
// import OldMultiLocationAd from "../../components/Dashboard/OldMultiLocationAd";
import MultiLocationAd from "../../components/Dashboard/MultiLocationAd";

function MultipleLocationAdPage() {
  const formTitle = "Post Ad in Multiple Cities";

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
      {/* <OldMultiLocationAd formTitle={formTitle} services={services} /> */}
      {/* <MultiLocationAd formTitle={formTitle} services={services} /> */}
      <MultiLocationAd formTitle={formTitle} services={services} />
    </>
  );
}

export default MultipleLocationAdPage;
