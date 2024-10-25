import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
     
       
        <div className="container">
      
       <img src="/public/villa-16.JPG" alt="about" />
       
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+49 172 7223515</span>
              </div>
              <div>
                <p>Email</p>
                <span>peter-hans.wagner@dvag.de</span>
              </div>
              <div>
                <p>Address</p>
                <span>El Gouna is the Venice of Egypt<br></br> and is located about 30 km north<br></br> of Hurghada Airport.</span>
              </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
