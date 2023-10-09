import React from "react";
import "./Navbar.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Landing from "../Landing/Landing";
const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="nav__items">
          <div className="logo">
            Hurry <br />
            Up.
            <br /> buy now <br />
          </div>
          <ul>
            <li>
              <Link to="#section1" smooth>
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" smooth>
                About
              </Link>
            </li>
            <li>
              <Link to="#services" smooth>
                Services
              </Link>
            </li>
            <li>
              <Link to="#contact" smooth>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
