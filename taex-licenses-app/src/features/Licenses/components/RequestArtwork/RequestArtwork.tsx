import Button from "@/components/Button";
import { TitlePage } from "../TitlePage/TitlePage";
import iconStarted from "../../../../../public/icons/Arrow Right-1.svg";
import iconPartner from "../../../../../public/icons/Verified tick.svg";
import Image from "next/image";
import Link from "next/link";

export const RequestArtWork = () => {
    return (
        <div className="mb-[120px] sm:mb-16">
            <div className="max-w-[1296px] px-4 sm:px-8 mx-auto">
                <TitlePage titleTop="Licenses" />
                <h3 className="mt-[-40px] sm:mt-[-20px] text-white-100 text-5xl sm:text-2xl text-center" >Build for the future IP rights.</h3>
                <div className="flex sm:block justify-center mt-[40px]">
                    <div className="mr-6 sm:mr-0 sm:mb-6">
                        <Link
                            href='#'
                            className="bg-primary-100 rounded-[100px] sm:px-3  px-6 py-2 text-lg text-white-100 font-medium flex items-center justify-center">
                            Launching on June 23
                            <Image src={iconStarted} alt="" className="ml-2 " />
                        </Link >
                    </div>
                    <div>
                        <Link href="mailto:info@theart.exchange" >
                            <button className="text-lg sm:px-3 rounded-[100px] text-white-100 flex items-center px-6 py-[7px] border-primary-100 border-[1px] sm:w-[100%] sm:justify-center">
                                Become a Partner
                                <Image src={iconPartner} alt="" className="ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="artwork-home">
                    <div>
                        <TitlePage
                            index="Request artwork"
                            titleTop='Need a specific artwork?'
                        />
                        <Link href="mailto:info@theart.exchange">
                            <div >
                                <button className="py-[7.5px] px-8 rounded-[100px] text-white-100 border-primary-100 border-[1px] text-lg sm:text-base font-medium">
                                    Submit a Request
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}