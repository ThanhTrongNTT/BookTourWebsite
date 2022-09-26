import { NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  {
    to: "/",
    navName: "Hotel",
  },
  {
    to: "/flight",
    navName: "Flight&Hotel",
  },
  {
    to: "/car",
    navName: "Car&Hotel",
  },
];
const NavHeader = () => {
  return (
    <div className="flex gap-10 font-medium text-xl font-DMSans">
      {NAV_ITEMS.map((item, index) => (
        <NavLink
          tabIndex={"-1"}
          key={index}
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? "py-2 border-b-2 border-blue-400"
              : "py-2 border-b-2 border-transparent"
          }
        >
          {item.navName}
        </NavLink>
      ))}
    </div>
  );
};

export default NavHeader;
