import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
