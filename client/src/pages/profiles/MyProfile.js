import CardInfo from "~/modules/card/CardInfo";

import Button from "@/button/Button";
import Field from "@/filed/Field";
import Heading from "@/heading/Heading";
import {
  IconAdd,
  IconArrowRight,
  IconCake,
  IconCheck,
  IconEmail,
  IconGender,
  IconHome,
  IconPenUnderline,
} from "@/icon";
import IconText from "@/icon/IconText";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const MyProfile = () => {
  return (
    <Fragment>
      <nav className="breadcrum my-10 hidden items-center gap-2 font-DMSans text-base font-normal lg:flex">
        <Link to="/">
          <p className="inline-block text-grayScale-c3">Home</p>
        </Link>
        <IconArrowRight />
        <p className="inline-block text-grayScale-c5">Profile</p>
      </nav>
      <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[33px]">
        <CardInfo />
        <div className="flex-1 justify-start px-5 lg:px-0">
          <Heading className="mt-5 hidden border-b border-b-grayScale-c6 pb-8 dark:border-b-grayScale-c6 lg:block">
            My Profile
          </Heading>
          <div className="my-12 rounded-xl bg-white py-6 px-5 text-2xl font-medium text-grayScale-c1 dark:bg-grayScale-c2 lg:px-10 lg:pb-8 lg:pt-4">
            <div className="mb-3">
              <p className="mr-6 inline-block font-DMSans dark:text-grayScale-c6">
                Complete your Profile
              </p>
              <div className="mr-6 inline-block h-3 w-[231px] rounded-xl  bg-[rgba(59,_113,_254,_0.1)] lg:w-[327px]">
                <div className="h-full w-[163px] rounded-xl bg-blue-500 lg:w-[227px]"></div>
              </div>
              <span className="font-Roboto dark:text-grayScale-c6">70%</span>
            </div>
            <p className="mb-6 font-Poppins text-sm font-normal text-grayScale-c3 dark:text-grayScale-c4 lg:text-base">
              Get the best out of TripGuide by adding the remaining details!
            </p>
            <div className="inline-block text-center lg:flex lg:flex-row lg:gap-7">
              <div className="inline-block rounded-full bg-grayScale-c6 px-3 py-[2px] text-sm dark:bg-[rgba(53,_57,_69,_0.6)] lg:mt-0">
                <IconText
                  secondary
                  gap="lg:gap-2 gap-1"
                  left
                  classText="lg:text-sm text-xs font-normal text-grayScale-c3 leading-normal dark:text-grayScale-c5"
                  classIcon="bg-[#145CE6] text-sm rounded-full text-white p-[2px]"
                  icon={
                    <IconCheck
                      width="lg:w-3 w-2"
                      height="lg:h-3 h-2"
                      checked={true}
                    />
                  }
                >
                  Verified Email ID
                </IconText>
              </div>
              <div className="ml-2 inline-block rounded-full bg-grayScale-c6 px-3 py-[2px] text-sm dark:bg-[rgba(53,_57,_69,_0.6)]">
                <IconText
                  secondary
                  gap="lg:gap-2 gap-1"
                  left
                  classText="lg:text-sm text-xs font-normal text-grayScale-c3 leading-normal dark:text-grayScale-c5"
                  classIcon="bg-[#145CE6] text-sm rounded-full text-white p-[2px]"
                  icon={
                    <IconCheck
                      width="lg:w-3 w-2"
                      height="lg:h-3 h-2"
                      checked={true}
                    />
                  }
                >
                  Verified mobile Number
                </IconText>
              </div>
              <div className="mt-3 inline-block rounded-full bg-grayScale-c6 px-3 py-[2px] text-sm dark:bg-[rgba(53,_57,_69,_0.6)] lg:mt-0">
                <IconText
                  secondary
                  gap="gap-2"
                  left
                  classText="lg:text-sm text-xs font-normal text-grayScale-c3 leading-normal dark:text-grayScale-c5"
                  classIcon="bg-[#145CE6] text-sm rounded-full text-white p-[2px]"
                  icon={
                    <IconCheck
                      width="lg:w-3 w-2"
                      height="lg:h-3 h-2"
                      checked={true}
                    />
                  }
                >
                  Complete Basic Info
                </IconText>
              </div>
            </div>
          </div>
          <div className="font-DMSans">
            <div className="mb-12 flex justify-between">
              <p className="text-xl font-medium text-grayScale-c2 dark:text-white lg:text-2xl">
                Hi, I'm Jonathan Due
              </p>
              <Button
                type="button"
                varient="outlined"
                className="hidden !rounded-full px-4 py-2 text-sm dark:text-grayScale-c5 lg:block"
              >
                Edit your profile
              </Button>
              <Button
                type="button"
                varient="outlined"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium dark:text-grayScale-c5 lg:hidden"
              >
                <IconPenUnderline />
                Edit
              </Button>
            </div>
            <form>
              <div className="mb-[18px] flex flex-col justify-between gap-[18px] lg:mb-8 lg:flex-row lg:gap-9">
                <div className="flex-1">
                  <Field
                    type="string"
                    placeholder="Enter your live"
                    id="live"
                    label="Live in"
                    left
                    icon={<IconHome />}
                  />
                </div>
                <div className="flex-1">
                  <Field
                    type="string"
                    placeholder="Enter your address"
                    id="address"
                    label="Street address"
                    left
                    icon={<IconHome />}
                  />
                </div>
              </div>
              <Field
                className="mb-[18px] lg:mb-10"
                type="email"
                placeholder="tomson@company.com"
                id="email"
                label="Email"
                left
                icon={<IconEmail />}
              />
              <div className="mb-[18px] flex flex-col justify-between gap-[16px] lg:mb-8 lg:flex-row lg:gap-9">
                <div className="flex-1">
                  <Field
                    type="string"
                    placeholder="07.12.1997"
                    id="birth"
                    label="Day Of Birth"
                    left
                    icon={<IconCake />}
                  />
                </div>
                <div className="flex-1">
                  <Field
                    type="string"
                    placeholder="Enter your address"
                    id="gender"
                    label="Gender"
                    left
                    icon={<IconGender />}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyProfile;
