import React from "react";
import classNames from "~/utils/classNames";
import { motion } from "framer-motion";
const Wrapper = ({ children, width, className, ...props }) => {
  return (
    <motion.div
      className={classNames(
        "rounded-[4px] bg-white shadow-[rgba(0,_0,_0,_0.122)_0px_2px_12px] pb-4",
        className,
        width && width
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
