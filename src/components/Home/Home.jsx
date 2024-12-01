import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../SubComponents/HeroSection";
import TopVillas from "../../SubComponents/TopVillas";
import About from "../../SubComponents/About";
import Contact from "../../SubComponents/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Villa Yasmina - Your Dream Villa in El Gouna</title>
        <meta name="description" content="Villa Yasmina offers a luxurious stay in El Gouna, Egypt. Discover the beauty and comfort of our villas." />
      </Helmet>
      
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
