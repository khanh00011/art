import { BreadCrumbs } from "@/components/BreadCrumbs/BreadCrumbs";
import { TopNavigation } from "@/components/TopNavigation/TopNavigation";
import Image1 from "../../../public/images/image_details.png";
import img3 from "../../../public/images/imgList3.png";
import Image from "next/image";
import avtArtis from "../../../public/images/avtArtis.png";
import avtPresented from "../../../public/images/avtPresented.png";
import { Details } from "./components/Details/Details";
import { History } from "./components/History/History";
import { Description } from "./components/Description/Description";
import { LicenseAttributes } from "./components/LicenseAttributes/LicenseAttributes";
import { Footer } from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { LightBox } from "./components/LightBox/LightBox";
interface NFTDetailsOverviewProps {
  value: string;
}

export const NFTDetailsOverview: React.FC<NFTDetailsOverviewProps> = ({
  value,
}) => {
  const productId = JSON.parse(value).productId;

  const idAuth = "auth1";

  const [sizeImage, setSizeImage] = useState({ width: 724, height: 560 });
  const [tab, setTab] = useState<number>(1);
  const [openLightBox, setOpenLightBox] = useState<boolean>(false);
  const [openCheckOutModal, setOpenCheckOutModal] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow =
      openLightBox || openCheckOutModal ? "hidden" : "unset";
  }, [openLightBox, openCheckOutModal]);

  const handleClickTab = (id: number) => {
    setTab(id);
  };

  const handleShowLightBox = () => {
    setSizeImage({ width: 724, height: 560 });
    setOpenLightBox(!openLightBox);
  };

  const handleOpenCheckOutModal = () => {
    setOpenCheckOutModal(!openCheckOutModal);
  };
  return (
    <div className="bg-black-100 flex justify-center flex-col items-center">
      <div className="w-full z-50">
        <TopNavigation login verify />
      </div>
      <div className="max-w-[1440px]">
        <div className={`relative`}>
          <div
            className={`fixed inset-0 bg-black-100 z-[60] overflow-y-scroll flex justify-center ${
              openLightBox
                ? "light-box-transform"
                : "light-box-transform-hidden"
            }`}
          >
            <LightBox
              handleShowLightBox={handleShowLightBox}
              nameProduct={"Notre-Dame, Floods (1910"}
              nameArtis={"Albert Marquet"}
              sizeImage={sizeImage}
              setSizeImage={setSizeImage}
            />
            {/* <LightBox2 /> */}
          </div>

          <BreadCrumbs string={"Notre-Dame, Floods (1910)"} />
          <div className="flex lg:flex-col lg:px-8 pl-88 pr-[120px] xl:pl-4 xl:pr-6 pb-[44px] lg:pb-6">
            <div className="hidden lg:block lg:w-full lg: pb-6">
              <Image
                className="w-full rounded-[24px]"
                src={Image1}
                alt="Image details"
                onClick={handleShowLightBox}
              />
            </div>
            <div className="w-[724px] xl:w-[540px] xl:h-auto lg:hidden mr-8">
              <Image
                className="w-full rounded-[32px] cursor-pointer"
                src={Image1}
                alt="Image details"
                onClick={handleShowLightBox}
              />
              <Description />
              <LicenseAttributes />
            </div>

            <div className="flex-1">
              <Details
                idArtis={idAuth}
                nameProduct={"Notre-Dame, Floods (1910)"}
                avtArtis={avtArtis}
                avtPresented={avtPresented}
                nameArtis={"Albert Marquet"}
                namePresented={"Sotheby's"}
                openCheckOutModal={openCheckOutModal}
                handleOpenCheckOutModal={handleOpenCheckOutModal}
              />
              <History />
            </div>

            {/* Tabs mobie */}
            <div className="hidden lg:block mt-6 border rounded-[20px] border-white-10 pt-6 pb-4">
              <span
                className={`font-SFProSemi text-base m-0 ml-6 pb-3 ${
                  tab === 1 ? " text-white-100 border-b" : "text-white-60"
                }`}
                onClick={() => handleClickTab(1)}
              >
                Description
              </span>
              <span
                className={`font-SFProSemi text-base m-0 ml-4 pb-3 ${
                  tab === 2 ? " text-white-100 border-b" : "text-white-60"
                }`}
                onClick={() => handleClickTab(2)}
              >
                License attributes
              </span>
              <div className="flex flex-col mt-4">
                <div className="overflow-hidden">
                  {
                    <div
                      className={tab === 1 ? "profile-rl" : "profile-rl-hidden"}
                    >
                      {tab === 1 && <Description isNoHeader />}
                    </div>
                  }
                  {
                    <div
                      className={tab === 2 ? "profile-lr" : "profile-lr-hidden"}
                    >
                      {tab === 2 && <LicenseAttributes isNoHeader />}
                    </div>
                  }
                </div>
                {/* {tab === 1 && <Description isNoHeader />}
            {tab === 2 && <LicenseAttributes isNoHeader />} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-white-10">
        <Footer />
      </div>
    </div>
  );
};
