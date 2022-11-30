import React from "react";
import { useController } from "react-hook-form";
import classNames from "~/utils/classNames";

const InputDefault = ({ name, control, className, bg, ...props }) => {
  const { filed } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div className="w-full">
      <input
        {...filed}
        {...props}
        className={classNames(
          "h-full w-full",
          className,
          bg ? bg : "bg-transparent"
        )}
      />
    </div>
  );
};

export default InputDefault;
