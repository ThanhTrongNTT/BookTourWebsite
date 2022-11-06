import React from "react";
import ButtonSelect from "~/components/button/ButtonSelect";
import TourItem from "~/components/TourItem";
import Footer from "~/modules/partials/Footer";
import { useState } from "react";
import SearchPageValue from "~/components/SearchPageValue";

const SearchPage = () => {
  return (
    <div>
      <div className="tour-search">
        <div className="mx-auto w-full max-w-6xl">
          <ul className="">
            <li className="inline-block text-[13px] font-normal">Link 1 »</li>
            <li className="inline-block text-[13px] ml-[5px] font-normal">
              Link 2 »
            </li>
            <li className="inline-block text-[13px] ml-[5px] font-normal">
              Link 3
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <div className="flex max-w-[1500px] mx-auto">
          <SearchPageValue></SearchPageValue>
          <div className="">
            <h1 className="py-4 h2 fw-bold heading text-center text-5xl">
              Du lịch Hải Phòng
            </h1>
            <hr></hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              tempora nihil necessitatibus modi inventore velit natus totam nisi
              obcaecati? Inventore nulla quam amet nemo perferendis, illum unde
              incidunt tempore natus!
            </p>
            <div className="d-none d-lg-block">
              <div className="order-by flex">
                <div className="order-by-title text-sm">
                  <span>Chúng tôi tìm thấy </span>
                  <strong>numbers</strong>
                  <span> tour cho quý khách.</span>
                </div>
                <div className="order-by-left text-sm relative left-80">
                  <span>Sắp xếp theo</span>
                  <select className="order-left text-center">
                    <option value="-1">--- Chọn ---</option>
                    <option value="0">Theo giá thấp đến cao</option>
                    <option value="1">Theo giá cao đến thấp</option>
                    <option value="2">Giảm giá nhiều nhất</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid gap-3 grid-cols-3">
              <TourItem></TourItem>
              <TourItem></TourItem>
              <TourItem></TourItem>
              <TourItem></TourItem>
              <TourItem></TourItem>
              <TourItem></TourItem>
            </div>
          </div>
        </div>
      </div>
      <Footer className="pt-5 bg-black"></Footer>
    </div>
  );
};

export default SearchPage;
