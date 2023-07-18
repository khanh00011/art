import Close from "../../../public/icons/Close.svg";
import Icon from "../../../public/icons/Icon.svg";
import ArrowDown from "../../../public/icons/Arrow Down.svg";
import Image from "next/image";
import BasicDropdown from "../BasicDropdown";
import image from "../../../public/images/1.png";
import { useState } from "react";
import CheckoutSuccess from "../CheckoutSuccess";
import { Loading } from "../Loading/Loading";

interface CheckoutProps {
  name: string;
  author: string;
  discount: number;
  price: number;
  totalPay: number;
  time: string;
  img: any;
  handleOpenCheckOutModal?: () => void;
}

const CheckoutModalsProfile = (props: CheckoutProps) => {
  const {
    name,
    author,
    discount,
    price,
    totalPay,
    time,
    img,
    handleOpenCheckOutModal,
  } = props;
  const [valueDuration, setValueDuration] = useState<string>("7");
  const handleChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueDuration(e.target.value);
  };
  return (
    // absolute inset-0 w-full h-screen bg-white-20 flex items-center justify-center "class when user"
        <div className="text-white-100 w-full">
          <div className="w-full bg-black-100 rounded-3xl p-[24px] sm:p-[16px] flex flex-col gap-4 sm:gap-3">
            <div className="flex justify-between items-center">
              <p className="font-SFProBold font-semibold text-2xl lg:text-lg">
                Extend period
              </p>
              <div
                className="rounded-[100px] border border-primary-100 border-solid p-[10px] lg:p-1 w-9 h-9 lg:w-6 lg:h-6 cursor-pointer"
                onClick={handleOpenCheckOutModal}
              >
                <Image
                  src={Close}
                  alt="Close icon"
                  className="svg-color-filter lg:w-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={img ? img : image}
                alt="Image"
                width={500}
                height={500}
                className="w-[100%] max-w-[260px] max-h-[205px] sm:max-w-[240px] sm:max-h-[auto] object-cover rounded-[8px]"
              />
            </div>
            <div>
              <p className="font-normal text-lg text-center lg:text-sm">
                You’re about to rent the <br />
                <span className="font-SFProBold font-semibold">
                  {name}
                </span> by{" "}
                <span className="font-SFProBold font-semibold">{author}.</span>
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-2 sm:gap-[6px] border-b-[1px] border-opacity-10 border-solid border-white-10">
                <p className="text-SFProMedium text-base text-white-80 text-opacity-70">
                  Duration
                </p>
                <div className="flex w-[100%] gap-2 lg:gap-1">
                  <input
                    className="flex-1 px-4 py-2 rounded-3xl bg-white-20 outline-none"
                    type="text"
                    value={valueDuration ?? ""}
                    onChange={handleChangeDuration}
                  />
                  <div className="max-w-[200px] text-black-100">
                    <BasicDropdown
                      options={[
                        { value: "Option1", label: "Days" },
                        { value: "Option2", label: "Weeks" },
                        { value: "Option3", label: "Months" },
                      ]}
                      state={"Default"}
                      placeholder={"Days"}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal text-sm text-white-60">
                    Monthly rent
                  </p>
                  <p className="text-SFProMedium font-semibold text-sm">
                    {price} ETH
                  </p>
                </div>
                <div className="flex justify-between pb-4 sm:pb-2">
                  <p className="font-normal text-sm text-white-60 flex gap-2">
                    theart.exchange fee{" "}
                    <Image
                      src={Icon}
                      alt="Close icon"
                      width={14}
                      height={14}
                      className="svg-color-filter"
                    />
                  </p>
                  <p className="text-SFProMedium font-semibold text-sm">
                    {discount}%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-[6px]">
              <div className="flex justify-between">
                <p className="font-normal text-sm text-white-80">
                  You will rent until
                </p>
                <p className="text-SFProMedium font-semibold text-sm">{time}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-normal text-sm text-white-80">
                  You will pay
                </p>
                <p className="text-SFProMedium font-semibold text-sm">
                  {totalPay} ETH
                </p>
              </div>
            </div>
            <button className="w-[100%] bg-primary-100 font-SFProMedium font-normal py-[8px] rounded-[100px] text-base">
              Pay now
            </button>
          </div>
        </div>
  );
};

export default CheckoutModalsProfile;
