import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";

const SingleVilla = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.filter((villa) => villa.id === numericId)[0];

  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
          <h3>{filteredVilla.name}</h3>
          <div className="images">
            <div className="villaImg">
              <img src={filteredVilla.image} alt={filteredVilla.name} />
            </div>
            <div className="otherImgs">
              <div>
                <img src={"/public/villa-11.JPG"} alt="villa" />
                <img src={"/public/villa-12.JPG"} alt="villa" />
              </div>
              <div>
                <img src={"/public/villa-13.JPG"} alt="villa" />
                <img src={"/public/villa-14.JPG"} alt="villa" />
              </div>
            </div>
          </div>
          <h4>{filteredVilla.location}</h4>
         
         
  
          <div className="location">
            <h4>LOCATION</h4>
            <p>El Gouna is the Venice of Egypt and is located about 30 km north of Hurghada Airport.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.187616917934!2d33.6699!3d27.3938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1455f45bff2256bd%3A0x43158a35444eab36!2sEl%20Gouna!5e0!3m2!1sen!2seg!4v1698312528000!5m2!1sen!2seg"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVilla;
