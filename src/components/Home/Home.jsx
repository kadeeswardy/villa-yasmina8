import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../SubComponents/HeroSection";
import TopVillas from "../../SubComponents/TopVillas";

import About from "../../SubComponents/About";
import Contact from "../../SubComponents/Contact";

const Home = () => {
  return (
    <>
      <article className="page">
        <HeroSection />
        <TopVillas />
       
        <About />
        <Contact />
      </article>
    </>
  );
};

export default Home;
