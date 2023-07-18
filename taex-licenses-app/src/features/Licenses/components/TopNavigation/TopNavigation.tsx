import Image from "next/image";
import Logo from "../../../../../public/Logo.svg";
import Twitter from "../../../../../public/icons/Twitter2.svg";
import Instagram from "../../../../../public/icons/Instagram.svg";
import * as React from "react";

export const TopNavigation = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handleOpen = (): void => {
      if (window.innerWidth >= 767) {
        setOpen(true);
      } else if (window.innerWidth < 767) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleOpen);
    return (): void => {
      window.removeEventListener('resize', handleOpen);
    };
  }, []);
  React.useEffect(() => {
    if (window.innerWidth >= 767) {
      setOpen(true);
    }
  }, []);
  return (
    <nav className={`flex justify-between items-center h-[76px] md:h-[104px] md: bg-transparent border-b border-white-10 text-white-100 md:px-[32px] w-[100%] px-[88px] xl:px-[78px] lg:px-[58px] m-auto`}>
      <div className={`flex ${ open ? 'items-center' : ' w-[100%] mt-[25px]' } md:justify-between mb:w-[100%]`}>
        <Image src={Logo} className="logo-width" alt="logo"/>
        <div className="pl-4 xl:pl-2 sm:pl-1">
          <a className="px-2 py-1 bg-white-5 rounded-[2px] border border-white-10 xl:text-sm md:text-sm" href="#">
            Licenses
          </a>
        </div>
      </div>
      <div className="flex mt-2 md:hidden">
        <a className="mr-5" href="#">
          <Image src={Twitter} alt="Twitter" />
        </a>
        <a href="#" className="-mt-1">
          <Image src={Instagram} alt="Instagram" />
        </a>
      </div>
    </nav>
  );
};
