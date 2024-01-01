import React from "react";
import "./Section2.css";
import Sec2Image from "../../../assets/image-interactive.jpg";

const Section2 = () => {
  return (
    <div>
      <div className=" cc-container  Sect2Div">
        <div className="Sect2DivContent">
          <img src={Sec2Image} alt="" />
        </div>
        <div className="cc-container  Sect2DivAbsolute">
          <div className="AbsoluteContent">
            <h1>The leader in interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
