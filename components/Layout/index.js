import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
// import NextNProgress from "nextjs-progressbar";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Layout({ children, pageDetails }) {
  // const { title, description, keywords } = pageDetails;

  return (
    <div className="bg-custom-gray text-slate-100">
      <Head>
        <title>
          best classified site, free ads posting site, female escort, secure
          dating site.
        </title>
        <meta
          name="description"
          content="In 2023 Back4page is the best dating site, you can find here secure dating from legit provider."
        />
        <meta name="keywords" content="back4page" />
      </Head>

      <>
        {/* <NextNProgress color="red" options={{ showSpinner: false }} />
        <ToastContainer /> */}
        {/* <div className="container overflow-x-hidden"> */}
        <div className="container">
          <Header />

          {children}
        </div>
        <Footer />
      </>
    </div>
  );
}

// Layout.defaultProps = {
//   pageDetails: {
//     title: "School Management system",
//     description: "School Management Website",
//     keywords: "School Management Website",
//   },
// };

export default Layout;
