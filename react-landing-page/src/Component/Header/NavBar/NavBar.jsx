import React from "react";
import "./NavBar.css";
import Logo from "../../../assets/logo.svg";
import burger from "../../../assets/icon-hamburger.svg"

const NavBar = () => {
  return (
    <div>
      <div className="cc-container  NavBarFlex">
        <div className="NavImage">
          <img className="NavPhoto" src={Logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Event</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>

          <img className="Burger" src={burger} alt="" />
        </ul>
        <div className="NavContent">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
