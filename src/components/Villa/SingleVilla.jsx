import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";

const SingleVilla = () => {
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.find((villa) => villa.id === numericId);

  if (!filteredVilla) {
    return <p>Villa not found!</p>;
  }


  console.log("Show More State:", showMore);

  return (
    <section id="singleVilla" className="page">
      <div className="container">
        
        <h3>{filteredVilla.name}</h3>
       
        {numericId === 1 && (
  <div className="villa-details">
    {/* 🔹 الصور بتنسيق احترافي */}
    <div className="images-container">
      <div className="main-image">
        <img src="/villa-14.JPG" alt="villa" />
      </div>
      <div className="grid-images">
        <img src="/villa.jpg" alt="villa" />
        <img src="/villa-12.JPG" alt="villa" />
        <img src="/villa-8.JPG" alt="villa" />
        <img src="/villa-9.JPG" alt="villa" />
      </div>
    </div>


    <div className="villa-description">
      <h2>Villa Yasmina Overview</h2>
      <p>
        The "Villa Yasmina" has 3 spacious and tastefully furnished bedrooms with their own wardrobes and chests of drawers. 
        The single beds in the bedrooms can be pushed together to form a double bed. 
        In addition to the two bathrooms with toilet/shower, there is a guest toilet.
      </p>
      <p>
        The spacious and elegant living room has an almost 8m high dome and invites you to linger with its comfortable couch 
        and the large flat-screen TV (channels of all languages). The kitchen has all the necessary crockery and cooking utensils.
      </p>
      <p>
        You are welcome to use our WiFi unlimitedly.
      </p>
    </div>
  </div>
)}

        {numericId === 2 && (
          <div className="details">
            <h4>About the Villa</h4>
           
            <div className="villa-description">
              <p className={showMore ? "show-all" : "show-limited"}>
           
                <ul>
  <li><strong>The newly renovated "Villa Yasmina"</strong> offers plenty of space for privacy, peace, and relaxation for a maximum of 6 people. In the lush garden (approx. 1650sqm) with numerous palm trees around the villa, you can dive into the large private and heated pool. Enjoy the unobstructed view of the lagoon from the loungers, the sunbeds, or the shaded lounge with BBQ and bar counter.</li>
  <li>Despite the peace and privacy, the villa is very central. In just 8 minutes walk, you are in the city center (downtown). Here you will find many restaurants, bars, as well as shops, banks, and a pharmacy. Even the hospital, the kart track, the squash hall, the tennis courts, and the campus are within walking distance.</li>
</ul>

<ul>
  <li><strong>Scenic views:</strong> Beach view, Desert view, Garden view, Golf course view, Pool view</li>
  <li><strong>Bathroom:</strong> Hair dryer, towels, soap, toilet paper</li>
  <li><strong>Bedroom:</strong> Bed sheets and linen, Hangers, Extra pillows and blankets, Room-darkening shades, Clothing storage (closet)</li>
  <li><strong>Entertainment:</strong> HDTV</li>
  <li><strong>Heating and cooling:</strong> Air conditioning (with heating)</li>
  <li><strong>Home safety:</strong> Fire extinguisher</li>
  <li><strong>Internet:</strong> Free WiFi</li>
  <li><strong>Appliances:</strong> Washing machine and iron</li>
  <li><strong>Kitchen and dining:</strong> Kitchen, Refrigerator, Microwave, Cooking basics (Pots and pans, oil, salt, and pepper), Dishes and silverware, Freezer, Dishwasher, Electric stove, Oven, Hot water kettle, Coffee maker, Wine glasses, Toaster, Dining table (inside and outside)</li>
  <li><strong>Location features:</strong> Waterfront (closed lagoon), Private entrance</li>
  <li><strong>Outdoor:</strong> Private patio or balcony, Private backyard (not fully fenced), Outdoor furniture, Outdoor dining area, BBQ grill, Lounge</li>
  <li><strong>Parking:</strong> Free parking on premises, Carport</li>
  <li><strong>Private pool:</strong> Approx. 13.5m x 6.5m, heated, outdoor shower</li>
</ul>

<h3>House rules:</h3>
<ul>
  <li>You will be staying in someone's home – so please treat the space with care and respect.</li>
  <li><strong>Check-in and check-out:</strong>
    <ul>
      <li>Check-in: 4 pm – 6 pm</li>
      <li>Check-out before 11 am</li>
    </ul>
  </li>
  <li><strong>During your stay:</strong>
    <ul>
      <li>Maximum 6 guests</li>
      <li>No pets, No parties or events, No smoking (inside)</li>
      <li>The volume of the music must be chosen so that no neighbors are disturbed!</li>
      <li>We assume no liability for valuables. Parents are responsible for their children.</li>
      <li>The use of the property and the villa (e.g., pool, BBQ, etc.) is at your own risk!</li>
      <li>Please note that a security deposit of EGP 10,000, $250, or €200 in cash is required upon check-in.</li>
      <li>The deposit will be refunded at check-out, provided that nothing has been damaged, dishes and glasses have been washed, and rubbish has been disposed of.</li>
    </ul>
  </li>
</ul>

              </p>
              <button
                className="show-more-btn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        )}
              {numericId === 3 && (
          <div className="location">
            <h4>Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.187616917934!2d33.6699!3d27.3938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1455f45bff2256bd%3A0x43158a35444eab36!2sgn11!5e0!3m2!1sen!2seg!4v1698312528000!5m2!1sen!2seg"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleVilla;
