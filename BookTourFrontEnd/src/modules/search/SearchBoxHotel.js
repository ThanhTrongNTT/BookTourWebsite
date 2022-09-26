import Tippy from "@tippyjs/react/headless";
import { createContext, useState } from "react";
import { withErrorBoundary } from "react-error-boundary";

import useClickOutSide from "~/hooks/useClickOutSide";
import { RenderFormDate } from "~/modules/tippy";

import { ErrorBoundary, FormField } from "@/common";
import { FieldSearchBox } from "@/field";
import { IconCalendar, IconMinus, IconPeopleGroup, IconPlus } from "@/icon";
import Number from "@/number/Number";
import Wrapper from "@/wrapper/Wrapper";
export const CustomCalendarContext = createContext();

const SearchBoxHotel = ({ control, setValue }) => {
  const { show, setShow, nodeRef, calendarRef } = useClickOutSide();
  const [focusRange, setFocusRange] = useState([0, 0]);
  const [placement, setPlacement] = useState(false);
  //Room
  const [numberRoom, setNumberRoom] = useState(1);
  const [numberAdults, setNumberAdults] = useState(1);
  const [numberChildrens, setNumberChildrens] = useState(0);
  const value = {
    focusRange,
    placement,
  };
  const handleClickDepartDate = () => {
    setShow(true);
    setFocusRange([0, 0]);
    setPlacement(false);
  };
  const handleClickReturnDate = () => {
    setShow(true);
    setFocusRange([0, 1]);
    setPlacement(true);
  };
  const handlePlusRoom = () => {
    setNumberRoom(numberRoom + 1);
    setValue("room", numberRoom + 1);
  };
  const handleMinusRoom = () => {
    if (numberRoom === 1) return;
    setNumberRoom(numberRoom - 1);
    setValue("room", numberRoom - 1);
  };
  const handlePlusAdults = () => {
    setNumberAdults(numberAdults + 1);
    setValue("adults", numberAdults + 1);
  };
  const handleMinusAdults = () => {
    if (numberAdults === 1) return;
    setNumberAdults(numberAdults - 1);
    setValue("adults", numberAdults - 1);
  };
  const handlePlusChildrens = () => {
    setNumberChildrens(numberChildrens + 1);
    setValue("childrens", numberChildrens + 1);
  };
  const handleMinusChildrens = () => {
    if (numberChildrens === 1) return;
    setNumberChildrens(numberChildrens - 1);
    setValue("childrens", numberChildrens - 1);
  };
  return (
    <CustomCalendarContext.Provider value={value}>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <div>
            <Tippy
              ref={nodeRef}
              visible={show}
              interactive
              placement="bottom-start"
              render={(attrs) => (
                <RenderFormDate
                  // placement={placement}
                  // focusedRange={focusRange}
                  refs={calendarRef}
                  name1="depart-date"
                  name2="return-date"
                  control={control}
                  setValue={setValue}
                  {...attrs}
                />
              )}
            >
              <div className="grid grid-cols-2">
                <div
                  className="flex py-1 relative border-r border-r-c6 items-center bg-white cursor-pointer gap-2 rounded-tl-[4px] rounded-bl-[4px] after:absolute after:w-5 after:h-5 after:content-['_'] after:bg-icon-moon after:bg-no-repeat after:right-0 after:translate-x-2/4 "
                  onClick={handleClickDepartDate}
                >
                  <div className="text-c4 ml-4">
                    <IconCalendar />
                  </div>
                  <FormField>
                    <FieldSearchBox
                      pointer
                      control={control}
                      name="depart-date"
                      id="depart-date"
                      readOnly
                    >
                      Depart date
                    </FieldSearchBox>
                  </FormField>
                </div>
                <div
                  className="flex py-1 items-center bg-white cursor-pointer gap-2 rounded-tr-[4px] rounded-br-[4px]"
                  onClick={handleClickReturnDate}
                >
                  <div className="text-c4 ml-4">
                    <IconCalendar />
                  </div>
                  <div className="flex flex-col">
                    <FormField>
                      <FieldSearchBox
                        pointer
                        control={control}
                        name="return-date"
                        id="return-date"
                        readOnly
                      >
                        Return date
                      </FieldSearchBox>
                    </FormField>
                  </div>
                </div>
              </div>
            </Tippy>
          </div>
        </div>
        <div className="flex gap-4">
          <Tippy
            trigger="click"
            interactive
            placement="bottom-start"
            render={(attrs) => (
              <div
                className="w-[243px] bg-[#EBEBEB] relative before:content-['_'] before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[10px] before:border-b-[#EBEBEB] before:absolute before:top-[1px] before:left-2/4 before:-translate-x-2/4 before:-translate-y-full p-[10px] text-c3 rounded-[4px]"
                {...attrs}
              >
                <div className="room flex justify-between p-[10px] bg-white">
                  <div className="flex gap-3 items-center">
                    <Number
                      control={control}
                      name="room"
                      initialValue={numberRoom}
                    >
                      {numberRoom}
                    </Number>
                    <p className="text-c4">Room</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wrapper onClick={handleMinusRoom}>
                      <IconMinus />
                    </Wrapper>
                    <Wrapper onClick={handlePlusRoom}>
                      <IconPlus />
                    </Wrapper>
                  </div>
                </div>
                <div className="adults mt-[1px] flex justify-between p-[10px] bg-white">
                  <div className="flex gap-3 items-center">
                    <Number
                      control={control}
                      initialValue={numberAdults}
                      name="adults"
                    >
                      {numberAdults}
                    </Number>
                    <p className="text-c4">Adults</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wrapper onClick={handleMinusAdults}>
                      <IconMinus />
                    </Wrapper>
                    <Wrapper onClick={handlePlusAdults}>
                      <IconPlus />
                    </Wrapper>
                  </div>
                </div>
                <div className="children mt-[1px] flex justify-between p-[10px] bg-white">
                  <div className="flex gap-3 items-center">
                    <Number
                      control={control}
                      name="childrens"
                      initialValue={numberChildrens}
                    >
                      {numberChildrens}
                    </Number>
                    <p className="text-c4">Childrens</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wrapper onClick={handleMinusChildrens}>
                      <IconMinus />
                    </Wrapper>
                    <Wrapper onClick={handlePlusChildrens}>
                      <IconPlus />
                    </Wrapper>
                  </div>
                </div>
              </div>
            )}
          >
            <div className="flex gap-4 items-center bg-white rounded-[4px] flex-1">
              <span className="text-c4 ml-4">
                <IconPeopleGroup />
              </span>
              <div className="flex flex-col flex-1">
                <div className="inline">
                  <span className="text-c3">{numberAdults} Adults, </span>
                  <span className="text-c3">{numberChildrens} Childrens</span>
                </div>
                <p className="text-c3">{numberRoom} Room</p>
              </div>
            </div>
          </Tippy>
          <button
            type="submit"
            className="px-5 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-[4px]"
          >
            Search
          </button>
        </div>
      </div>
    </CustomCalendarContext.Provider>
  );
};
SearchBoxHotel.propTypes = {};
export default withErrorBoundary(SearchBoxHotel, {
  FallbackComponent: ErrorBoundary,
});