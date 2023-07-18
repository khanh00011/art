import { TopNavigation } from "@/features/Licenses/components/TopNavigation/TopNavigation";
import { Banner } from "./components/Banner/Banner";
import { Market } from "./components/Market/Market";
import Home from "./home";
import { About } from "./components/About/About";
import { Footer } from "@/components/Footer/Footer";
import { RequestArtWork } from "./components/RequestArtwork/RequestArtwork";
import * as React from "react";
import { MarketSection } from './components/MarketSection'
import { FormVariants } from "@/components/FormVariants/FormVariants";

const Licenses = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handleOpen = (): void => {
      if (window.innerWidth >= 769) {
        setOpen(true);
      } else if (window.innerWidth < 769) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleOpen);
    return (): void => {
      window.removeEventListener('resize', handleOpen);
    };
  }, []);

  React.useEffect(() => {
    if (window.innerWidth >= 769) {
      setOpen(true);
    }
  }, []);
  return (
    <div className="w-full bg-black-100 ">
      <div className="">
        {
          open ? (
            <div className={` m-auto background-img-licenses bg-center ${open ? "" : 'background-img-licenses-responsive'}`}>
              <TopNavigation />
              <div className={` w-[100%] px-[88px] xl:px-[78px] lg:px-[58px] md:px-[0px] m-auto`}>
                <Banner />
              </div>
            </div>
          ) : (
            <div className={`background-img-licenses bg-center ${open ? "" : 'background-img-licenses-responsive'} max-w-[1440px] px-[88px] xl:px-[78px] lg:px-[58px] md:px-[0px] m-auto`}>
              <div className="bg-black-100">
                <TopNavigation />
              </div>
              <Banner />
            </div>
          )
        }
      </div>
      <div className="max-w-[1440px] w-[100%] px-[88px] xl:px-[78px] lg:px-[58px] md:px-[32px] m-auto">
        <MarketSection />
      </div>
      <div className=" m-auto w-[100%]">
        <Market />
      </div>
      <div className="max-w-[1440px] w-[100%] px-[88px] xl:px-[78px] lg:px-[58px] md:px-[32px] m-auto">
        <Home />

      </div>
      <About />
      <RequestArtWork />
      <div className=" border-t m-auto border-white-10">
        <Footer />
      </div>
    </div>
  );
};
export default Licenses;