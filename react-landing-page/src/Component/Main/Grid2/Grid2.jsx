import React from "react";
import "./Grid2.css";
import { Grid2Data } from "./Grid2Data";
import Grid2Props from "./Grid2Props";

const Grid2 = () => {
  return (
    <div className="Grid2Flex">
      {Grid2Data.map((each) => (
        <Grid2Props key={each.id} nature={each.nature} image={each.image} />
      ))}
    </div>
  );
};

export default Grid2;
