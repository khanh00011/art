import React, { useState } from "react";
interface IProps {
  arr?: string[];
  error?: boolean;
  disable?: boolean;
  noBorderRight?: boolean;
}
export const BasicDropdown: React.FC<IProps> = ({
  error,
  disable,
  arr,
  noBorderRight,
}) => {
  return (
    <div className="relative">
      <select
        disabled={disable}
        className={
          error
            ? "dropdow-error border-r-[14px] rounded-3xl w-full h-10"
            : disable
            ? "dropdow-disable border-r-[14px] rounded-3xl w-full"
            : noBorderRight
            ? "dropdow-basic border-r-[14px] rounded-l-3xl w-full"
            : "dropdow-basic border-r-[14px] rounded-3xl w-full leading-relaxed h-10"
        }
        name=""
        id=""
      >
        <option className="bg-black-100 outline-none border-none font-SFProRegular" selected>
          Opt
        </option>
        {arr?.map((item, index) => {
          return (
            <option
              className="bg-black-100 outline-none border-none"
              key={index}
              value={item}
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
