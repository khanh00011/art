import Image from "next/image";
import iconHide from "../../../public/icons/Filter.svg";
import iconHide1 from "../../../public/icons/Filter-1.svg";
import close from "../../../public/icons/Close.svg";
import React, { useEffect, useState } from "react";
import { FilterItem } from "./components/Filter Item/FilterItem";
import { AppliedFilter } from "./components/Filter Item/components/AppliedFilter";
import Button from "../Button";

interface IProps {
  isAuth?: boolean;
}
export const GalleryFilter: React.FC<IProps> = ({ isAuth }) => {
  const [showFilter, setShowfilter] = useState(true);

  useEffect(() => {
    if (screen.width > 768) {
      setShowfilter(false);
    }
  }, []);
  const [priceValue, setPriceValue] = useState({
    min: "0.01",
    max: "0.1",
  });
  const handleShowFilter = () => {
    setShowfilter(!showFilter);
  };
  useEffect(() => {
    if (screen.width < 769 && !showFilter) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [showFilter]);
  return (
    <div className="">
      <div className="hidden md:block">
        <button
          onClick={handleShowFilter}
          className="text-white-100 flex py-2 px-[26.5px] bg-white-20 rounded-[100px] "
        >
          <Image src={iconHide1} alt="" className="mr-[10px]" />
          Filter
        </button>
      </div>
      <div className={showFilter === false ? "block affter-bg-mb" : "hidden"}>
        <div className="ct-fixed-fillter-mb ">
          <div className="hidden md:flex justify-between pb-[16px] mb-6 border-b border-white-10">
            <h2 className="text-white-100 font-semibold text-2xl">Filter</h2>
            <div onClick={handleShowFilter}>
              <Button
                iconSvg={close}
                size="Small"
                state="Default"
                style="Outline"
              />
            </div>
          </div>
          <FilterItem isAppliedfilter />
          <AppliedFilter priceValue={priceValue} />
          <FilterItem isPriceRange />
          {!isAuth && <FilterItem isPresentor />}
          <FilterItem isArtist />
        </div>
      </div>
    </div>
  );
};
