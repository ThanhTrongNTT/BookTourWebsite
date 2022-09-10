import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { setNameCrum } from "~/sagas/breadcrum/BreadcrumSlice";

import {
  IconArrowRight,
  IconCompineShape,
  IconFriendRequest,
  IconNotification,
  IconPrference,
  IconPrivate,
  IconUnion,
} from "@/icon/setting";
import ItemSetting from "@/item/ItemSetting";

const SETTING_ITEMS = [
  {
    icon: <IconFriendRequest />,
    name: "Personal Details",
    describe: "Manage Personal details",
    color: "primary",
    path: "personal-details",
    cName: "Personal Info",
  },
  {
    icon: <IconPrivate />,
    name: "Security",
    describe: "Manage Personal details",
    color: "secondary",
    path: "security",
    cName: "Login and security",
  },
  {
    icon: <IconNotification />,
    name: "Notifications",
    describe: "Manage Personal details",
    color: "teriary",
    path: "notifications",
    cName: "Notification setting",
  },
  {
    icon: <IconUnion />,
    name: "Payment payout",
    describe: "Manage Personal details",
    color: "primary",
    path: "payment",
    cName: "Payment payout",
  },
  {
    icon: <IconCompineShape />,
    name: "Privacy & sharing",
    describe: "Manage Personal details",
    color: "secondary",
    path: "private",
    cName: "Privacy & sharing",
  },
  {
    icon: <IconPrference />,
    name: "Preference",
    describe: "Manage Personal details",
    color: "teriary",
    path: "preference",
    cName: "Preferences",
  },
];

const AccountSetting = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  return (
    <Fragment>
      <nav className="breadcrum hidden items-center gap-2 pt-10 font-DMSans text-base font-normal lg:flex">
        <Link to="/">
          <p className="inline-block text-grayScale-c3 dark:text-grayScale-c6">
            Home
          </p>
        </Link>
        <span className="text-grayScale-c3 dark:text-grayScale-c6">
          <IconArrowRight />
        </span>
        <p className="inline-block text-grayScale-c5 dark:text-grayScale-c4">
          Profile
        </p>
      </nav>
      <div className="mx-5 px-11 pt-8 lg:mx-10 lg:mt-2 lg:px-9">
        <div className="text-center font-DMSans lg:text-left">
          <h1 className="mb-3 text-3xl font-bold text-grayScale-c1 dark:text-grayScale-c7 lg:text-5xl">
            Account Settings
          </h1>
          <p className="text-xs font-normal text-grayScale-c3 dark:text-grayScale-c5 lg:text-base">
            Manage your TripGuide.com experience
          </p>
        </div>
        <div className="items-setting mt-5 text-center lg:mt-9">
          {SETTING_ITEMS.map((item, index) => (
            <ItemSetting
              onClick={() => {
                dispath(setNameCrum(item.cName));
                navigate(item.path);
              }}
              color={item.color}
              icon={item.icon}
              key={index}
              name={item.name}
              describe={item.describe}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default AccountSetting;
