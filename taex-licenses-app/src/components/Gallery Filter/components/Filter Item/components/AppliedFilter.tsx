import React, { Dispatch, SetStateAction, useState } from "react";
import close from "../../../../../../public/icons/Close.svg";
import Image from "next/image";
import { IPriceRange } from "@/components/Gallery Filter/interface/interface";
interface IProps {
  priceValue: IPriceRange;
}
export const AppliedFilter: React.FC<IProps> = ({ priceValue }) => {
  return (
    <>
      {priceValue.min !== "" && priceValue.max !== "" ? (
        <p className="bg-primary-100 text-sm px-[14px] mb-5 rounded-3xl text-white-100 w-max flex items-center font-medium uppercase">
          {priceValue.min} eth - {priceValue.max} eth{""}
          <button>
            <Image className="ml-2" src={close} alt="" />
          </button>
        </p>
      ) : (
        ""
      )}
    </>
  );
};
