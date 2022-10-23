import React from "react";
import useClickOutSideDropdown from "~/hooks/useClickOutSideDropdown";

const DropdownList = () => {
  const { show, setShow, nodeRef } = useClickOutSideDropdown();
  return (
    <div
      className="relative w-full rounded-[4px] bg-white text-c3"
      ref={nodeRef}
    >
      <div className="w-full cursor-pointer p-5" onClick={() => setShow(!show)}>
        Hồ Chí Minh
      </div>
      {show && (
        <div className="absolute top-full left-0 mt-[2px] w-full rounded-[4px] border border-gray-200 bg-white">
          <div className="cursor-pointer p-5">Javascript</div>
          <div className="cursor-pointer p-5">ReactJS</div>
          <div className="cursor-pointer p-5">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default DropdownList;
