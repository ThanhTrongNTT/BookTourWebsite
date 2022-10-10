import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classNames from "~/utils/classNames";

import Avt from "@/avt/Avt";
import Logo from "@/logo/Logo";
import Notification from "@/notification/Notification";
import Search from "@/search/Search";
import { IconArrowDownSolid, IconUser } from "@/icon/IconHomePage";
import { WrapperFlex } from "~/components/common";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  return (
    <div className="bg-white">
      <header className="header bg-white px-5 py-[30px] dark:bg-c2 lg:mx-auto lg:max-w-7xl lg:px-10 lg:py-5">
        <WrapperFlex
          spacing="4"
          className="lg:gap-10 2xl:container 2xl:mx-auto"
          center
        >
          <Logo />
          <WrapperFlex justify="end" flex1>
            <div className={classNames("flex items-center", !!user && "gap-4")}>
              <Search />
              {!!user ? (
                <WrapperFlex className="header-right h-8 font-Roboto">
                  <Notification />
                  <div className="mr-5 h-full w-[1px] bg-c5 dark:bg-c3" />
                  <WrapperFlex spacing="3">
                    <Avt
                      sx="default"
                      src="https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    />
                    <WrapperFlex spacing="4">
                      <p className="inline-block text-sm font-semibold">
                        VinhQuoc
                      </p>
                      <span className="text-c3">
                        <IconArrowDownSolid />
                      </span>
                    </WrapperFlex>
                  </WrapperFlex>
                </WrapperFlex>
              ) : (
                <span
                  className="cursor-pointer px-4 text-c4"
                  onClick={() => navigate("/sign-in")}
                >
                  <IconUser />
                </span>
              )}
            </div>
          </WrapperFlex>
        </WrapperFlex>
      </header>
    </div>
  );
};

export default Header;
