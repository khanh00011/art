import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import Avatar from "../../../public/Avt.svg";
import ArrowDown from "../../../public/icons/Arrow Down.svg";
import Wallet from "../../../public/icons/Wallet.svg";
import Menu from "../../../public/icons/Menu.svg";
import MenuClose from "../../../public/icons/Menu_Close.svg";
import VerifiedIcon from "../../../public/icons/Verified tick-1.svg";
import { BasicFormSearch } from "../BasicFormSearch/BasicFormSearch";
import { useEffect, useState } from "react";
import { DialogWallet } from "../DialogWallet/DialogWallet";
import { RainbowKit } from "../RainbowKit/RainbowKit";
import iconWallet from "../../../public/icons/Wallet.svg";
import RainbowKitImage from "../../../public/images/rainbowkit.png";
import SumSub from "../../../public/images/sumsub.png";
import { Modal } from "../Modals/Modal";

interface TopNavigationProps {
  login?: boolean;
  verify?: boolean;
  openRainbowKit?: number;
  handleShowLoading?: () => void;
  handleOpenRainbowKit?: (id: any) => any;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  verify,
  login,
  openRainbowKit,
  handleShowLoading,
  handleOpenRainbowKit,
}) => {
  const idAccount = login && "1";
  const [open, setOpen] = useState<boolean>(false);
  const [openWelletProfile, setOpenWelletProfile] = useState<boolean>(false);

  const handleOpenWelletProfile = () => {
    setOpenWelletProfile(!openWelletProfile);
  };

  const handleDisconected = () => {
    handleOpenRainbowKit && handleOpenRainbowKit(0);
    setOpenWelletProfile(!openWelletProfile);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-black-100 flex justify-between items-center lg:items-baseline lg:pt-[52px] lg:h-[104px] w-max-1440 h-88 lg:pl-8 lg:pr-[38px] px-88 border-b border-white-10">
      <div className="flex lg:justify-between items-center lg:items-baseline lg:w-full">
        <div className="pr-10 lg:pr-0 ">
          <Image src={Logo} alt="" />
        </div>
        <div className="lg:block hidden">
          <Image onClick={handleOpen} src={open ? MenuClose : Menu} alt="" />
        </div>
        <div className="lg:hidden w-435">
          <BasicFormSearch
            search
            placeholder="Search by artwork, artist name, etc"
          />
        </div>
      </div>

      <div
        className={`${verify || login ? "flex" : "flex lg:block"
          } lg:absolute lg:p-8 lg:top-[104px] lg:left-0 lg:w-full lg:bg-[#333333] lg:h-auto justify-center items-center relative  ${open ? `block` : `lg:hidden`
          }`}
      >
        {login && openWelletProfile && (
          <div className="absolute top-11 right-0">
            <DialogWallet
              handleDisconected={handleDisconected}
              idAccount={idAccount}
              desktop
            />
          </div>
        )}
        {login && (
          <div className="absolute w-full top-0 right-0">
            <DialogWallet
              handleDisconected={handleDisconected}
              idAccount={idAccount}
            />
          </div>
        )}
        {
          <div
            className={`${verify ? "verify-showed" : "verify-hidden"
              } flex z-[0] lg:hidden xl:pr-2`}
          >
            <Image src={VerifiedIcon} alt="" />
            <p className="text-white-100 lg:hidden pr-4 pl-2 xl:hidden">
              Verified
            </p>
          </div>
        }
        {login ? (
          <button
            onClick={handleOpenWelletProfile}
            className={
              login
                ? `header-login bg-[#333333] w-181 lg:hidden z-[11]`
                : `header-basic bg-[#fe3d2d] w-163 lg:w-full lg:justify-center`
            }
          >
            <Image className="" src={login ? Avatar : Wallet} alt="" />
            <span className="truncate ml-[10px]">0xcfb...d92e</span>
            <Image
              className="absolute top-2 right-4 lg:hidden"
              src={ArrowDown}
              alt=""
            />
          </button>
        ) : (
          <div>
            {/* <RainbowKit /> */}
            <button
              onClick={() => {
                setOpen(false);
                handleOpenRainbowKit && handleOpenRainbowKit(2);
              }}
              type="button"
              className="text-white-100 lg:w-full justify-center flex px-4 py-2 bg-primary-100 rounded-full items-center text-base font-medium"
            >
              <Image src={iconWallet} alt="" className="mr-2" /> Connect Wallet
            </button>
          </div>
        )}
      </div>

      <div
        className={`fixed inset-0 w-full overflow-hidden h-full lg:p-2 bg-white-20 flex items-center fade-custom-in ${openRainbowKit === 2 ? "visible opacity-100" : "invisible opacity-0 "
          } justify-center z-40`}
      >
        <div
          className={`w-[660px] lg:w-full lg:max-h-[100vh] lg:overflow-auto ${openRainbowKit === 2
              ? "light-box-transform"
              : "light-box-transform-hidden"
            }`}
        >
          <Image
            onClick={() => {
              handleOpenRainbowKit && handleOpenRainbowKit(3);
            }}
            className=" cursor-pointer w-full"
            src={RainbowKitImage}
            alt="RainbowKitImage"
          ></Image>
        </div>
      </div>

      {openRainbowKit === 3 && (
        <div className="fixed animate-wiggle inset-0 w-full top-0 bottom-0 flex items-center justify-center z-20 bg-white-20 px-8 sm:px-4 ">
          <Modal
            verifyWellet
            openModal={openRainbowKit}
            setOpenModal={() => {
              handleOpenRainbowKit && handleOpenRainbowKit(4);
            }}
          />
        </div>
      )}

      {openRainbowKit === 4 && (
        <div className="fixed animate-wiggle inset-0 w-full top-0 bottom-0 flex items-center justify-center z-20 bg-white-20 px-8 sm:px-4 ">
          <Image
            onClick={() => {
              handleShowLoading && handleShowLoading();
            }}
            className=" cursor-pointer w-[35%] sm:w-full lg:w-  [60%] rounded-3xl"
            src={SumSub}
            alt="RainbowKitImage"
          ></Image>
        </div>
      )}

      {openRainbowKit === 5 && (
        <div className="fixed animate-wiggle inset-0 w-full top-0 bottom-0 flex items-center justify-center z-20 bg-white-20">
          <Modal
            textLoading="Retrieving your verify result"
            loading
            openModal={openRainbowKit}
            setOpenModal={() => {
              handleOpenRainbowKit && handleOpenRainbowKit(6);
            }}
          />
        </div>
      )}

      {openRainbowKit === 6 && (
        <div className="fixed animate-wiggle inset-0 w-full top-0 bottom-0 flex items-center justify-center z-20 bg-white-20 px-8 sm:px-4 ">
          <Modal
            verified
            openModal={openRainbowKit}
            setOpenModal={() => {
              handleOpenRainbowKit && handleOpenRainbowKit(999);
            }}
          />
        </div>
      )}
    </nav>
  );
};
