import { IconCheck, IconPenUnderline } from "@/icon";
import IconText from "@/icon/IconText";
import { useSelector } from "react-redux";
import ButtonChangeAvt from "~/components/button/ButtonChangeAvt";

const CardInfo = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="dark:bg-grayScale-c2 mx-auto mt-5 h-full max-h-[560px] w-full max-w-[350px] rounded-xl bg-white px-7 py-8 lg:mx-0">
      <div className="text-center font-DMSans">
        <ButtonChangeAvt />
        <p className="dark:text-grayScale-c6 mb-5 font-Roboto text-4xl">
          <b className="">{user.fullName}</b>
        </p>
        <div className="dark:bg-grayScale-c3 dark:text-grayScale-c5 mb-6 inline-block rounded-full bg-[#F4F5F6] py-2 px-7">
          <IconText
            secondary
            gap="gap-3"
            left
            icon={<IconCheck checked={true} />}
          >
            Indentity verified
          </IconText>
        </div>
        <div className="dark:bg-grayScale-c3 mb-7 h-[2px] w-full bg-[#F5F6F7]"></div>
        <div className="mb-4 flex justify-between font-Roboto text-sm font-medium">
          <span className="text-grayScale-c3 dark:text-grayScale-c7">Form</span>
          <span className=" text-grayScale-c4">United State</span>
        </div>
        <div className="mb-10 flex justify-between font-Roboto text-sm font-medium">
          <span className="text-grayScale-c3 dark:text-grayScale-c7">
            Member Since
          </span>
          <span className=" text-grayScale-c4">05.06.1996</span>
        </div>
        <div
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-purple-400 py-2 text-center font-Roboto text-white"
          onClick={() => {}}
        >
          <span className="text-sm font-medium">Edit My Data</span>
          {/* <IconPenUnderline /> */}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
