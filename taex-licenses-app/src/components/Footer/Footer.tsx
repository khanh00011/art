import logo from "../../../public/logo/Logo.svg";
import taex from "../../../public/logo/TAEX.svg";
import textDital from "../../../public/logo/Frame 2270.svg";
import Image from "next/image";
export const Footer = () => {
  return (
      <footer className="bg-black-100 ">
        <div className="px-[88px] sm:px-8 mx-auto pt-88px sm:pt-10">
          <div className="mx-auto md:block pb-110px flex  sm:py-6  ">
            <div className="team-logo ft-left lg:basis-[35%] basis-[100%] sm:mb-6 sm:pb-6 sm:border-b-[1px] sm:border-white-10 md:mb-8">
              <Image src={logo} alt="" />
              <div className="">
                <ul className=" mt-8 font-SFProRegular text-white-80 text-base sm:text-sm ">
                  <li className="my-6 cursor-pointer">
                    <a href="#" >Privacy Policy</a>
                  </li>
                  <li className="my-6 cursor-pointer">
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ft-right flex basis-[100%] lg:basis-[65%] sm:grid">
              <div className="basis-[36%] mb-7 sm:mb-0">
                <h3 className="title-footer-right">Products</h3>
                <ul className="sm:mb-7 mb-0">
                  <li className="ct-text-menu-footer">
                    <a href="licenses">Licenses</a>
                  </li>
                  <li className="ct-text-menu-footer">
                    <a href="#">Tokenization</a>
                  </li>
                  <li className="ct-text-menu-footer">
                    <a
                      href="https://taex.com"
                      className="flex sm:block space-x-1 sm:space-x-0"
                    >
                      <span className="mb-2 block">
                        <Image src={taex} alt="" />
                      </span>
                      <span>
                        <Image src={textDital} alt="" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="basis-[32%]">
                <h3 className="title-footer-right">Company</h3>
                <ul>
                  <li className="ct-text-menu-footer">
                    <a href="#">About</a>
                  </li>
                  <li className="ct-text-menu-footer">
                    <a href="mailto:info@theart.exchange">Become a Partner</a>
                  </li>
                </ul>
              </div>
              <div className="basis-[32%] sm:col-span-2">
                <h3 className="title-footer-right">Connect</h3>
                <ul>
                  <li className="ct-text-menu-footer">
                    <a href="#">Twitter (coming soon)</a>
                  </li>
                  <li className="ct-text-menu-footer">
                    <a href="#">Instagram (coming soon)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="font-normal sm:text-xs text-sm text-white-60 font-SFProRegular py-8 sm:py-4 text-center border-white-10 border-t">
            <span className="sm:hidden">
              Copyright © 2023 The Art Exchange Limited. All rights reserved
            </span>
            <span className="hidden sm:block">
              Copyright © 2023 theart.exchange LLC. All rights reserved
            </span>
          </div>
        </div>
      </footer>
  );
};
