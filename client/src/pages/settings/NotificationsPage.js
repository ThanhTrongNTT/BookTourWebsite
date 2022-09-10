import React from "react";
import ToggleSwitch from "~/components/switch/ToggleSwitch";

const NotificationsPage = () => {
  return (
    <div className="mt-12 px-8 font-DMSans lg:px-0">
      <div className="w-full lg:max-w-[65%]">
        <div className="messages">
          <h1 className="text-2xl font-medium text-[#23262F]">Messages</h1>
          <div className="flex items-center justify-between border-b border-b-grayScale-c6 pb-7 mt-12">
            <div className="">
              <h2 className="text-base font-medium text-[#23262F]">Email</h2>
              <p className="mt-1 text-xs text-grayScale-c4">
                Recevice notifications via email
              </p>
            </div>
            <ToggleSwitch />
          </div>
          <div className="flex items-center justify-between border-b border-b-grayScale-c6 pb-7 mt-6">
            <div className="">
              <h2 className="text-base font-medium text-[#23262F]">
                Text messages
              </h2>
              <p className="mt-1 text-xs text-grayScale-c4">
                Recevice notifications via mobile phone
              </p>
            </div>
            <ToggleSwitch />
          </div>
          <div className="flex items-center justify-between border-b border-b-grayScale-c6 pb-7 mt-6">
            <div className="">
              <h2 className="text-base font-medium text-[#23262F]">
                Browser notifications
              </h2>
              <p className="mt-1 text-xs text-grayScale-c4">
                Recevice notifications of your browser
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
