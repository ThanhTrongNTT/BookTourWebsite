import React from "react";
const SearchBox = () => {
  const handleClick = (navName) => {
    let navItems = document.getElementsByClassName("navSearchBox");
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.color = "black";
    }
    document.getElementById(navName).style.color = "red";
  };

  return (
    <div className="py-7 px-16">
      <div className="">
        <button
          id="hotel"
          className="navSearchBox"
          onClick={() => {
            handleClick("hotel");
          }}
        >
          Hotel
        </button>
        <span
          id="flight"
          className="navSearchBox"
          onClick={() => {
            handleClick("flight");
          }}
        >
          Flight
        </span>
        <span
          id="car"
          className="navSearchBox"
          onClick={() => {
            handleClick("car");
          }}
        >
          Car
        </span>
      </div>
    </div>
  );
};

export default SearchBox;
