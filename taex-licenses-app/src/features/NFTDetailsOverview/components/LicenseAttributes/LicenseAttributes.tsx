import Image from "next/image";
import avtPresented from "../../../../../public/images/avtPresented.png";
import { LicenseAttributesItems } from "../LicenseAttributesItem/LicenseAttributesItems";
interface LicenseAttributesProps {
  isNoHeader?: boolean;
}

export const LicenseAttributes: React.FC<LicenseAttributesProps> = ({isNoHeader}) => {
  // need data LicenseAttributes??
  return (
    <div className="w-full text-white-100 border rounded-[20px] border-white-10 mt-10 lg:border-none lg:text-sm lg:mt-4 p-6 pb-4 lg:px-6 lg:py-0">
      {!isNoHeader && <h1 className="font-SFProSemi text-lg mb-4">License attributes</h1>}
      <div className="w-full flex justify-between lg:flex-col lg:text-sm">
        <div className="w-[50%] lg:w-full mr-6">
          <LicenseAttributesItems title={"NFT license"} value={"#1 of 1"} />
          <LicenseAttributesItems
            title={"License owner"}
            value={"0xb312...jb82"}
          />
          <LicenseAttributesItems
            title={"Artist name"}
            value={"Albert Marquet"}
          />
          <LicenseAttributesItems
            title={"Artwork name"}
            value={"Notre-Dame, Floods"}
          />
          <LicenseAttributesItems title={"Year"} value={"1910"} />
        </div>

        <div className="w-[50%] lg:w-full">
          <LicenseAttributesItems title={"Country"} value={"France"} />
          <LicenseAttributesItems title={"Type"} value={"Non-exclusive"} />
          <LicenseAttributesItems
            title={"Terms of use"}
            value={"Metaverse, Instagram"}
          />
          <LicenseAttributesItems title={"Subrent"} value={"Allowed"} />
        </div>
      </div>
    </div>
  );
};
