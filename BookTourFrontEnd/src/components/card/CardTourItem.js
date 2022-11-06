import React from "react";
import { Link } from "react-router-dom";
import { WrapperGrid } from "../common";

const CardTourItem = ({
  imgThumbnail,
  ribbonText,
  title,
  point,
  rate,
  listPros,
  price,
}) => {
  return (
    <div className="bg-white font-Helvetica shadow-md transition-all hover:bg-[rgba(64,166,242,0.1)]">
      <Link to="/">
        <WrapperGrid cols="1" rows="2" className="relative">
          <img
            alt=""
            src={imgThumbnail}
            className="thumbnail h-[225px] w-full object-cover"
          />
          <div className="absolute top-3 left-0 -translate-x-[10px] bg-[#E52822]">
            <h2 className="ribbon">{ribbonText}</h2>
          </div>
          <div className="p-4">
            <p className="text-c3s text-lg font-bold">{title}</p>
            <div className="rate my-3">
              <div className="">
                <span className="relative rounded-md bg-[#9fc43a] py-1 px-2 text-center font-bold text-white">
                  {point}
                </span>
                <p className="ml-1 mr-2 inline-block font-bold text-[#9fc43a]">
                  Perfect
                </p>
                <p className="inline-block border-l border-l-c3 leading-none">
                  <span className="ml-2">{rate} </span>
                  rate
                </p>
              </div>
            </div>
            <ul className="tour-list-pros">
              {listPros.map((item, index) => (
                <li key={index}>{item.value}</li>
              ))}
            </ul>
            <div className="text-right">
              <span className="price text-2xl font-bold text-[#f79321]">
                {price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
          </div>
        </WrapperGrid>
      </Link>
    </div>
  );
};

export default CardTourItem;
