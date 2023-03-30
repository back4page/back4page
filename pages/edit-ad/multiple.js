import { getServerSession } from "next-auth";
import MultiLocationAd from "../../components/Dashboard/MultiLocationAd";
import { servicesData } from "../../components/data/servicesData";
import { API_URL } from "../../config";
import { authOptions } from "../api/auth/[...nextauth]";

function EditMultipleLocationAd({ ad }) {
  const formTitle = `Edit "${ad.title}"`;

  console.log("ad", ad);

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
      <MultiLocationAd formTitle={formTitle} services={services} ad={ad} />
    </>
  );
}

export default EditMultipleLocationAd;

export async function getServerSideProps(context) {
  const postId = context.query.postId;
  const session = await getServerSession(context.req, context.res, authOptions);
  const userId = session.user.id;
  const token = session.user.token;

  console.log("previewId", postId);

  const url = `${API_URL}/post/multiple/preview/${userId}/${postId}`;

  const res = await fetch(url, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  const post = data?.post;

  if (res.ok) {
    return { props: { ad: post } };
  } else {
    return {
      notFound: true,
    };
  }
}
