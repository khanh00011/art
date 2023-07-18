import profileImage from "../../../../../public/images/profileImg.png";
import Ether from "../../../../../public/icons/Ether.svg";
import Image from "next/image";
const Table = () => {
  interface dataProps {
    transaction: string;
    image: any;
    name: string;
    period: string;
    amount: number;
    date: string;
  }
  const data: dataProps[] = [
    {
      transaction: "0x728v5d2t4efsdf3w2210x728v19960x728v5d2t4efsdf3w2210x728v1996",
      image: profileImage,
      name: "Notre-Dame, Floods (1910)",
      period: "7 days",
      amount: 0.22,
      date: "01-04-2023 14:02",
    },
    {
      transaction: "0x728v5d2t4efsdf3w2210x728v1996",
      image: profileImage,
      name: "Notre-Dame, Floods (1910)",
      period: "7 days",
      amount: 0.22,
      date: "01-04-2023 14:02",
    },
    {
      transaction: "0x728v5d2t4efsdf3w2210x728v1996",
      image: profileImage,
      name: "Notre-Dame, Floods (1910)",
      period: "7 days",
      amount: 0.22,
      date: "01-04-2023 14:02",
    },
    {
      transaction: "0x728v5d2t4efsdf3w2210x728v1996df3w2210x728v1996",
      image: profileImage,
      name: "Notre-Dame, Floods (1910)",
      period: "7 days",
      amount: 0.22,
      date: "01-04-2023 14:02",
    },
    {
      transaction: "0x728v5d2t4efsdf3w2210x728df3w2210x728v19966",
      image: profileImage,
      name: "Notre-Dame, Floods (1910)",
      period: "7 days",
      amount: 0.22,
      date: "01-04-2023 14:02",
    },
    {
      transaction: "0x728v5d2t4efsdf3w2210x728v1996",
      image: profileImage,
      name: "Notre-Dame, Floods (1910)",
      period: "7 days",
      amount: 0.22,
      date: "01-04-2023 14:02",
    },
    {
      transaction: "0x728v5d2t4efsdf3w2210x728v1996",
      image: profileImage,
      name: "Notre-Dame, Floods (1910)",
      period: "7 days",
      amount: 0.22,
      date: "01-04-2023 14:02",
    },
    {
      transaction: "0x728v5d2t4efsdf3w2210x728v1996",
      image: profileImage,
      name: "Notre-Dame, Floods (1910)",
      period: "7 days",
      amount: 0.22,
      date: "01-04-2023 14:02",
    },
  ];
  return (
  <div className="max-w-[100%] rounded-[24px] border border-white-10 xl:overflow-x-scroll control">
    <table className=" w-[1262px] text-white-100 text-left rounded-[24px] ">
      <thead className="text-sm text-white-60">
        <tr className="">
          <th className="font-normal pl-[32px] py-[16px]">Transaction</th>
          <th className="font-normal py-[16px]">Item</th>
          <th className="font-normal py-[16px]">Period</th>
          <th className="font-normal py-[16px]">Amount</th>
          <th className="font-normal py-[16px] pr-[32px]">Date</th>
        </tr>
      </thead>
      <tbody className="text-base font-medium">
        {data.map((item: dataProps, index: number) => (
          <tr key={index} className={index % 2 === 0 ? "bg-white-10" : ""}>
            <td className="pl-[32px] py-[16px] w-[30%]"><p className="max-w-[216px]  whitespace-nowrap overflow-hidden overflow-ellipsis ">{item.transaction}</p></td>
            <td className="py-[16px] w-[30%]">
              <div className="flex items-center gap-[8px]">
                <div className="w-[36px] h-[36px]">
                  <Image
                    src={item.image}
                    alt={""}
                    className="w-full h-full object-cover rounded-[8px]"
                  ></Image>
                </div>
                <p>{item.name}</p>
              </div>
            </td>
            <td className="py-[16px] w-[10%]">
              <p>{item.period}</p>
            </td>
            <td className="py-[16px] w-[15%]">
              <p className="flex items-center gap-[4px]">
                <Image
                  src={Ether}
                  alt={""}
                  className="svg-color-filter"
                ></Image>
                {item.amount} ETH
              </p>
            </td>
            <td className="py-[16px] pr-[32px] w-[15%]">
              <p>{item.date}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};
export default Table;
