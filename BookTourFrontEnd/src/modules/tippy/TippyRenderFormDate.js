import { addDays, format } from "date-fns";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import { useWatch } from "react-hook-form";
import $ from "jquery";

const TippyRenderFormDate = ({
  onChange,
  ranges,
  name1,
  name2,
  control,
  setValue,
  ...props
}) => {
  const dateValue = useWatch({
    control,
    name1,
    name2,
    defaultValue: "",
  });
  useEffect(() => {
    const demo = $(".rdrInputRangeInput");
    console.log(demo[1]);
  }, []);
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
    <Fragment>
      <DateRangePicker
        minDate={new Date()}
        onChange={(item) => setRange([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        showMonthArrow
        ranges={range}
        direction="horizontal"
        {...props}
      />
    </Fragment>
  );
};

export default TippyRenderFormDate;
