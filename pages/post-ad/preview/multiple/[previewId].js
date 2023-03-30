import { getServerSession } from "next-auth";
import Link from "next/link";
import LayoutPostAd from "../../../../components/Dashboard/LayoutPostAd";
import SingleAd from "../../../../components/SIngleAd";
import { API_URL } from "../../../../config";
import { authOptions } from "../../../api/auth/[...nextauth]";

function PreviewPage({ post }) {
  console.log("preview post", post);

  return (
    <div>
      <LayoutPostAd step="Step 2: Preview Ad">
        <SingleAd post={post} />
        <Link href={`/post-ad/payment?postId=${post.id}`}>
          <button className="mt-4 mb-20 bg-yellow-400 text-black font-semibold text-sm px-3 py-1.5 rounded">
            Next Step
          </button>
        </Link>
      </LayoutPostAd>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const url = `${API_URL}/single/post/get/${previewId}`;
  const previewId = context.query.previewId;
  const session = await getServerSession(context.req, context.res, authOptions);
  const userId = session.user.id;
  const token = session.user.token;

  const url = `${API_URL}/post/multiple/preview/${userId}/${previewId}`;

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

export default PreviewPage;
