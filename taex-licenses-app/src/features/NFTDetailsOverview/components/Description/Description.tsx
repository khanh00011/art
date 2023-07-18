import Image from "next/image";
import avtPresented from "../../../../../public/images/avtPresented.png";
interface DescriptionProps {
  isNoHeader?: boolean;
}

export const Description: React.FC<DescriptionProps> = ({ isNoHeader }) => {

  const product = {}

  // need data Description??
  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.";
  const contract = "0xbesdfsdffdsa826";
  const owner = "0x2sdsdfsdfsd85f9";
  const tokenId = "1";
  const standard = "ERC721";
  return (
    <div className="w-full text-white-100 border rounded-[20px] border-white-10 p-6 pb-4 mt-10 lg:text-sm lg:border-none  lg:mt-4  lg:px-6 lg:py-0">
      {!isNoHeader && (
        <h1 className="font-SFProSemi text-lg mb-4">Description</h1>
      )}
      <p className="text-white-60 pb-4">{content}</p>

      <div className="w-full flex justify-between pb-2">
        <p className="text-white-60">Contract</p>
        <div className="flex">
          <p className="text-middle-dot text-primary-100 truncate max-w-[66px]">
            {contract.substring(0, contract.length - 4)}
          </p>
          <span className="text-primary-100 -ml-[2px]">{contract.slice(-4)}</span>
        </div>
      </div>

      <div className="w-full flex justify-between pb-2">
        <p className="text-white-60">Owner</p>
        <div className="flex">
          <p className="text-middle-dot text-primary-100 truncate max-w-[66px]">
            {owner.substring(0, owner.length - 4)}
          </p>
          <span className="text-primary-100 -ml-[2px]">{owner.slice(-4)}</span>
        </div>
      </div>

      <div className="w-full flex justify-between pb-2">
        <p className="text-white-60">Token ID</p>
        <p className="text-middle-dot text-primary-100">{tokenId}</p>
      </div>

      <div className="w-full flex justify-between pb-2">
        <p className="text-white-60">Standard</p>
        <p className="text-middle-dot text-white-60">{standard}</p>
      </div>
    </div>
  );
};