import React from "react";

const ImmersiveProps = (props) => {
  return (
    <div>
      <img className="ImmImage" src={props.image} alt="" />
      <h1>{props.game}</h1>
    </div>
  );
};

export default ImmersiveProps;
