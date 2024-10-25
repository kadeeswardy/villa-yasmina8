import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
            <h1>ABOUT US</h1>
            <p>
              The name Villa "Yasmina" in Arabic means "symbol of love, purity and beauty". You should enjoy your holiday from day one and feel at home.
              Experience oriental-romantic nights in your private villa/pool, sip a drink at the bar, or relax in the lounge. Built in Nubian style, Villa Yasmina will enchant you with its domes, arches and colours. Enjoy incredible views of the lagoon and golf course.
            </p>
            {showMore && (
              <>
                <p>
                  The newly renovated "Villa Yasmina" offers plenty of space for privacy, tranquility and relaxation. In the lush garden (approx. 1650m2) with numerous palm trees around the villa you can immerse yourself in the large heated pool. Enjoy the unobstructed view of the lagoon from the loungers, four-poster bed or shaded lounge with BBQ and bar counter.
                </p>
                <p>
                  Villa Yasmina has 3 spacious and tastefully decorated bedrooms with wardrobes and chests of drawers. The single beds in the bedrooms can be pushed together to form a double bed. Next to the two bathrooms with toilet/shower there is a guest toilet. The spacious and elegant living room has an almost 8m high dome and invites you to linger with its cozy couch and large flat-screen TV (channels of all languages). Kitchen has all necessary crockery and cooking utensils. Feel free to use our WiFi unlimited.
                </p>
                <p>
                  Despite the tranquility and privacy, the villa is very central. Downtown is just an 8-minute walk away. Here you will find many restaurants, bars, shops, banks and a pharmacy. Even the hospital, karting alley, squash hall, tennis courts and campus are within walking distance.
                </p>
              </>
            )}
            <button onClick={handleShowMore}>
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/public/villa-14.JPG" alt="people" />
          </div>
          <div className="image_2">
            <img src="/public/villa-12.JPG" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
