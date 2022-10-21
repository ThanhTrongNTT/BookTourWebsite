import { format } from "date-fns";
import { Fragment } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";

import { RenderPlaceHot } from "../tippy/renders";

import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperFlex, WrapperGrid } from "@/common";
import DropdownList from "@/dropdown/DropdownList";
import { IconCalendar } from "@/icon";
import Label from "@/label/Label";

const SearchBoxTour = () => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      date: new Date(),
    },
    mode: "onSubmit",
  });

  const handleSearch = (value) => {
    value.date = format(value.date, "dd/MM/yyyy");
    console.log(value);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSearch)}
      className="mt-5"
    >
      <WrapperGrid rows="2" spacing="4">
        <RenderPlaceHot control={control} setValue={setValue} />
        <WrapperGrid cols="12" spacing="4">
          <WrapperGrid col="5">
            <WrapperFlex
              items="center"
              spacing="3"
              radius="4"
              className="bg-white"
            >
              <span className="pl-4 text-c4">
                <IconCalendar />
              </span>
              <span className="z-50 text-black">
                <Controller
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <Fragment>
                      <Label htmlFor="depart-date">Depart Date</Label>
                      <ReactDatePicker
                        id="depart-date"
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                        onChange={field.onChange}
                        selected={field.value}
                      />
                    </Fragment>
                  )}
                />
              </span>
            </WrapperFlex>
          </WrapperGrid>
          <WrapperGrid col="5">
            <DropdownList />
          </WrapperGrid>
          <WrapperGrid col="2">
            <ButtonSubmitDefault background="blue" radius="4">
              Search
            </ButtonSubmitDefault>
          </WrapperGrid>
        </WrapperGrid>
      </WrapperGrid>
    </form>
  );
};

export default SearchBoxTour;
