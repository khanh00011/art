import BasicDropdown from "@/components/BasicDropdown";
import { GalleryFilter } from "@/components/Gallery Filter/GalleryFilter";
import ProductCard from "@/components/ProductCard";
import Image1 from "../../../../../public/images/image01.png";
import Image2 from "../../../../../public/images/image02.png";
import iconHide from "../../../../../public/icons/Filter.svg"
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export const Product = () => {
  const product = [];
  const router = useRouter();
  const idProduct = "idProduct";

  const handleOverview = (idProduct: string) => {
    router.push(`/overviews/${idProduct}`);
  };
  const [openFilter, setOpenFilter] = useState<boolean>(true);
  const handleToggleFilter = () => {
    setOpenFilter(!openFilter);
  }
  return (
    <div className="">
      <div className="grid grid-rows-1 grid-cols-4 md:grid-cols-3 gap-x-8">
        <div className={`md:hidden col-span-1 mr-8 pb-6 ${openFilter && 'border-b-[1px] border-white-20'}`}>
          <button
            onClick={handleToggleFilter}
            className="text-white-60 flex "
          >
            <Image src={iconHide} alt="" className="mr-2" />
            {openFilter ? 'Show filters' : 'Hide filters'}
          </button>
        </div>
        <div className="col-span-3  md:col-span-3 flex justify-between">
          <div className="text-white-60 text-base font-medium md:hidden">
            9,095 results
          </div>
          <div className="hidden md:block">
            <GalleryFilter />
          </div>
          <div className="w-[179px]">
            <BasicDropdown
              options={[
                { value: "a1", label: "Price low to high" },
                { value: "a2", label: "Price high to low" },
                { value: "a3", label: "All" },
              ]}
              placeholder="Price low to high"
              state="Filled"
            />
          </div>
        </div>
      </div>
      <div className="grid-cols-4 md:grid-cols-2 grid gap-x-8 pt-6">
        {
          openFilter &&
          <div className="col-span-1 row-span-max pr-8 md:hidden">
            <GalleryFilter />
          </div>
        }
        <div className={`grid gap-x-8 gap-y-6 md:grid-cols-2 sm:grid-cols-1 ${openFilter ?
          'col-span-3 grid-cols-3 lg:grid-cols-2'
          :
          'col-span-4 grid-cols-4 lg:grid-cols-3'} `}>
          <div className="text-white-60 text-base font-medium col-span-2 sm:col-span-1 hidden md:block ">
            9,095 results
          </div>
          <div className="col-span-1 cursor-pointer" onClick={() => handleOverview(idProduct)}>
            <ProductCard
              img={Image1}
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
          <div className="col-span-1 ">
            <ProductCard
              img={Image2}
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
          <div className="col-span-1">
            <ProductCard
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
          <div className="col-span-1">
            <ProductCard
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
          <div className="col-span-1">
            <ProductCard
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
          <div className="col-span-1">
            <ProductCard
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
          <div className="col-span-1 ">
            <ProductCard
              img={Image2}
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
          <div className="col-span-1 ">
            <ProductCard
              img={Image2}
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
          <div className="col-span-1 ">
            <ProductCard
              img={Image2}
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
          <div className="col-span-1 ">
            <ProductCard
              img={Image2}
              product="Notre-Dame, Floods (1910)"
              author="Albert Marquet"
              time={30}
              price={0.01}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
