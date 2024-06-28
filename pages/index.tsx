"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Aboutus from "../components/Aboutus";
import Masthead from "../components/Masthead";
import styles from "../styles/Home.module.css";
import Skills from "../components/Skills";
import Works from "../components/works";
import Trustedby from "../components/Trustedby";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
      });
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>MH Designs</title>
        <meta name="description" content="Software agency" />
        <link rel="icon" href="/MH.ico" />
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
