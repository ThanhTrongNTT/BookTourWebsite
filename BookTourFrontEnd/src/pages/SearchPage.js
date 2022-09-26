import React from "react";
import ButtonSelect from "~/components/button/ButtonSelect";
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
        <div className="flex max-w-7xl mx-auto">
          <aside className="w-full max-w-[318px] bg-slate-100">
            <p className="px-4 font-bold text-xl py-5">Results</p>
            <div className="px-4 bg-primary-blue text-white font-bold py-1.5">
              <p>Country</p>
            </div>
            <div className="px-3 py-4">
              <div className="mb-3">
                <select className="w-full border-2">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                </select>
                <button className="px-4 w-full bg-primary-blue text-white mt-1">
                  <p>Domestic</p>
                </button>
              </div>
            </div>
            <div className="px-4 py-1.5 mb-3">
              <p className="font-bold mb-3">Tour type</p>
              <select className="w-full border-2">
                <option value="none">--Select Tour Type--</option>
                <option value="packageTour">Package Tour</option>
                <option value="familyTour">Family Tour</option>
              </select>
            </div>
            <div className="px-4 py-1.5 mb-3">
              <p className="font-bold mb-3">Destination</p>
              <select className="w-full border-2">
                <option value="none">--Select Tour Type--</option>
                <option value="packageTour">Package Tour</option>
                <option value="familyTour">Family Tour</option>
              </select>
            </div>
            <div className="px-4 py-1.5 mb-3">
              <p className="font-bold mb-3">Days travel</p>
              <div className="grid grid-cols-2 gap-4 place-content-stretch">
                <ButtonSelect className="rounded h-10 w-full">
                  1-3 days
                </ButtonSelect>
                <ButtonSelect className="rounded h-10 w-full">
                  4-7 days
                </ButtonSelect>
                <ButtonSelect className="rounded h-10 w-full">
                  8-14 days
                </ButtonSelect>
                <ButtonSelect className="rounded h-10 w-full bg-primary-blue">
                  Over 14 days
                </ButtonSelect>
              </div>
            </div>
            <div className="px-4 py-1.5 mb-3">
              <p className="font-bold mb-3">Depart day</p>
              <input id="myID" placeholder="01/01/0001" className="w-full" />
            </div>
            <div className="px-4 py-1.5 mb-3">
              <p className="font-bold mb-3">Members</p>
              <div className="grid grid-cols-2 gap-4 place-content-stretch">
                <ButtonSelect className="rounded h-10 w-full">
                  1 Person
                </ButtonSelect>
                <ButtonSelect className="rounded h-10 w-full">
                  2 Persons
                </ButtonSelect>
                <ButtonSelect className="rounded h-10 w-full">
                  3-5 Persons
                </ButtonSelect>
                <ButtonSelect className="rounded h-10 w-full bg-primary-blue">
                  5+ Person
                </ButtonSelect>
              </div>
            </div>
            <div className="px-4 py-1.5 mb-3">
              <p className="font-bold mb-3">Tour Kind</p>
              <div className="grid grid-cols-2 gap-4 place-content-stretch">
                <ButtonSelect className="rounded h-10 w-full">
                  High-Luxury
                </ButtonSelect>
                <ButtonSelect className="rounded h-10 w-full">
                  Standard
                </ButtonSelect>
                <ButtonSelect className="rounded h-10 w-full">
                  Save
                </ButtonSelect>
                <ButtonSelect className="rounded h-10 w-full bg-primary-blue">
                  Good Price
                </ButtonSelect>
              </div>
            </div>
            <div className="flex px-4 py-1.5 mb-3">
              <p className="font-bold mb-3">Search Filters</p>
              <hr className="flex-1 mt-3"></hr>
              <div className="grid grid-cols-2 gap-4 place-content-stretch"></div>
            </div>
            <div className="px-4 py-1.5 mb-3">
              <p className="font-bold mb-3">Budget</p>
              <div className="price-input grid grid-cols-2 gap-2">
                <div className="min flex flex-row gap-2">
                  <span>Min</span>
                  <input type="number" className="w-full bg-c6"></input>
                </div>
                <div className="max flex flex-row gap-2">
                  <span>Max</span>
                  <input type="number" className="w-full bg-c6"></input>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1">right</div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
