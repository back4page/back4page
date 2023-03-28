import FreeAd from "../../components/Dashboard/FreeAd";
import { servicesData } from "../../components/data/servicesData";
import { API_URL } from "../../config";

function EditFreeAd({ ad }) {
  console.log("ad", ad);
  const formTitle = `Edit "${ad.title}"`;

  const selectedServices = [
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
      <FreeAd formTitle={formTitle} services={services} ad={ad} />
    </>
  );
}

export default EditFreeAd;

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
