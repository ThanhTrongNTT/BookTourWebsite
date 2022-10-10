import Tippy from "@tippyjs/react/headless";
import { createContext, useState } from "react";
import { withErrorBoundary } from "react-error-boundary";

import useClickOutSide from "~/hooks/useClickOutSide";
import { RenderFormDate, RenderPlaceHot } from "~/modules/tippy";

import Amount from "@/amount/Amount";
import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import {
  ErrorBoundary,
  FormField,
  WrapperAmount,
  WrapperFull,
  WrapperGrid,
} from "@/common";
import { FieldSearchBox } from "@/field";
import { IconCalendar, IconPeopleGroup } from "@/icon";

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
      <WrapperGrid rows="1" spacing="4" className="lg:rows-2">
        <RenderPlaceHot control={control} setValue={setValue} />
        <WrapperGrid cols="1" spacing="4" className="lg:grid-cols-2">
          <div>
            <Tippy
              ref={nodeRef}
              visible={show}
              interactive
              placement="bottom-start"
              render={(attrs) => (
                <RenderFormDate
                  refs={calendarRef}
                  name1="depart-date"
                  name2="return-date"
                  control={control}
                  setValue={setValue}
                  {...attrs}
                />
              )}
            >
              <div className="grid select-none grid-cols-2 lg:grid-cols-2">
                <div
                  className="relative flex cursor-pointer items-center gap-2 rounded-tl-[4px] rounded-bl-[4px] border-r border-r-c6 bg-white py-1 after:absolute after:right-0 after:h-5 after:w-5 after:translate-x-2/4 after:bg-icon-moon after:bg-no-repeat after:content-['_']"
                  onClick={handleClickDepartDate}
                >
                  <div className="ml-4 text-c4">
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
                  className="flex cursor-pointer items-center gap-2 rounded-tr-[4px] rounded-br-[4px] bg-white py-1"
                  onClick={handleClickReturnDate}
                >
                  <div className="ml-4 text-c4">
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
          <div className="grid grid-cols-1 grid-rows-2 gap-4 lg:flex">
            <WrapperFull>
              <Tippy
                trigger="click"
                interactive
                placement="bottom-start"
                render={(attrs) => (
                  <div
                    className="relative w-[243px] select-none rounded-[4px] bg-[#EBEBEB] p-[10px] font-DMSans text-c3 before:absolute before:top-[1px] before:left-2/4 before:-translate-x-2/4 before:-translate-y-full before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[#EBEBEB] before:content-['_']"
                    {...attrs}
                  >
                    <WrapperAmount>
                      <Amount
                        control={control}
                        name="room"
                        initialValue={numberRoom}
                        onClickPlus={handlePlusRoom}
                        onClickMinus={handleMinusRoom}
                      >
                        Room
                      </Amount>
                    </WrapperAmount>
                    <WrapperAmount className="mt-[1px]">
                      <Amount
                        control={control}
                        name="adults"
                        initialValue={numberAdults}
                        onClickPlus={handlePlusAdults}
                        onClickMinus={handleMinusAdults}
                      >
                        Adults
                      </Amount>
                    </WrapperAmount>
                    <WrapperAmount className="mt-[1px]">
                      <Amount
                        control={control}
                        name="childrens"
                        initialValue={numberChildrens}
                        onClickPlus={handlePlusChildrens}
                        onClickMinus={handleMinusChildrens}
                      >
                        Childrens
                      </Amount>
                    </WrapperAmount>
                  </div>
                )}
              >
                <div className="flex h-full w-full flex-1 cursor-pointer select-none items-center gap-4 rounded-[4px] bg-white py-1 font-DMSans lg:py-0">
                  <span className="ml-4 text-c4">
                    <IconPeopleGroup />
                  </span>
                  <div className="flex flex-1 flex-col">
                    <div className="inline">
                      <span className="text-c3">{numberAdults} Adults, </span>
                      <span className="text-c3">
                        {numberChildrens} Childrens
                      </span>
                    </div>
                    <p className="text-c3">{numberRoom} Room</p>
                  </div>
                </div>
              </Tippy>
            </WrapperFull>
            <ButtonSubmitDefault radius="2" background="blue" className="px-5">
              Search
            </ButtonSubmitDefault>
          </div>
        </WrapperGrid>
      </WrapperGrid>
    </CustomCalendarContext.Provider>
  );
};
SearchBoxHotel.propTypes = {};
export default withErrorBoundary(SearchBoxHotel, {
  FallbackComponent: ErrorBoundary,
});
