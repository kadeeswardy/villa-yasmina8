import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>Villa Yasmina</h4>
          <p>
          You should enjoy your holiday from day one and feel at home
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
         
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <span>+20 12 73177997</span>
          <span>villa.yasmina.elgouna@gmail.com</span>
          <p>© All Rights Reserved By Kadees Wardy.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
