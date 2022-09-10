import { IconCheck, IconPenUnderline } from "@/icon";
import IconText from "@/icon/IconText";
import ChangeAvt from "~/components/avt/ChangeAvt";

const CardInfo = () => {
  return (
    <div className="max-h-[560px] mx-auto mt-5 h-full w-full max-w-[350px] rounded-xl bg-white px-7 py-8 dark:bg-grayScale-c2 lg:mx-0">
      <div className="text-center font-DMSans">
        <ChangeAvt />
        <p className="mb-5 text-4xl font-bold dark:text-grayScale-c6">
          <b className="">Jonathan Due</b>
        </p>
        <div className="mb-6 inline-block rounded-full bg-[#F4F5F6] py-2 px-7 dark:bg-grayScale-c3 dark:text-grayScale-c5">
          <IconText
            secondary
            gap="gap-3"
            left
            icon={<IconCheck checked={true} />}
          >
            Indentity verified
          </IconText>
        </div>
        <div className="mb-7 h-[2px] w-full bg-[#F5F6F7] dark:bg-grayScale-c3"></div>
        <div className="mb-4 flex justify-between font-Roboto text-sm font-medium">
          <span className="text-grayScale-c3 dark:text-grayScale-c7">Form</span>
          <span className=" text-grayScale-c4">United State</span>
        </div>
        <div className="mb-10 flex justify-between font-Roboto text-sm font-medium">
          <span className="text-grayScale-c3 dark:text-grayScale-c7">Member Since</span>
          <span className=" text-grayScale-c4">05.06.1996</span>
        </div>
        <div
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-purple-400 py-2 text-center font-Roboto text-white"
          onClick={() => {}}
        >
          <span className="text-sm font-medium">Edit My Data</span>
          <IconPenUnderline />
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
