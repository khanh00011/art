import Image from "next/image";
import Avatar from "../../../public/Avt.svg";
import Profile from "../../../public/icons/Profile.svg";
import Disconect from "../../../public/icons/Upload.svg";
import ProfilePC from "../../../public/icons/ProfilePC.svg";
import DisconectPC from "../../../public/icons/UploadPC.svg";
import { useRouter } from "next/router";

interface DialogWallet {
  desktop?: boolean;
  idAccount?: any;
  handleDisconected?: ()=> void
}

export const DialogWallet: React.FC<DialogWallet> = ({ desktop, idAccount, handleDisconected }) => {
  const router = useRouter()
  const handleClickProfile = () => {
    router.push(`/profile/${idAccount}`)
  }
  return (
    <div
      className={
        desktop
          ? `flex flex-col lg:hidden bg-white-100 w-181 rounded-[20px] z-[9999]`
          : `lg:flex lg:flex-col lg:w-full bg-[#1c1c1c] hidden lg:static z-[9999]`
      }
    >
      <div
        className={`flex ${
          desktop ? `py-2 pl-4 border-black-10 border-b` : `mt-10 pb-4 px-8 `
        }    w-full`}
      >
        {!desktop && (
          <div className="pr-2.5">
            <Image className="" src={Avatar} style={{width: 32, height:32}} alt="" />
          </div>
        )}
        <div>
          {!desktop && (
            <p className={desktop ? `text-black-100` : `text-white-100`}>
              0xcfbv528950381225E18b...d92e
            </p>
          )}
          <div className={desktop ? "" : `flex pt-0.5`}>
            <p
              className={`${
                desktop ? ` text-black-100` : `bg-white-10 text-sm text-white-100 px-2 py-1`
              }  rounded-3xl mr-1`}
            >
              99 ETH
            </p>
            <p className={desktop ? `text-black-60` : `text-white-40`}>
              $187,559.46
            </p>
          </div>
        </div>
      </div>

      <div className={`flex ${desktop ? `mt-2 pl-4` : `px-8`} w-full`}>
        <div className="lg:pt-4 w-full border-t border-white-10">
          <div className={`flex ${desktop ? `mb-5 cursor-pointer ` : `mb-7 mx-0`}`} onClick={handleClickProfile}>
            <Image src={desktop ? ProfilePC : Profile} alt="" />
            <p
              className={`${
                desktop ? `text-black-100` : `text-white-100`
              } pl-3`}
            >
              Profile
            </p>
          </div>
          <div className={`flex ${desktop ? `pb-2 cursor-pointer` : `pb-9 px-0`}`}>
            <Image className="rotate-90" src={desktop ? DisconectPC : Disconect} alt="" />
            <p
              className={`${
                desktop ? `text-black-100 ` : `text-white-100`
              } pl-3`}
              onClick={handleDisconected}
            >
              Disconnect
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
