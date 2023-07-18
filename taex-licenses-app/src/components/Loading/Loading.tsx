import Image from "next/image";
import LoadingIcon from "../../../public/Loading.svg";
interface Loading {
  desktop?: boolean;
  text: string;
  button?: boolean;
}

export const Loading: React.FC<Loading> = ({text, button} : Loading ) => {
  return (
    <div className="p-[48px] sm:p-0 sm:px-[48px] w-480 sm:w-full text-white-100 bg-black-100 rounded-2xl flex items-center flex-col">
      <div className="pb-4">
        <Image className="animate-spin" src={LoadingIcon} alt="loading"></Image>
      </div>
      <p className="text-4xl pb-6">Processing...</p>
      <p className="pb-6">{text}</p>
      {
        button && (
          <button className="w-full bg-white-20 rounded-3xl">
            <p className="py-2">Cancel</p>
          </button>
        )
      }
    </div>
  );
};
