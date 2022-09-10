import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setNameCrum } from "~/sagas/breadcrum/BreadcrumSlice";
const URL = [
  {
    nName: "Perosnal info",
    param: "personal-details",
    cName: "Personal Information",
  },
  {
    nName: "Security",
    param: "security",
    cName: "Login and security",
  },
  {
    nName: "Notifications",
    param: "notifications",
    cName: "Notification setting",
  },
  {
    nName: "Payment payout",
    param: "payment",
    cName: "Payment payout",
  },
  {
    nName: "Privacty & sharing",
    param: "private",
    cName: "Privacy & sharing",
  },
  {
    nName: "Preference",
    param: "preference",
    cName: "Preferences",
  },
];
const NavigateSetting = () => {
  const { crumName } = useSelector((state) => state.breadcrum);
  const dispath = useDispatch();
  console.log(crumName);
  return (
    <nav className="mt-12 inline-block border-b border-b-grayScale-c6">
      <ul className="inline-block font-DMSans text-xl font-medium">
        {URL.map((item, index) => (
          <li
            className="mr-16 inline-block pb-6 last:mr-0"
            key={index}
            onClick={() => dispath(setNameCrum(item.cName))}
          >
            <NavLink
              to={`/setting/account/${item.param}`}
              className={({ isActive }) =>
                isActive
                  ? "border-b-[3px] border-b-primary-blue pb-6 font-bold text-[#243B53] transition-all dark:text-grayScale-c8"
                  : "pb-6 font-medium text-[#8897A7]"
              }
            >
              {item.nName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigateSetting;
