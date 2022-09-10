import { withErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { setSrc } from "~/sagas/imgbanner/ImgSlice";

import Button from "@/button/Button";
import ErrorComponent from "@/common/ErrorComponent";
import { IconArrowDown, IconCar, IconPeopleBed, IconPlan } from "@/icon";
import IconText from "@/icon/IconText";
import Input from "@/input/Input";
import Switch from "@/switch/Switch";

const SearchBox = () => {
  const dispath = useDispatch();
  const ITEM_LINKS = [
    {
      icon: <IconPeopleBed />,
      title: "Hotel",
      to: "/",
      onClick: () =>
        dispath(
          setSrc(
            "https://media-exp1.licdn.com/dms/image/C561BAQEpJ3lJ5lWx8Q/company-background_10000/0/1591270774324?e=2147483647&v=beta&t=5iE0jTpYc9vy7fT64S1cikA37OEzx9nBoeu1uEfNiIQ"
          )
        ),
    },
    {
      icon: <IconPlan />,
      title: "Flight",
      to: "/flight-booking",
      onClick: () =>
        dispath(
          setSrc(
            "https://images.unsplash.com/photo-1659536540437-510ce63eb672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          )
        ),
    },
    {
      icon: <IconCar />,
      title: "Car Rental",
      to: "/car-booking",
      onClick: () =>
        dispath(
          setSrc(
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          )
        ),
    },
  ];
  return (
    <div className="absolute left-2/4 bottom-0 mx-auto flex w-full max-w-[350px] -translate-x-2/4 translate-y-1/4 flex-col gap-7 rounded-[20px] bg-white p-5 dark:bg-grayScale-c2 md:max-w-3xl lg:max-w-[73rem] lg:translate-y-2/4 lg:py-[30px] lg:px-[60px]">
      <div className="select-trip lg:flex lg:w-[848px] lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-8 border-b-2 border-b-blue-500 pb-5 text-sm lg:justify-start lg:border-none lg:pb-0">
          {ITEM_LINKS.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-grayScale-c3 dark:text-grayScale-c8"
                  : "text-grayScale-c4"
              }
            >
              <IconText icon={item.icon} left bold onClick={item.onClick}>
                {item.title}
              </IconText>
            </NavLink>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-[25px] lg:mt-0">
          <IconText
            icon={<IconArrowDown />}
            classText="dark:text-white"
            classIcon="dark:text-grayScale-c5"
            right
            medium
            primary
          >
            Round trip
          </IconText>
          <IconText
            icon={<IconArrowDown />}
            right
            medium
            primary
            classText="dark:text-white"
            classIcon="dark:text-grayScale-c5"
          >
            1 Passenger
          </IconText>
        </div>
      </div>
      <div className="stroke-underline hidden h-[2px] w-[848px] bg-grayScale-c6 lg:block">
        <div className="h-full w-[70px] bg-primary-blue" />
      </div>
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-[50px]">
        <div className="location flex  flex-1 flex-col gap-3 lg:flex-row">
          <div className="select-location w-full lg:relative lg:max-w-[332px]">
            <Input
              type="input"
              primary
              placeholder="Where are you from?"
              className="w-full"
              id="location"
              pNone="px-5 py-2"
            >
              Location
            </Input>
            <Switch />
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="select-checkin max-w-[150px] lg:relative lg:w-full lg:max-w-[250px]">
              <Input
                id="checkin"
                type="input"
                primary
                placeholder="Add Date?"
                className="w-full"
                pNone="px-5 py-2"
              >
                Check in
              </Input>
              <Switch />
            </div>
            <div className="select-checkin max-w-[150px] lg:relative lg:w-full lg:max-w-[250px]">
              <Input
                id="checkout"
                type="input"
                primary
                placeholder="Add Date?"
                className="w-full"
                pNone="px-5 py-2"
              >
                Check out
              </Input>
            </div>
          </div>
          <div className="passenger w-full lg:relative lg:hidden">
            <Input
              type="input"
              primary
              placeholder="Where are you from?"
              className="w-full"
              id="passenger"
              pNone="px-5 py-2"
            >
              Passenger
            </Input>
            <Switch />
          </div>
        </div>
        <Button
          className="px-[42px] py-[21px] text-xl font-bold text-white"
          type="button"
          primary
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default withErrorBoundary(SearchBox, {
  FallbackComponent: ErrorComponent,
});
