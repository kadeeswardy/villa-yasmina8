import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="aboutUs_Mini">
      <div className="content-container">
        {/* 🔹 قسم النصوص */}
        <div className="text-content">
          <h1>ABOUT US</h1>
          <p>
            The name Villa "Yasmina" in Arabic means "symbol of love, purity and beauty".
            You should enjoy your holiday from day one and feel at home. Experience oriental-romantic
            nights in your private villa/pool, sip a drink at the bar, or relax in the lounge.
          </p>
          <p>
            Built in Nubian style, Villa Yasmina will enchant you with its domes, arches, and colours.
            Enjoy incredible views of the lagoon and golf course.
          </p>
        </div>

        {/* 🔹 قسم الصور */}
        <div className="image-gallery">
          <div className="main-image">
            <img src="/villa-6.JPG" alt="Villa Yasmina" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;