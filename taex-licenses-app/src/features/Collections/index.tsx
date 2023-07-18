import { Footer } from "@/components/Footer/Footer";
import { GalleryFilter } from "@/components/Gallery Filter/GalleryFilter";
import { Modal } from "@/components/Modals/Modal";
import { TopNavigation } from "@/components/TopNavigation/TopNavigation";
import { useEffect, useState } from "react";
import Thumb from "../../../public/images/Thum01.png";
import HeaderProfile from "../profile/fragments/header";
import { Product } from "./components/Product/Product";
import { Banner } from "./components/Banner/Banner";
interface CollectonsProps {
    value: string;
    authDetail?: boolean;
}

export const Collectons: React.FC<CollectonsProps> = ({
    value,
    authDetail,
}) => {
    const idAuth = authDetail && JSON.parse(value).idAuth;
    const [openModal, setOpenModal] = useState<number>(1);

    const [openRainbowKit, setopenRainbowKit] = useState<number>(0);

    const handleOpenRainbowKit = (id: number) => {
        setopenRainbowKit(id);
    };

    const handleShowLoading = () => {
        handleOpenRainbowKit(5);
        setTimeout(() => {
            handleOpenRainbowKit(6);
        }, 1000);
    };

    useEffect(() => {
        document.body.style.overflow = openRainbowKit === 0 || openRainbowKit === 999 ? "unset" : "hidden";
    }, [openRainbowKit]);

    return (
        <div
            className={`${openModal &&
                "max-h-[100vh] overflow-hidden"
                } bg-black-100`}
        >
            <div className=" mx-auto relative z-10">
                {openRainbowKit === 999 ? (
                    <TopNavigation
                        openRainbowKit={openRainbowKit}
                        handleShowLoading={handleShowLoading}
                        handleOpenRainbowKit={handleOpenRainbowKit}
                        login
                        verify
                    />
                ) : (
                    <TopNavigation
                        openRainbowKit={openRainbowKit}
                        handleShowLoading={handleShowLoading}
                        handleOpenRainbowKit={handleOpenRainbowKit}
                    />
                )}
            </div>
            {authDetail ? (
                <div className=" m-auto mb-10">
                    <HeaderProfile
                        isAuthor
                        name="Sotheby's"
                        time="Apr 2023"
                        profile="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy 
                                text ever since the 1500s, when an unknown printer took a galley of type."
                        thumb={Thumb}
                    />
                </div>
            ) : (
                <div className=" m-auto mb-10">
                    <HeaderProfile />
                </div>
            )}

            <main>
                {openModal === 1 && (
                    <div className="fixed animate-wiggle inset-0 w-full top-0 bottom-0 flex items-center justify-center z-20 bg-white-20 px-8 sm:px-4 ">
                        <Modal
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    </div>
                )}
                <div className="max-w-[1296px] px-4 mx-auto sm:px-8 pb-10">
                    <div className="">
                        <Product />
                    </div>
                </div>
            </main>
            <div className=" border-t m-auto border-white-10">
                <Footer />
            </div>
        </div>
    );
};
