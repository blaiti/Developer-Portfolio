import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pietro - Senior Tech Recruiter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Pietro Mattei" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta
          name="description"
          content="Senior Tech Recruiter currently at neo4j."
        />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:site_name"
          content="Pietro - Senior Tech Recruiter"
        />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Pietro - Senior Tech Recruiter</title>
        <meta data-rh="true" property="og:type" content="website" />
        <meta
          data-rh="true"
          property="og:title"
          content="Pietro - Senior Tech Recruiter"
        />
        <meta
          data-rh="true"
          property="og:image"
          content="/images/pietro-ai.png"
        />
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
