import React, { useState } from "react";
import Logo from "@/logo/Logo";
import Notification from "@/notification/Notification";
import Search from "@/search/Search";
import { IconArrowDownSolid, IconUser } from "@/icon/IconHomePage";
import { NavLink, useNavigate } from "react-router-dom";
import classNames from "~/utils/classNames";
import Avt from "@/avt/Avt";
import NavHeader from "~/components/nav/NavHeader";
import Tippy from "@tippyjs/react";
import Wrapper from "~/components/popper/Wrapper";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  return (
    <header className="header lg:max-w-7xl lg:mx-auto bg-white px-5 py-[30px] dark:bg-c2 lg:px-10 lg:py-5">
      <div className="flex items-cente 2xl:container 2xl:mx-auto gap-10">
        <Logo />
        <div className="flex flex-1 justify-between items-center">
          <NavHeader />
          <div className={classNames("flex items-center", !!user && "gap-4")}>
            <Search />
            {!!user ? (
              <div className="header-right flex h-8 items-center font-Roboto justify-between">
                <Notification />
                <div className="mr-5 h-full w-[1px] bg-c5 dark:bg-c3" />
                <div className="flex items-center gap-3">
                  <Avt
                    sx="default"
                    src="https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  />
                  <div className="flex items-center gap-4">
                    <p className="font-semibold text-sm inline-block">
                      VinhQuoc
                    </p>
                    <span className="text-c3">
                      <IconArrowDownSolid />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <span
                className="text-c3 px-4 cursor-pointer"
                onClick={() => navigate("/sign-in")}
              >
                <IconUser />
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
