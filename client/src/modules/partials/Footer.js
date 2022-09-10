import { withErrorBoundary } from "react-error-boundary";

import ErrorComponent from "@/common/ErrorComponent";
import Logo from "@/logo/Logo";
import DarkMode from "~/components/darkmode/DarkMode";
import { Support } from "~/modules";

const Footer = () => {
  return (
    <footer className="relative bg-gray bg-opacity-10 font-DMSans font-medium dark:bg-grayScale-c2">
      <Support />
      <div className="px-[30px] pb-7 pt-14 lg:px-[190px] lg:pt-[220px] lg:pb-[151px]">
        <div className="flex flex-col lg:flex-row">
          <div className="footer-item hidden flex-1 pr-[152px] lg:block">
            <Logo className="mb-5" />
            <p className="mb-7 max-w-[254px] font-normal leading-6 text-grayScale-c4 dark:text-grayScale-c6">
              This is the team that specializes in making sure in the find it a
              your interior looks cool
            </p>
            <DarkMode />
          </div>
          <div className="footer-item mr-[147px] w-full border-b border-grayScale-c6 pb-5 dark:border-grayScale-c3 lg:w-auto lg:border-none lg:pb-0">
            <h1 className="mb-[18px] text-lg text-grayScale-c2 dark:text-white lg:text-2xl">
              Services
            </h1>
            <ul className="flex flex-col gap-4 text-xs text-grayScale-c4 dark:text-grayScale-c6 lg:text-base">
              <li>Travel Booking</li>
              <li>Flight Booking</li>
              <li>Car Booking</li>
              <li>Fivestar Hotel</li>
              <li>Traveling</li>
            </ul>
          </div>
          <div className="footer-item mr-[147px] w-full border-b border-b-grayScale-c6 pb-5 dark:border-grayScale-c3 lg:w-auto lg:border-none lg:pb-0">
            <h1 className="mb-[18px] mt-4 text-lg text-grayScale-c2 dark:text-white lg:mt-0 lg:text-2xl">
              Support
            </h1>
            <ul className="flex flex-col gap-4 text-xs text-grayScale-c4 dark:text-grayScale-c6 lg:text-base">
              <li>Account</li>
              <li>Legal</li>
              <li>Contact</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-item pt-4 lg:pt-0">
            <h1 className="text-lh mb-[18px] text-grayScale-c2 dark:text-white lg:text-2xl">
              Business
            </h1>
            <ul className="flex flex-col gap-4 text-xs text-grayScale-c4 dark:text-grayScale-c6 lg:text-base">
              <li>Success</li>
              <li>About Locato</li>
              <li>Blog</li>
              <li>Information</li>
              <li>Travel Guide</li>
            </ul>
          </div>
          <div className="footer-item mr-[152px] block flex-1 lg:hidden">
            <Logo className="mb-6 mt-10" />
            <DarkMode />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default withErrorBoundary(Footer, {
  FallbackComponent: ErrorComponent,
});
