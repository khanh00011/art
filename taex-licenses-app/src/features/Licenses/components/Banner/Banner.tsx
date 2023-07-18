import Image from "next/image";
import Iphone from "../../../../../public/images/iPhone 14.png";
import ArrowRight from "../../../../../public/icons/Arrow Right-1.svg";
import * as React from "react";
import HeaderSection from "../HeaderSection";
import Link from "next/link";

export const Banner = () => {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = (): void => setOpen(!open);
  React.useEffect(() => {
    const handleOpen = (): void => {
      if (window.innerWidth >= 1023) {
        setOpen(true);
      } else if (window.innerWidth < 1023) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleOpen);

    return (): void => {
      window.removeEventListener('resize', handleOpen);
    };
  }, []);

  React.useEffect(() => {
    if (window.innerWidth >= 1023) {
      setOpen(true);
    }
  }, []);
  return (
    <div className="pt-10 md:px-[32px] md:pt-[32px]">
      <HeaderSection
          title={["Captivate your", "community with art"]}
          whiteContent="Rent legal world-class artworks from rights holders. Now you can afford it."
          firstTitle
        />
      {/* <div className="text-center flex flex-col gap-6 xl:gap-5 lg:gap-4 md:gap-3"  >
            <p className="text-white-100 xl:text-5xl lg:text-4xl text-6xl font-SFProMedium tracking-tight max-w-[47%] xl:max-w-[47%] lg:max-w-[48%]  md:max-w-[50%] sm:max-w-[83%] mb:max-w-[100%]  m-auto">Captivate your community with art </p>
            <p className="text-white-60 text-2xl sm:text-xl max-w-[43%] xl:max-w-[65%] lg:max-w-[59%] md:max-w-[100%] m-auto">Rent legal world-class artworks from rights holders. Now you can afford it.</p>
          </div> */}
      <div className=" text-white-100 text-center flex items-center flex-col pt-10">
        <button className="bg-primary-100 rounded-3xl  mb-1 lg:mb-8">
          <Link href="#" className="flex w-full h-full px-6 py-2">
            
            <span className="pr-2 text-lg md:text-base">Launching on June 23</span>{" "}
            {
              open
              ? <Image src={ArrowRight} alt="ArrowRight"></Image> 
              : <></>
            }
          </Link>
        </button>
        <div className="">
          <Image className="relative z-10 sm:w-[210px] mb:w-[215px] m-auto" src={Iphone} alt="iphone" />{" "}
        </div>
      </div>
    </div>
  );
};