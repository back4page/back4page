import SingleAd from "../../components/SIngleAd";
import AdBanner from "../../components/SIngleAd/AdBanner";
import { API_URL } from "../../config";

function SingleAdPage({ post }) {
  console.log("single post", post);
  return (
    <div className="flex flex-col items-center py-10 lg:px-[100px]">
      <SingleAd post={post} />

      <AdBanner />
    </div>
  );
}

export async function getServerSideProps({ query: { singleAd } }) {
  const url = `${API_URL}/single/post/get/${singleAd}`;
  const res = await fetch(url);
  const data = await res.json();

  console.log("data is", data);

  const post = data?.success;

  if (res.ok) {
    return { props: { post } };
  } else {
    return {
      notFound: true,
    };
  }
}

export default SingleAdPage;
