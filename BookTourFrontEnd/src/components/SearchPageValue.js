import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonSelect from "~/components/button/ButtonSelect";
import { Footer } from "~/modules/partials";

const SearchPageValue = () => {
  const { register, handleSubmit } = useForm();
  const [color, setColor] = useState();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[318px] bg-slate-100 mr-10"
      autoComplete="off"
    >
      <p className="px-4 font-bold text-xl py-5">Results</p>
      <div className="px-4 bg-primary-blue text-white font-bold py-1.5">
        <p>Country</p>
      </div>
      <div className="px-3 py-4">
        <div className="mb-3">
          <select
            name="country"
            className="w-full border-2"
            {...register("country")}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            {/* {...register("country")} */}
          </select>
          <button className="px-4 w-full bg-primary-blue text-white mt-1">
            <p>Domestic</p>
          </button>
        </div>
      </div>
      <div className="px-4 py-1.5 mb-3">
        <p className="font-bold mb-3">Tour type</p>
        <select
          name="tourType"
          className="w-full border-2"
          {...register("tourtype")}
        >
          <option value="none">--Select Tour Type--</option>
          <option value="packageTour">Package Tour</option>
          <option value="familyTour">Family Tour</option>
          {/* {...register("tourType")} */}
        </select>
      </div>
      <div className="px-4 py-1.5 mb-3">
        <p className="font-bold mb-3">Destination</p>
        <select
          name="destination"
          className="w-full border-2"
          {...register("destination")}
        >
          <option value="none">--Select Tour Type--</option>
          <option value="packageTour">Package Tour</option>
          <option value="familyTour">Family Tour</option>
          {/* {...register("destination")} */}
        </select>
      </div>
      <div className="px-4 py-1.5 mb-3">
        <p className="font-bold mb-3">Days travel</p>
        <div className="grid grid-cols-2 gap-4 place-content-stretch">
          <ButtonSelect className="rounded h-10 w-full">1-3 days</ButtonSelect>
          <ButtonSelect className="rounded h-10 w-full">4-7 days</ButtonSelect>
          <ButtonSelect className="rounded h-10 w-full">8-14 days</ButtonSelect>
          <ButtonSelect className="rounded h-10 w-full">
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
          <ButtonSelect className="rounded h-10 w-full">1 Person</ButtonSelect>
          <ButtonSelect className="rounded h-10 w-full">2 Persons</ButtonSelect>
          <ButtonSelect className="rounded h-10 w-full">
            3-5 Persons
          </ButtonSelect>
          <ButtonSelect className="rounded h-10 w-full">5+ Person</ButtonSelect>
        </div>
      </div>
      <div className="px-4 py-1.5 mb-3">
        <p className="font-bold mb-3">Tour Kind</p>
        <div className="grid grid-cols-2 gap-4 place-content-stretch">
          <ButtonSelect className="rounded h-10 w-full">
            High-Luxury
          </ButtonSelect>
          <ButtonSelect className="rounded h-10 w-full">Standard</ButtonSelect>
          <ButtonSelect className="rounded h-10 w-full">Save</ButtonSelect>
          <ButtonSelect className="rounded h-10 w-full">
            Good Price
          </ButtonSelect>
        </div>
      </div>
      <div className="flex px-4 py-1.5 mb-3">
        <p className="font-bold mb-3">Search Filters</p>
        <hr className="flex-1 mt-3"></hr>
        <div className="grid grid-cols-2 gap-4 place-content-stretch"></div>
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
      ></button>
    </form>
  );
};

export default SearchPageValue;
