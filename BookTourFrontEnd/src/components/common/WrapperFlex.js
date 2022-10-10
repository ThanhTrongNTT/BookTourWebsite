import { alignItem, arrSpacing, justifyContent } from "~/utils/arrCss";
import classNames from "~/utils/classNames";

const WrapperFlex = ({
  center,
  children,
  spacing,
  items,
  justify,
  flex1,
  className,
}) => {
  let resultJustify = justifyContent.find((item) => item.justify === justify);
  let resultAlignItem = alignItem.find((item) => item.align === items);
  return (
    <div
      className={classNames(
        "flex",
        flex1 && "flex-1",
        arrSpacing[spacing - 1],
        justify && resultJustify.justifyCss,
        items && resultAlignItem.alignCss,
        center && "items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default WrapperFlex;
