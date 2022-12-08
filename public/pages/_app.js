import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NextNProgress color="red" options={{ showSpinner: false }} />
      <ToastContainer />

      <Layout>
        {/* <ToastContainer /> */}
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
