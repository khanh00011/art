import Image from "next/image";
import avtPresented from "../../../../../public/images/avtPresented.png";
interface HistoryProps {}

export const History: React.FC<HistoryProps> = () => {
  // need data history??
  const avatar = avtPresented;
  const content = "Returned to eturned to eturned to Returned to eturned to eturned to Returned to eturned to eturned to";
  const artis = "Sotheby's";
  const time = "04-04-2023 08:30";
  return (
    <div className="w-full text-white-100 border rounded-[20px] border-white-10 mt-10 lg:mt-6 p-6">
      <h1 className=" font-SFProSemi text-2xl mb-4">History</h1>
      <ul className="history">
        <li className="flex flex-nowrap pb-6">
          <Image src={avatar} className="w-10 h-10 z-20" alt="avt artis" />
          <div className="ml-2">
            <p className="text-sm pb-0.5">
              {content} <span className=" font-SFProSemi">{artis}</span>
            </p>
            <p className="text-sm text-white-40">{time}</p>
          </div>
        </li>

        <li className="flex flex-nowrap pb-6">
          <Image src={avatar} className="w-10 h-10 z-20" alt="avt artis" />
          <div className="ml-2">
            <p className="text-sm pb-0.5">
              {content} <span className=" font-SFProSemi">{artis}</span>
            </p>
            <p className="text-sm text-white-40">{time}</p>
          </div>
        </li>

        <li className="flex flex-nowrap pb-6">
          <Image src={avatar} className="w-10 h-10 z-20" alt="avt artis" />
          <div className="ml-2">
            <p className="text-sm pb-0.5">
              {content} <span className=" font-SFProSemi">{artis}</span>
            </p>
            <p className="text-sm text-white-40">{time}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
