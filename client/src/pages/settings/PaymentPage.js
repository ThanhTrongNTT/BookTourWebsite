import React from "react";
import Button from "~/components/button/Button";
import { IconAddLarge, IconArrowDown } from "~/components/icon/setting";
import IconText from "~/components/icon/IconText";

const PaymentPage = () => {
  return (
    <div className="mt-12 px-8 font-DMSans lg:px-0">
      <div className="w-full lg:max-w-[65%]">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium text-grayScale-c1">
            Credit card
          </h1>
          <Button
            type="submit"
            primary
            className="!rounded-full py-4 px-[14px] text-sm font-bold text-white"
          >
            <IconText right gap="gap-3" icon={<IconArrowDown />}>
              Add payment method
            </IconText>
          </Button>
        </div>
        <div className="mt-7">
          <div className="relative select-none">
            <img src="/credit-card.png" alt="" />
            <div className="absolute bottom-5 left-6">
              <p>8948 xxxx xxxx 7894</p>
              <p className="mt-[10px]">Holder Name</p>
            </div>
          </div>
          <div className="relative mt-8">
            <img src="/add-card.png" alt="" />
            <div className="absolute top-2/4 left-9 flex -translate-y-2/4 items-center gap-5">
              <div className="rounded-xl bg-grayScale-c3 p-5">
                <IconAddLarge />
              </div>
              <p className="text-lg font-medium text-grayScale-c1">
                Add new method
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
