import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Aboutus from "../components/Aboutus";
import Masthead from "../components/Masthead";
import styles from "../styles/Home.module.css";
import Skills from "../components/Skills";
import Works from "../components/works";
import Trustedby from "../components/Trustedby";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miki Website</title>
        <meta name="description" content="Software agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <Aboutus />
      <Skills />
      <Works />
      <Trustedby />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
