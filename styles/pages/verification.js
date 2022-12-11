import { getSession } from "next-auth/react";

function VerificationPage() {
  return (
    <div className="pt-[30px] pb-[350px] flex flex-col justify-center items-center">
      <h1 className="text-3xl">Verify Your Email</h1>
      <p className="mt-10 text-xl">
        A verification link has been sent to your email account
      </p>
      <p className="mt-3">
        Please click on the link that has been just sent to your email account
        to verify your email and complete the registration process
      </p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default VerificationPage;
