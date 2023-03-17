import Link from "next/link";
// import { redirectPage } from "../../utils/redirectPage";
// import { countriesData } from "../../components/data/countriesData";

function PostAnAdPage() {
  return (
    <>
      <div className="pb-14 min-h-[760px]">
        <h1 className="text-[32px] text-center font-medium">Post an Ad</h1>

        <div className="space-y-4 text-[19px] lg:text-[24px]">
          <div className="flex flex-wrap">
            <p className="link mr-2">
              <Link href="/post-ad/free-ad">Post free ad</Link>
            </p>
            <span className="text-white">( Mainly free )</span>
          </div>
          <div className=" flex flex-wrap ">
            <p className="link mr-2">
              <Link href="/post-ad/post-ad">Post ad</Link>
            </p>
            <span className="text-white">( Paid Premium And Sponsor ads )</span>
          </div>
          <div className=" flex flex-wrap ">
            <p className="link mr-2">
              <Link href="/post-ad/multiple-location-ad">
                Post in multiple cities
              </Link>
            </p>
            <span className="text-white">( Paid Premium And Sponsor ads )</span>
          </div>
        </div>
      </div>
    </>
  );

  // return (
  //   <Layout>
  //     <div className="pb-14 min-h-[760px]">
  //       <h1 className="text-[32px] text-center font-medium">
  //         Select a country
  //       </h1>

  //       <div className="columns-1 lg:columns-3">
  //         {countriesData.map((country, i) => (
  //           <h2 key={i} className="text-[24px] link">
  //             <Link
  //               href={`/post-ad/${country.name
  //                 .split(" ")
  //                 .join("-")
  //                 .toLowerCase()}`}
  //             >
  //               {country.name}
  //             </Link>
  //           </h2>
  //         ))}
  //       </div>
  //     </div>
  //   </Layout>
  // );
}

// export async function getServerSideProps(context) {
//   return redirectPage(context, () => {
//     return {
//       props: {},
//     };
//   });
// }

export default PostAnAdPage;
