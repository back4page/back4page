import { getServerSession } from "next-auth";
import SingleAd from "../../../components/SIngleAd";
import AdBanner from "../../../components/SIngleAd/AdBanner";
import { API_URL } from "../../../config";
import { authOptions } from "../../api/auth/[...nextauth]";

function SingleAdPage({ post }) {
  console.log("single post", post);
  return (
    <div className="flex flex-col items-center py-10 lg:px-[100px]">
      <SingleAd post={post} />

      <AdBanner />
    </div>
  );
}

export async function getServerSideProps(context) {
  // const url = `${API_URL}/single/post/get/${previewId}`;
  const singleAd = context.query.singleAd;
  const session = await getServerSession(context.req, context.res, authOptions);
  const userId = session.user.id;
  const token = session.user.token;

  const url = `${API_URL}/post/multiple/preview/${userId}/${singleAd}`;

  const res = await fetch(url, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  console.log("data is", data.post);

  const post = data?.post;

  // return {
  //   props: {},
  // };

  if (res.ok) {
    return { props: { post } };
  } else {
    return {
      notFound: true,
    };
  }
}

export default SingleAdPage;
