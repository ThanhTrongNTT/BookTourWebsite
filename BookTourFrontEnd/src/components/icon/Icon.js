import classNames from "~/utils/classNames";

export const IconShowPass = ({ onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M3 12C3 12 6.27273 5 12 5C17.7273 5 21 12 21 12C21 12 17.7273 19 12 19C6.27273 19 3 12 3 12Z"
        stroke="#A2A2A8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke="#A2A2A8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconHidePass = ({ onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M13.7345 13.855C13.5098 14.1129 13.2388 14.3198 12.9378 14.4632C12.6367 14.6067 12.3116 14.6839 11.9821 14.6901C11.6525 14.6963 11.3251 14.6315 11.0195 14.4994C10.7139 14.3674 10.4362 14.1709 10.2031 13.9216C9.97007 13.6724 9.78632 13.3755 9.66287 13.0486C9.53942 12.7217 9.47879 12.3716 9.48461 12.0192C9.49042 11.6667 9.56256 11.3191 9.69672 10.9971C9.83087 10.6751 10.0243 10.3853 10.2655 10.145M16.86 17.1975C15.4614 18.3376 13.7584 18.9693 12 19C6.27273 19 3 12 3 12C4.01773 9.97167 5.42929 8.19955 7.14 6.80252L16.86 17.1975ZM10.2818 5.21002C10.845 5.06904 11.4216 4.99857 12 5.00002C17.7273 5.00002 21 12 21 12C20.5033 12.9937 19.911 13.9292 19.2327 14.7913L10.2818 5.21002Z"
        stroke="#A2A2A8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 2.5L21 21"
        stroke="#A2A2A8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCheck = ({ checked, width, height, className }) => {
  return (
    <span
      className={classNames(checked ? "" : "invisible opacity-0", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(width ? width : "w-5", height ? height : "h-5")}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

export const IconNotification = () => {
  return (
    <svg
      width={17}
      height={20}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9981 15.0004H3.99802V8.50017C3.99802 6.00007 5.99803 4 8.49805 4C10.9981 4 12.9981 6.00007 12.9981 8.50017V15.0004ZM15 14.0005V8.50031C15 5.4302 12.86 2.86011 10 2.18008V1.50006C10 0.671598 9.32843 0 8.5 0C7.67157 0 7 0.671598 7 1.50006V2.18008C4.13 2.86011 2 5.4302 2 8.50031V14.0005L0 16.0006V17.0006H17V16.0006L15 14.0005ZM8.49994 20.0001C9.6045 20.0001 10.4999 19.1046 10.4999 18H6.49996C6.49996 19.1046 7.39538 20.0001 8.49994 20.0001Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconFireSale = () => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.242 1.605a14.73 14.73 0 0 1 2 2.375 14.006 14.006 0 0 1 2.425 7.867 6.665 6.665 0 0 1-6.666 6.667 6.665 6.665 0 0 1-6.667-6.667c0-2.117.567-4.1 1.558-5.8.134-.242.275-.467.425-.692.2-.308.659-.2.75.15.05.184.084.284.167.45.458 1.109 1.508 1.884 2.792 1.884 1.716 0 2.841-1.392 2.841-3.109 0-.925-.166-1.958-.325-2.741-.083-.4.409-.667.7-.384zM7.076 13.397c0 1.45 1.2 2.617 2.683 2.617 2.208 0 4-1.792 3.992-4 0-.892-.1-1.775-.292-2.625-.067-.309-.45-.409-.683-.192-.875.825-2.134 1.35-3.359 1.6-1.466.3-2.341 1.25-2.341 2.6z"
        fill="#E52822"
      />
    </svg>
  );
};

export const TwoWayArrow = () => (
  <svg
    width={14}
    height={12}
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.37354 8.90576L12.9995 8.90576"
      stroke="#333333"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.99302 6.81195L1 8.90598L2.99302 11"
      stroke="#333333"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6262 3.09424L1.00024 3.09424"
      stroke="#333333"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.0071 5.18799L13.0001 3.09397L11.0071 0.999942"
      stroke="#333333"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
