import { getServerSession } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/router";
import LayoutPostAd from "../../components/Dashboard/LayoutPostAd";
import { API_URL } from "../../config";
import { authOptions } from "../api/auth/[...nextauth]";

function PaymentPage({ postId, userId, token }) {
  const router = useRouter();
  const handlePostAd = async () => {
    const res = await fetch(`${API_URL}/post/success/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ postId: postId }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      router.push(`/post-ad/all-done?postId=${postId}`);
    } else {
      console.log("error", error);
    }
  };

  return (
    <LayoutPostAd step="Step 3: Payment">
      <div className="">
        <h3 className="mt-6 text-end text-2xl font-semibold">Credits: $2.1</h3>
        <p className="mt-6 text-lg">The price of your ad: $0.25</p>
        <div className="my-3 border-t border-gray-400"></div>
        {/* <Link href={`/post-ad/all-done?postId=${postId}`}> */}
        <button
          className="mt-4 mb-20 bg-yellow-400 text-black font-semibold text-sm px-3 py-1.5 rounded"
          onClick={handlePostAd}
        >
          Pay Now
        </button>
        {/* </Link> */}
      </div>
    </LayoutPostAd>
  );
}

export default PaymentPage;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  const userId = session.user.id;
  const token = session.user.token;
  const postId = context.query.postId;

  // console.log("query", query);
  return {
    props: {
      postId,
      userId,
      token,
    },
  };
}
