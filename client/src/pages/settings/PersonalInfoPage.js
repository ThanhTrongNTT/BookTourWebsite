import React from "react";
import Button from "~/components/button/Button";
import Field from "~/components/filed/Field";
import { IconArrowDown } from "~/components/icon";
import IconText from "~/components/icon/IconText";
import { IconCalendar, IconShape } from "~/components/icon/setting";

const PersonalInfoPage = () => {
  return (
    <div className="mt-16 px-8 font-DMSans lg:px-0">
      <div className="w-full lg:max-w-[65%]">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium text-grayScale-c2 dark:text-grayScale-c6">
            Account Info
          </h1>
          <Button
            varient="outlined"
            className="!rounded-full px-8 py-2"
            type="button"
          >
            <IconText
              left
              icon={<IconShape className="dark:text-[#92929D]" />}
              classText="text-sm font-medium text-grayScale-c3 dark:text-grayScale-c5"
            >
              Edit
            </IconText>
          </Button>
        </div>
        <form action="" className="mt-7">
          <div className="grid grid-cols-1 grid-rows-1 gap-6 lg:grid-cols-2 lg:grid-rows-2">
            <Field
              type="string"
              label="Display Name"
              placeholder="Junathan776"
              id="displayname"
            />
            <Field
              label="Real Name"
              placeholder="Kohaku Tora"
              id="realname"
              type="string"
            />
            <Field
              type="string"
              label="Gender"
              placeholder="Male"
              id="gender"
              right
              icon={<IconArrowDown />}
            />
            <Field
              type="string"
              label="Date of birth"
              placeholder="add date"
              id="dob"
              right
              icon={<IconCalendar />}
            />
            <Field
              type="string"
              label="Phone"
              placeholder="Phone number"
              id="phone"
            />
            <Field
              type="email"
              label="Email"
              placeholder="vinh@gmail.com"
              id="email"
            />
            <Field
              type="string"
              label="Address"
              placeholder="Phong My"
              id="address"
              right
              icon={<IconArrowDown />}
            />
            <Field
              type="string"
              label="Language"
              placeholder="English (United States)"
              id="language"
              right
              icon={<IconArrowDown />}
            />
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-medium text-grayScale-c2 dark:text-grayScale-c6">
              Social
            </h1>
            <div className="mt-6 grid grid-cols-1 grid-rows-1 gap-6 lg:grid-cols-2 lg:grid-rows-none">
              <Field
                type="string"
                label="Website"
                placeholder="Your site URL"
                id="website"
                right
                icon={<IconArrowDown />}
              />
              <Field
                type="string"
                label="Twitter"
                placeholder="twitter username"
                id="twitter"
              />
            </div>
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              primary
              className="!rounded-full py-4 px-6 font-bold text-white"
            >
              Update profile
            </Button>
            <Button type="submit" className="ml-16 font-bold text-grayScale-c5">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
