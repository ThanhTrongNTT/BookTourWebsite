import React from "react";
import Tippy from "@tippyjs/react/headless";
import { withErrorBoundary } from "react-error-boundary";
import "tippy.js/dist/tippy.css";

import { Menu } from "~/modules";

import { IconArrowDown } from "@/icon";
import ErrorComponent from "@/common/ErrorComponent";
import Logo from "@/logo/Logo";
import Image from "@/img/Image";
import Notification from "@/notification/Notification";

const Header = () => {
  return (
    <header className="header bg-white px-5 py-[30px] dark:bg-grayScale-c2 lg:px-10 lg:py-5">
      <div className="container-header flex items-center justify-between  2xl:container 2xl:mx-auto">
        <Logo />
        <div className="header-right flex h-8 items-center font-Roboto">
          <Notification />
          <div className="mr-5 h-full w-[1px] bg-line dark:bg-grayScale-c3" />
          <div className="info flex cursor-pointer select-none items-center gap-[10px]">
            <Image
              sx="w-8 h-8"
              rounded="rounded-full"
              src="https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <p className="name">
              <b className="hidden font-medium dark:text-grayScale-c8 lg:block">
                Delowar
              </b>
            </p>
          </div>
          <Tippy
            interactive
            delay={[0, 200]}
            offset={[0, 20]}
            render={(attrs) => (
              <div className="w-[238px] rounded-2xl" tabIndex="-1" {...attrs}>
                <Menu />
              </div>
            )}
          >
            <div className="hidden flex-1 cursor-pointer py-1 pl-[17px] dark:text-grayScale-c6 lg:block">
              <IconArrowDown />
            </div>
          </Tippy>
        </div>
      </div>
    </header>
  );
};

export default withErrorBoundary(Header, {
  FallbackComponent: ErrorComponent,
});
