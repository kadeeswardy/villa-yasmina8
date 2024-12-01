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

  // فحص الـ state
  console.log("Show More State:", showMore);

  return (
    <section id="singleVilla" className="page">
      <div className="container">
        <h3>{filteredVilla.name}</h3>
        {numericId === 1 && (
          <div className="images">
            <div className="villaImg">
              <img src="/villa-14.JPG" alt="villa" />
            </div>
            <div className="otherImgs">
              <div>
                <img src="/villa-13.JPG" alt="villa" />
                <img src="/villa-12.JPG" alt="villa" />
              </div>
              <div>
                <img src="/villa-8.JPG" alt="villa" />
                <img src="/villa-15.JPG" alt="villa" />
              </div>
            </div>
          </div>
        )}
        {numericId === 2 && (
          <div className="details">
            <h4>About the Villa</h4>
            <ul>
              <li>Fully furnished</li>
              <li>Close to the beach</li>
            </ul>
            <div className="villa-description">
              <p className={showMore ? "show-all" : "show-limited"}>
                <strong>What this place offers:</strong>
                <ul>
                  <li><strong>Scenic views:</strong> Beach view, Desert view, Garden view, Golf course view, Pool view</li>
                  <li><strong>Bathroom:</strong> Hair dryer, Outdoor shower, Hot water</li>
                  <li><strong>Bedroom and laundry:</strong> Washer, Essentials: Towels, bed sheets, soap, toilet paper, Hangers, Bed linens, Extra pillows and blankets, Room-darkening shades, Iron, Clothing storage (closet)</li>
                  <li><strong>Entertainment:</strong> HDTV</li>
                  <li><strong>Family:</strong> Pack ’n play/Travel crib</li>
                  <li><strong>Heating and cooling:</strong> Air conditioning, Heating</li>
                  <li><strong>Home safety:</strong> Fire extinguisher</li>
                  <li><strong>Internet and office:</strong> Wifi</li>
                  <li><strong>Kitchen and dining:</strong> Kitchen (Space where guests can cook their own meals), Refrigerator, Microwave, Cooking basics (Pots and pans, oil, salt, and pepper), Dishes and silverware (Bowls, chopsticks, plates, cups, etc.), Freezer, Dishwasher, Electric stove, Oven, Hot water kettle, Coffee maker, Wine glasses, Toaster, Baking sheet, Dining table</li>
                  <li><strong>Location features:</strong> Waterfront (Right next to a body of water), Private entrance (Separate street or building entrance)</li>
                  <li><strong>Outdoor:</strong> Private patio or balcony, Private backyard (Not fully fenced), Outdoor furniture, Outdoor dining area, BBQ grill</li>
                  <li><strong>Parking and facilities:</strong> Free parking on premises, Free street parking, Private pool</li>
                  <li><strong>Services:</strong> Long term stays allowed (Allow stay for 28 days or more)</li>
                  <li><strong>Not included:</strong> Exterior security cameras on property, Dryer, Smoke alarm (There is no smoke alarm on the property), Carbon monoxide alarm (Host has indicated no carbon monoxide detector is necessary)</li>
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
