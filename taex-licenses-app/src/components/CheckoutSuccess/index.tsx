import Close from "../../../public/icons/Close.svg";
import Icon from "../../../public/icons/Icon.svg";
import ArrowDown from "../../../public/icons/Arrow Down.svg";
import Image from "next/image";
import { useRouter } from "next/router";

interface CheckoutProps {
  name: string;
  author: string;
  status: "Processing" | "Successful";
  img: any;
  idAccount?: any;
  handleOpenCheckOutModal?: () => void;
}
const CheckoutSuccess = (props: CheckoutProps) => {
  const { name, author, status, img, idAccount, handleOpenCheckOutModal  } = props;
  const router = useRouter();
  const handleClickProfile = () => {
    router.push(`/profile/${idAccount}`);
  };
  const handleClickContinue = () => {
    if(handleOpenCheckOutModal) {
      handleOpenCheckOutModal();
      handleClickProfile();
    }
  }
  return (
    // absolute inset-0 w-full h-screen  bg-white-20 flex items-center justify-center
    <div className="text-white-100">
      <div className="w-[480px] bg-black-100 rounded-3xl pb-[24px] pt-[80px] px-[24px] flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <Image
            src={img ? img : "/../public/images/1.png"}
            alt="Image"
            width={500}
            height={500}
            className="w-[100%] max-w-[260px] max-h-[205px] object-cover rounded-[8px]"
          />
        </div>
        <div>
          <p className="font-normal text-lg text-center">
            You’re just paid the rent for <br />
            <span className="font-SFProBold font-semibold">{name}</span> by{" "}
            <span className="font-SFProBold font-semibold">{author}.</span>
          </p>
        </div>
        <div className="flex gap-4 p-[16px]">
          <div className="w-[50%]">
            <p className="font-normal text-sm text-white-40 ">Status</p>
            <p
              className={`font-medium font-SFProMedium ${
                status === "Processing" ? "text-warning" : "text-success"
              }`}
            >
              {status}
            </p>
          </div>
          <div className="w-[50%]">
            <p className="font-normal text-white-40 text-base ">
              Transaction hash
            </p>
            <p className=" max-w-[190px] overflow-ellipsis overflow-hidden font-SFProBold font-medium text-base">
              0x9b9cDE18b0x9b9cDE18b0x9b9cDE18b
            </p>
          </div>
        </div>
        {status === "Successful" && (
          <button
            onClick={handleClickContinue}
            className="w-[100%] bg-white-20 font-SFProMedium font-normal py-[8px] rounded-[100px] text-base"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutSuccess;
