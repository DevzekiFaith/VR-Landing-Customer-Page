import React from "react";
import "./Footer.css";
import flogo from "../../../assets/logo.svg";
import logo1 from "../../../assets/icon-facebook.svg"
import logo2 from "../../../assets/icon-instagram.svg"
import logo3 from "../../../assets/icon-pinterest.svg"
import logo4 from "../../../assets/icon-twitter.svg"

const Footer = () => {
  return (
    <div>
      <div className="GeneralFooter">
        <div className="cc-container  FooterSide">
          <div>
            <img src={flogo} alt="" />
          </div>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Supports</a>
            </li>
          </ul>
        </div>

        <div className="FooterContent">
          <ul>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </ul>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
