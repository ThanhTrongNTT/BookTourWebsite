import { addDays, format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useWatch } from "react-hook-form";

import { CustomCalendarContext } from "~/modules/search/SearchBoxHotel";

const TippyRenderFormDate = ({
  onChange,
  ranges,
  name1,
  name2,
  control,
  setValue,
  refs,
  ...props
}) => {
  const dateValue = useWatch({
    control,
    name1,
    name2,
    defaultValue: "",
  });
  const context = useContext(CustomCalendarContext);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setValue(name1, format(range[0].startDate, "dd/MM/yyyy"));
  }, [name1, range, setValue]);

  useEffect(() => {
    setValue(name2, format(range[0].endDate, "dd/MM/yyyy"));
  }, [name2, range, setValue]);
  return (
    <div
      ref={refs}
      className={`relative before:absolute before:content-['_'] before:border-l-[10px] before:border-l-transparent before:border-r-transparent before:border-r-[10px] before:border-b-[10px] before:border-b-white before:left-12 before:-translate-y-full before:top-[1px] transition-all before:transition-all ${
        context.placement ? "before:translate-x-[200px]" : ""
      }`}
    >
      <DateRangePicker
        minDate={new Date()}
        onChange={(item) => setRange([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={true}
        retainEndDateOnFirstSelection={true}
        focusedRange={context.focusRange}
        months={2}
        showMonthArrow
        ranges={range}
        direction="horizontal"
        {...props}
      />
    </div>
  );
};

export default TippyRenderFormDate;
