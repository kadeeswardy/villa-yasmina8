import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();

  // التنقل إلى الصفحة الرئيسية
  const gotoHome = () => navigate('/');

  // التبديل بين حالة القائمة المنبثقة
  const toggleNav = () => setNavHeight((prev) => !prev);

  return (
    <nav className={`nav ${navHeight ? "show" : ""}`}>
      <div className="logo" onClick={gotoHome}>Villa Yasmina</div>
      <ul className="nav-links">
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link to="/villas">GALLERY</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <RxHamburgerMenu className="hamburger" onClick={toggleNav} />
    </nav>
  );
};

export default Navbar;
