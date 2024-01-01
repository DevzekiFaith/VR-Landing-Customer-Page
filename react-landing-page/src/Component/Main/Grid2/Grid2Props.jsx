import React from "react";

const Grid2Props = (props) => {
  return (
    <div>
      <img className="PropsImage" src={props.image} alt="" />
      <h3 className="Nature">{props.nature}</h3>
    </div>
  );
};

export default Grid2Props;
