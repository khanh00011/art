import { Price } from "@/components/Price/Price";
import Image from "next/image";
import VerifiedIcon from "../../../../../public/icons/Verified tick-1.svg";
import CheckoutModals from "@/components/CheckoutModals";
import { useRouter } from "next/router";
import { useState } from "react";

interface DetailsProps {
  idArtis: string
  nameProduct: string;
  avtArtis: any;
  nameArtis: string;
  avtPresented: any;
  namePresented: string;
  openCheckOutModal?: boolean;
  handleOpenCheckOutModal: () => void;
}

export const Details: React.FC<DetailsProps> = ({
  idArtis,
  nameProduct,
  avtArtis,
  avtPresented,
  nameArtis,
  namePresented,
  openCheckOutModal,
  handleOpenCheckOutModal,
}) => {
  const router = useRouter()
  const handleAuthDetails = (idArtis :string) => {
    router.push(`/authdetails/${idArtis}`)
  }
  return (
    <div className="w-full text-white-100">
      <div
        className={`fixed inset-0 w-full overflow-hidden h-full lg:p-2 bg-white-20 flex items-center fade-custom-in ${
          openCheckOutModal ? "visible opacity-100" : "invisible opacity-0 "
        } justify-center z-[51]`}
      >
        <div
          className={`w-[480px] lg:w-full lg:max-h-[100%] lg:overflow-auto ${
            openCheckOutModal
              ? "light-box-transform"
              : "light-box-transform-hidden"
          }`}
        >
          <CheckoutModals
            name={nameProduct}
            author={nameArtis}
            discount={0}
            price={0}
            totalPay={0}
            time={""}
            img={undefined}
            handleOpenCheckOutModal={handleOpenCheckOutModal}
          />
        </div>
      </div>

      <h1 className=" font-SFProSemi lg:text-3xl text-4xl pb-6 lg:pb-0 border-b border-white-10">
        {nameProduct}
      </h1>
      <div className="pt-[43px] lg:pt-[24px] flex flex-nowrap md:flex-col justify-between pb-10 lg:pb-6">
        <div className="w-[50%] flex flex-nowrap lg:w-full lg:pb-6">
          <Image src={avtArtis} className="w-10 h-10" alt="avt artis" />
          <div className="ml-2">
            <p className="text-xs">Artist</p>
            <p className=" font-SFProSemi text-lg lg:text-base">{nameArtis}</p>
          </div>
        </div>

        <div
          className="w-[50%] flex flex-nowrap lg:w-full cursor-pointer"
          onClick={() => handleAuthDetails(idArtis)}
        >
          <Image src={avtPresented} className="w-10 h-10" alt="avt artis" />
          <div className="ml-2">
            <p className="text-xs">Presented by</p>
            <p className=" font-SFProSemi text-lg lg:text-base">
              {namePresented}{" "}
              <Image
                className="inline-block pl-[6px]"
                src={VerifiedIcon}
                alt="icon"
              />
            </p>
          </div>
        </div>
      </div>
      <Price handleOpenCheckOutModal={handleOpenCheckOutModal} />
    </div>
  );
};
