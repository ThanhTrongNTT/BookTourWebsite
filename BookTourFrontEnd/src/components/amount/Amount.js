import React, { Fragment } from "react";
import Number from "@/number/Number";
import Wrapper from "@/wrapper/Wrapper";
import { IconMinus, IconPlus } from "@/icon";
import GroupAmount from "@/common/GroupAmount";

const Amount = ({
  control,
  name,
  initialValue,
  onClickPlus,
  onClickMinus,
  children,
}) => {
  return (
    <Fragment>
      <GroupAmount>
        <Number control={control} name={name} initialValue={initialValue}>
          {initialValue}
        </Number>
        <p className="text-c4">{children}</p>
      </GroupAmount>
      <GroupAmount spacing={"gap-1"}>
        <Wrapper onClick={onClickMinus}>
          <IconMinus />
        </Wrapper>
        <Wrapper onClick={onClickPlus}>
          <IconPlus />
        </Wrapper>
      </GroupAmount>
    </Fragment>
  );
};

export default Amount;
