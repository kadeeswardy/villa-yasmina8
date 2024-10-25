import React from "react";
import { Helmet } from 'react-helmet';
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/public/villa-1.JPG" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
        <p></p>
        Villa Yasmine was very beautiful with a great private pool. Extremely walkable to downtown which was nice given that it was difficult to get a Toktok.
I went with my family and we spent the majority of time in the pool as well as eating in the dining room. The space was great, very clean. We had an issue where the internet was disconnected, but it was very quickly resolved by the team and had no issues otherwise.
Absolutely one of the better places that I’ve stayed in Gouna and will happily be coming back!
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
