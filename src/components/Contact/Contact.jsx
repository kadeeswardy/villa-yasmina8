import React from "react";
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
   <section id="contact">
  <h1>Contact Us</h1>
  
  <div className="container">
    <img src="/villa-16.JPG" alt="villa" />
    
    <div className="content">
      <h3>Let's Connect</h3>
      <div>
        <p>Phone</p>
        <span>+20 12 73177997</span>
      </div>
      <div>
        <p>Email</p>
        <span>villa.yasmina.elgouna@gmail.com</span>
      </div>
      <div>
        <p>Address</p>
        <span>
          El Gouna is the Venice of Egypt <br />
          Located about 30 km north of Hurghada Airport.
        </span>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Contact;
