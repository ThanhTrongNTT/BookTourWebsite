import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-sky-200 mt-[50px] w-full bg-black text-4xl">
          TripGuide : Have a good trip
        </h1>
        <div className="grid grid-cols-3 grid-flow-col gap-3 text-center bg-black text-white place-content-center">
          <div className="w-fit">
            <p>Domestic Tourism</p>
          </div>
          <div className="w-fit">
            <p>Kind Of Tour</p>
          </div>
          <div className="w-fit">
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
