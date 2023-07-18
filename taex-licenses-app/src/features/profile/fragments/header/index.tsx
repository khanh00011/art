/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ThumbNail from "../../../../../public/images/Thum.png";
import verifiedIcon from "../../../../../public/icons/Verified tick-01.svg";
import Twitter from "../../../../../public/icons/Twitter.svg";
import global from "../../../../../public/icons/Globe.svg";
import Button from "../../../../components/Button";
import * as React from "react";
import { Banner } from "@/features/Collections/components/Banner/Banner";
interface HeaderProfileProp {
  state?: boolean;
  name: string;
  time: string;
  profile: string;
  thumb?: any;
  isAuthor?: boolean;
  handleEditProfile?: () => void;
}

const HeaderProfile: any = (props: HeaderProfileProp) => {
  const { state, name, time, profile, thumb, isAuthor, handleEditProfile } = props;
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handleOpen = (): void => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else if (window.innerWidth < 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleOpen);

    return (): void => {
      window.removeEventListener("resize", handleOpen);
    };
  }, []);

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      setOpen(true);
    }
  }, []);
  return (
    <div
      className={`relative z-0 w-[100%] bg-profile-header border-b border-white-10 ${isAuthor ? "pb-[40px] " : "pb-0"
        }`}
    >
      {!isAuthor ? (
        <Banner />
      ) : (
        <>
          {state ? (
            <div className="max-w-[1440px] px-[88px] xl:px-[78px] lg:px-[58px] md:px-[32px] m-auto flex flex-col gap-6 pt-[128px] md:pt-[100px]">
              {open ? (
                <>
                  <div className="w-[120px] h-[120px] md:w-[80px] md:h-[80px]">
                    <Image
                      className="w-full h-full object-cover rounded-[32px] md:rounded-[24px]"
                      src={thumb ? thumb : ThumbNail}
                      alt={""}
                    ></Image>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <p className="text-white-100 text-3xl">{name}</p>
                      <Image src={verifiedIcon} alt={""}></Image>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        className="svg-color-filter"
                        src={Twitter}
                        alt={""}
                      ></Image>
                      <Image
                        className="svg-color-filter"
                        src={global}
                        alt={""}
                      ></Image>
                      <div onClick={handleEditProfile}>
                        <Button
                          size={"Small"}
                          state={"Default"}
                          style={"Outline"}
                          text={"Edit profile"}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-white-80">
                      Joined{" "}
                      <span className="font-SFProBold font-semibold text-white-100">
                        {time}
                      </span>
                    </p>
                  </div>
                  <div className="max-w-[727px]">
                    <p className="text-white-80 font-normal text-sm">
                      {profile}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[120px] h-[120px] md:w-[80px] md:h-[80px]">
                    <Image
                      className="w-full h-full object-cover rounded-[32px] md:rounded-[24px]"
                      src={thumb ? thumb : ThumbNail}
                      alt={""}
                    ></Image>
                  </div>
                  <div className="flex gap-4 flex-col">
                    <div className="flex gap-3">
                      <p className="text-white-100 text-3xl md:text-2xl">
                        {name}
                      </p>
                      <Image src={verifiedIcon} alt={""}></Image>
                    </div>
                    <p className="text-sm font-normal text-white-80">
                      Joined{" "}
                      <span className="font-SFProBold font-semibold text-white-100">
                        {time}
                      </span>
                    </p>
                    <div className="max-w-[727px]">
                      <p className="text-white-80 font-normal text-sm">
                        {profile}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      className="svg-color-filter"
                      src={Twitter}
                      alt={""}
                    ></Image>
                    <Image
                      className="svg-color-filter"
                      src={global}
                      alt={""}
                    ></Image>
                    <div onClick={handleEditProfile}>
                      <Button
                        size={"Small"}
                        state={"Default"}
                        style={"Outline"}
                        text={"Edit profile"}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="max-w-[1440px] px-[88px] xl:px-[78px] lg:px-[58px] md:px-[32px] m-auto flex flex-col gap-6 pt-[128px] md:pt-[100px]">
              {open ? (
                <>
                  <div className="w-[120px] h-[120px] md:w-[80px] md:h-[80px]">
                    <Image
                      className="w-full h-full object-cover rounded-[32px] md:rounded-[24px]"
                      src={thumb ? thumb : ThumbNail}
                      alt={""}
                    ></Image>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <p className="text-white-100 text-3xl">{name}</p>
                      <Image src={verifiedIcon} alt={""}></Image>
                    </div>
                    <div className="flex gap-3">
                      <Image
                        className="svg-color-filter"
                        src={Twitter}
                        alt={""}
                      ></Image>
                      <Image
                        className="svg-color-filter"
                        src={global}
                        alt={""}
                      ></Image>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-white-80">
                      Joined{" "}
                      <span className="font-SFProBold font-semibold text-white-100">
                        {time}
                      </span>
                    </p>
                  </div>
                  <div className="max-w-[727px]">
                    <p className="text-white-80 font-normal text-sm">
                      {profile}
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col gap-1">
                      <p className="md:text-base md:font-medium text-lg text-white-100 font-semibold font-SFProBold ">
                        999
                      </p>
                      <p className="font-normal text-sm text-white-40">
                        Licenses
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="md:text-base md:font-medium text-lg text-white-100 font-semibold font-SFProBold">
                        999
                      </p>
                      <p className="font-normal text-sm text-white-40">
                        Transactions
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[120px] h-[120px] md:w-[80px] md:h-[80px]">
                    <Image
                      className="w-full h-full object-cover rounded-[32px] md:rounded-[24px]"
                      src={thumb ? thumb : ThumbNail}
                      alt={""}
                    ></Image>
                  </div>
                  <div className="flex gap-4 flex-col">
                    <div className="flex gap-3">
                      <p className="text-white-100 text-3xl md:text-2xl">
                        {name}
                      </p>
                      <Image src={verifiedIcon} alt={""}></Image>
                    </div>
                    <p className="text-sm font-normal text-white-80">
                      Joined{" "}
                      <span className="font-SFProBold font-semibold text-white-100">
                        {time}
                      </span>
                    </p>
                    <div className="max-w-[727px]">
                      <p className="text-white-80 font-normal text-sm">
                        {profile}
                      </p>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-lg md:text-base md:font-medium text-white-100 font-semibold font-SFProBold ">
                          999
                        </p>
                        <p className="font-normal text-sm text-white-40">
                          Licenses
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-lg md:text-base md:font-medium text-white-100 font-semibold font-SFProBold">
                          999
                        </p>
                        <p className="font-normal text-sm text-white-40">
                          Transactions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      className="svg-color-filter"
                      src={Twitter}
                      alt={""}
                    ></Image>
                    <Image
                      className="svg-color-filter"
                      src={global}
                      alt={""}
                    ></Image>
                  </div>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default HeaderProfile;