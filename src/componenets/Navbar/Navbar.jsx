import React from "react";
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className="nav__items">
      <div className="logo">Hurry <br />Up.<br /> buy now <br /></div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
