import React from "react";
import { Link } from "react-router-dom";
import { Wrapper as PopperMenu } from "@/popper";
import { withErrorBoundary } from "react-error-boundary";
import {
  IconBooking,
  IconMyProfile,
  IconReward,
  IconSigout,
  IconUser,
  IconWallet,
} from "@/icon";
import IconText from "@/icon/IconText";
import { ErrorComponent } from "@/common";
const MENU_ITEMS = [
  {
    icon: <IconMyProfile />,
    children: "My Profile",
    url: "/setting/profile",
  },
  {
    icon: <IconUser />,
    children: "Manage account",
    url: "/setting/account",
  },
  {
    icon: <IconBooking />,
    children: "Bookings",
    url: "/bookings",
  },
  {
    icon: <IconWallet />,
    children: "My wallet",
    url: "/my-wallet",
  },
  {
    icon: <IconReward />,
    children: "My Rewards",
    url: "/my-rewards",
  },
  {
    icon: <IconSigout />,
    children: "Sign out",
    url: "/",
  },
];
const Menu = () => {
  return (
    <PopperMenu>
      {MENU_ITEMS.map((item, index) => (
        <Link key={index} to={item.url}>
          <IconText
            classIcon="text-[#777E90] dark:text-grayScale-c5"
            classText="text-[#23262F] dark:text-grayScale-c7"
            padding
            left
            icon={item.icon}
            gap="gap-5"
            font="font-Roboto"
            hover
          >
            {item.children}
          </IconText>
        </Link>
      ))}
      <Link to="/login">Login</Link>
    </PopperMenu>
  );
};

export default withErrorBoundary(Menu, {
  FallbackComponent: ErrorComponent,
});
