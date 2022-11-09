import { Fragment } from "react";
import { Link } from "react-router-dom";
import { WrapperFlex, WrapperGrid } from "../common";

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
    <div className="h-full bg-white font-Helvetica shadow-md transition-all hover:bg-[rgba(64,166,242,0.1)]">
      <Link to="/">
        <WrapperFlex col className="relative h-full">
          <img
            alt=""
            src={imgThumbnail}
            className="thumbnail h-[250px] w-full object-cover"
          />
          <div className="absolute top-3 left-0 -translate-x-[10px] bg-[#E52822]">
            <h2 className="ribbon">{ribbonText}</h2>
          </div>
          <WrapperFlex flex1>
            <WrapperGrid rows="3" className="p-4">
              <WrapperGrid row="1">
                <p className="text-lg font-bold text-c3">{title}</p>
              </WrapperGrid>
              <WrapperGrid row="2">
                <WrapperFlex col>
                  <div className="rate my-3 h-[24px]">
                    {point && (
                      <Fragment>
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
                      </Fragment>
                    )}
                  </div>
                  <ul className="tour-list-pros">
                    {listPros.map((item, index) => (
                      <li key={index}>{item.value}</li>
                    ))}
                  </ul>
                  <WrapperFlex flex1 col className="flex-shrink-0">
                    <span className="price mt-auto text-right text-2xl font-bold text-[#f79321]">
                      {price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </WrapperFlex>
                </WrapperFlex>
              </WrapperGrid>
            </WrapperGrid>
          </WrapperFlex>
        </WrapperFlex>
      </Link>
    </div>
  );
};

export default CardTourItem;
