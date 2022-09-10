import React from "react";
import Button from "~/components/button/Button";
import { IconDevice, IconMobile } from "~/components/icon/setting";

const SecurityPage = () => {
  return (
    <div className="px-70 mt-16 font-DMSans lg:px-0">
      <div className="w-full lg:max-w-[65%]">
        <div className="login border-b border-b-grayScale-c6 dark:border-b-grayScale-c2 pb-12">
          <h1 className="text-2xl font-medium text-[#141416] dark:text-grayScale-c8">
            Login
          </h1>
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-medium text-[#141416] dark:text-grayScale-c8">
                  Password
                </h2>
                <p className="mt-2 text-xs font-normal text-grayScale-c5 dark:text-grayScale-c4">
                  Last updated 1 month ago
                </p>
              </div>
              <Button
                varient="outlined"
                className="!rounded-full px-4 py-[6px] text-sm font-bold dark:text-grayScale-c5"
              >
                Update password
              </Button>
            </div>
          </div>
        </div>
        <div className="socical-account mt-12 border-b border-b-grayScale-c6 dark:border-b-grayScale-c2 pb-12">
          <h1 className="text-2xl font-medium text-[#141416] dark:text-grayScale-c8">
            Social accounts
          </h1>
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-medium text-[#141416] dark:text-grayScale-c8">
                  Facebook
                </h2>
                <p className="mt-2 text-xs font-normal text-grayScale-c5 dark:text-grayScale-c4">
                  Not connected
                </p>
              </div>
              <Button
                varient="outlined"
                className="!rounded-full px-6 py-[6px] text-sm font-bold dark:text-grayScale-c5"
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
        <div className="device-history mt-1">
          <h1 className="text-2xl font-medium text-[#141416] dark:text-grayScale-c8">
            Device history
          </h1>
          <div className="mt-8 border-b border-b-grayScale-c6 dark:border-b-grayScale-c2 pb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-lg border border-grayScale-c6 py-4 px-3 text-grayScale-c5">
                  <IconDevice />
                </div>
                <div className="ml-5 text-xs text-grayScale-c4 dark:text-grayScale-c5">
                  <p>May 14, 2021 at 08:36pm</p>
                  <p className="mt-2 text-sm font-bold text-black dark:text-grayScale-c7">
                    Windows 10 Chrome
                  </p>
                </div>
              </div>
              <Button
                className="!rounded-full px-5 py-[6px] text-sm font-bold dark:text-grayScale-c5"
                varient="outlined"
              >
                Log out device
              </Button>
            </div>
          </div>
          <div className="mt-8 border-b border-b-grayScale-c6 dark:border-b-grayScale-c2 pb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-lg border border-grayScale-c6 py-4 px-3 text-grayScale-c5">
                  <IconDevice />
                </div>
                <div className="ml-5 text-xs text-grayScale-c4">
                  <p>May 14, 2021 at 08:36pm</p>
                  <p className="mt-2 text-sm font-bold text-black dark:text-grayScale-c7">
                    Windows 10 Mozilla Firefox
                  </p>
                </div>
              </div>
              <Button
                className="!rounded-full px-5 py-[6px] text-sm font-bold dark:text-grayScale-c5"
                varient="outlined"
              >
                Log out device
              </Button>
            </div>
          </div>
          <div className="mt-8 border-b border-b-grayScale-c6 dark:border-b-grayScale-c2 pb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-lg border border-grayScale-c6 py-4 px-4 text-grayScale-c5">
                  <IconMobile />
                </div>
                <div className="ml-5 text-xs text-grayScale-c4">
                  <p>May 14, 2021 at 08:36pm</p>
                  <p className="mt-2 text-sm font-bold text-black dark:text-grayScale-c7">
                    Android 10 Chrome
                  </p>
                </div>
              </div>
              <Button
                className="!rounded-full px-5 py-[6px] text-sm font-bold dark:text-grayScale-c5"
                varient="outlined"
              >
                Log out device
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
