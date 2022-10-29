import React from "react";
import { useState } from "react";
import { WrapperFlex } from "../common";

const ProgressBar = ({ done }) => {
  const [styled, setStyled] = useState({});
  return (
    <WrapperFlex items="center" spacing="4">
      <div className=""></div>
      {/* <span>{value}%</span> */}
    </WrapperFlex>
  );
};

export default ProgressBar;
