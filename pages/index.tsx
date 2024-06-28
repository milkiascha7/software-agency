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
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/preloader/preloader";

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
    <>
      <Head>
        <title>MH Designs</title>
        <link rel="icon" href="/MH.ico" />
      </Head>
      <div className={styles.container}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        <Masthead />
        <Trustedby />
        <Aboutus />
        <Works />
        <Skills />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
