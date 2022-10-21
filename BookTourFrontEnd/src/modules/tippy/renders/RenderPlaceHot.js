import Tippy from "@tippyjs/react/headless";
import React from "react";
import { useSpring } from "framer-motion";
import { IconLocationRegular } from "@/icon";
import Input from "@/input/Input";
import ListPlace from "~/components/list/ListPlace";
import Wrapper from "@/popper/Wrapper";

const RenderPlaceHot = ({ setValue, control }) => {
  //framer-motion
  const springConfig = { damping: 15, stiffness: 300 };
  const initialScale = 0.5;
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);

  function onMount() {
    scale.set(1);
    opacity.set(1);
  }

  function onHide({ unmount }) {
    const cleanup = scale.onChange((value) => {
      if (value <= initialScale) {
        cleanup();
        unmount();
      }
    });

    scale.set(initialScale);
    opacity.set(0);
  }
  return (
    <span>
      <Tippy
        trigger="click"
        interactive
        zIndex={9999}
        placement="bottom-start"
        hideOnClick
        offset={[0]}
        animation={true}
        onMount={onMount}
        onHide={onHide}
        render={(attrs) => (
          <Wrapper
            style={{ scale, opacity }}
            width={"w-[728px]"}
            tabIndex="-1"
            {...attrs}
          >
            <ListPlace
              setValue={setValue}
              heading="The place is hot"
              control={control}
              name="location"
            />
          </Wrapper>
        )}
      >
        <div className="relative z-10 h-full cursor-pointer rounded-[4px] bg-white">
          <span className="absolute left-0 top-0 bottom-0 mx-4 flex items-center py-4 text-c4">
            <IconLocationRegular />
          </span>
          <Input
            control={control}
            type="text"
            name="location"
            className="h-full w-full bg-transparent py-4 pl-12 text-c3"
            placeholder="Enter destination..."
          />
        </div>
      </Tippy>
    </span>
  );
};

export default RenderPlaceHot;
