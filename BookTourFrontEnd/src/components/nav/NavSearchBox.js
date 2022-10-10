import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import classNames from "~/utils/classNames";
import { initialTabs as tabs } from "~/utils/search-box/ingredients";

const NavSearchBox = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="mt-4 rounded-lg bg-[rgba(0,0,0,0.3)] px-4 pt-2 pb-4 shadow-[0px_0px_8px_4px_rgba(255,255,255,0.2)_inset]">
      <nav className="h-full rounded-[10px] rounded-bl-none rounded-br-none border-b border-b-[#eeeeee] bg-transparent pt-1">
        <ul className="flex items-center rounded-bl-none rounded-br-none text-sm font-medium">
          {tabs.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className={classNames(
                "justiy-between relative h-full w-full flex-1 cursor-pointer select-none items-center rounded-[5px] rounded-bl-none rounded-br-none bg-transparent p-3 lg:p-4",
                item === selectedTab ? "bg-[#eee] text-c3" : "text-c4"
              )}
              onClick={() => setSelectedTab(item)}
            >
              <p className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </p>
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-[-2px] left-0 right-0 h-[3px] bg-primary-blue"
                  layoutId="underline-tab"
                />
              ) : null}
            </Link>
          ))}
        </ul>
      </nav>
      <main>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default NavSearchBox;
