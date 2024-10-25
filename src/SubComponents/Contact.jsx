import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";
const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
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
        
        <div className="container_2">
        <img src="/public/villa-4.JPG" alt="about" />
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;
