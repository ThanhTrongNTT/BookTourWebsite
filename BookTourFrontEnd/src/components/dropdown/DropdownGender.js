import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import useClickOutSideDropdown from "~/hooks/useClickOutSideDropdown";
import classNames from "~/utils/classNames";
import { IconGender } from "../icon/IconProfilePage";

const GENDER = [{ type: "MALE" }, { type: "FEMALE" }, { type: "OTHER" }];

const DropdownGender = ({
  control,
  setValue,
  name,
  disable,
  dropdownLabel = "Select your gender",
}) => {
  const { show, setShow, nodeRef } = useClickOutSideDropdown();
  const dropdownValue = useWatch({
    control,
    name,
    defaultValue: "", // default value before the render
  });
  console.log("dropdownValue", dropdownValue);
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(dropdownLabel);

  return (
    <div className="relative" ref={nodeRef}>
      <div
        className={classNames(
          "border-gray100 flex cursor-pointer items-center gap-4 rounded-lg border bg-transparent p-3 text-c4",
          disable && "pointer-events-none select-none bg-gray-100"
        )}
        onClick={() => setShow(!show)}
      >
        <span>
          <IconGender />
        </span>
        <span className="text-c3">{label}</span>
      </div>
      <div
        className={classNames(
          "absolute top-full left-0 w-full rounded-lg bg-white shadow-md",
          show ? "" : "invisible opacity-0"
        )}
        // className={`absolute top-full left-0 w-full rounded-lg bg-white ${
        //   show ? "" : "invisible opacity-0"
        // }`}
      >
        {GENDER.map((gender, index) => (
          <div
            className="cursor-pointer p-5 hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={gender.type}
            key={index}
          >
            {gender.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownGender;
