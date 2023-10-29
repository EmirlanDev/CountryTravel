import React from "react";
import inst from "./../../images/inst.svg";
import faceb from "./../../images/faceb.svg";
import vk from "./../../images/vk.svg";
import email from "./../../images/email.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer__logo">
            <h2>logo</h2>
            <div className="footer__logo__icon">
              <img src={inst} alt="inst" />
              <img src={faceb} alt="faceb" />
              <img src={vk} alt="vk" />
              <img src={email} alt="email" />
            </div>
          </div>
          <div className="footer__home">
            <NavLink to="/">
              <h2>Home</h2>
            </NavLink>
            <ul>
              <li>Attractions</li>
              <li>Map</li>
            </ul>
          </div>
          <div className="footer__regions">
            <NavLink to="/regions">
              <h2>Regions</h2>
            </NavLink>
            <ul>
              <li>Batken</li>
              <li>Jalal-Abad</li>
              <li>Issyk_kul</li>
              <li>Naryn</li>
              <li>Osh</li>
              <li>Talas</li>
              <li>Chyi</li>
            </ul>
          </div>
          <div className="footer__culture">
            <NavLink to="/culture">
              <h2>Culture</h2>
            </NavLink>
            <ul>
              <li>Games</li>
              <li>National instruments</li>
              <li>National clothes</li>
              <li>Hand crafts</li>
              <li>Currency</li>
              <li>Kitchen</li>
            </ul>
          </div>
          <div className="footer__gallery">
            <NavLink to="gallery">
              <h2>Gallery</h2>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </footer>
  );
};

export default Footer;
