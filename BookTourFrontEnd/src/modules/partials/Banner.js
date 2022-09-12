import React from "react";

const Banner = ({ src }) => {
  return (
    <div className="w-full h-[578px]">
      {/* <img src={src} alt="banner-img" /> */}
      <img
        src="https://media.cntraveler.com/photos/599eee9c0dca4f6d638181f7/16:9/w_2560%2Cc_limit/Direct_nonstop_GettyImages-535731391.jpg"
        alt="banner-img"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
