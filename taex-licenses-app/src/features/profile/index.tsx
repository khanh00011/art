import { TopNavigation } from "../../components/TopNavigation/TopNavigation";
import HeaderProfile from "./fragments/header";
import { Footer } from "@/components/Footer/Footer";
import Body from "./fragments/body";
import CheckoutModals from "@/components/CheckoutModals";
import { useState } from "react";
import { EditProfile } from "./fragments/editProfile/EditProfile";
import ImageProduct from "../../../public/images/image02.png";
import CheckoutModalsProfile from "@/components/CheckoutModalProfile";
interface ProfileProps {
  value: string;
}

const Profile: React.FC<ProfileProps> = ({ value }) => {
  const idAccount = JSON.parse(value).idAccount;
  const [openCheckOutModal, setOpenCheckOutModal] = useState<boolean>(false);
  const [openCheckOutModalProfile, setOpenCheckOutModalProfile] =
    useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const handleOpenCheckOutModal = () => {
    setOpenCheckOutModal(false);
    setOpenCheckOutModalProfile(false);
  };
  const onClickProduct = () => {
    setOpenCheckOutModal(true);
  };
  const onClickProductProfile = () => {
    setOpenCheckOutModalProfile(true);
  };
  const handleEditProfile = () => {
    setOpenEditModal(true);
  };
  const handleCloseProfile = () => {
    setOpenEditModal(false);
  };
  return (
    <div className="w-full bg-black-100 ">
      <div
        className={`fixed inset-0 w-full overflow-hidden h-full lg:p-2 bg-white-20 flex items-center fade-custom-in ${
          openEditModal ? "visible opacity-100" : "invisible opacity-0 "
        } justify-center z-40`}
      >
        <div
          className={`w-[755px] lg:w-full lg:max-h-[100%] lg:overflow-auto ${
            openEditModal ? "light-box-transform" : "light-box-transform-hidden"
          }`}
        >
          <EditProfile handleClose={handleCloseProfile} />
        </div>
      </div>
      <div
        className={`fixed inset-0 w-full overflow-hidden h-full m-auto lg:p-2 bg-white-20 flex items-center fade-custom-in ${
          openCheckOutModal || openCheckOutModalProfile
            ? "visible opacity-100"
            : "invisible opacity-0 "
        } justify-center z-40`}
      >
        <div
          className={`w-[480px] sm:w-full lg:max-h-[100%] lg:overflow-auto ${
            openCheckOutModal || openCheckOutModalProfile
              ? "light-box-transform"
              : "light-box-transform-hidden"
          }`}
        >
          {openCheckOutModal && (
            <CheckoutModals
              name="the Notre-Dame, Floods (1910)"
              author="Albert Marquet "
              discount={0}
              price={0}
              totalPay={0}
              time={""}
              img={ImageProduct}
              handleOpenCheckOutModal={handleOpenCheckOutModal}
            />
          )}
          {openCheckOutModalProfile && (
            <CheckoutModalsProfile
              name="the Notre-Dame, Floods (1910)"
              author="Albert Marquet "
              discount={0}
              price={0}
              totalPay={0}
              time={""}
              img={ImageProduct}
              handleOpenCheckOutModal={handleOpenCheckOutModal}
            />
          )}
        </div>
      </div>
      <div className="relative z-10 ">
        <TopNavigation verify login />
      </div>
      <div className="w-full m-auto ">
        <HeaderProfile
          state
          name={"Ekaterina Ippolitova"}
          time={"Apr 2023"}
          profile={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
          }
          handleEditProfile={handleEditProfile}
          isAuthor
        />
        <div className=" max-w-[1440px] m-auto border-t border-white-10 pt-10">
          <div className="w-[100%] px-[88px] xl:px-[78px] lg:px-[58px] md:px-[32px] m-auto ">
            <Body
              onClickProduct={onClickProduct}
              onClickProductProfile={onClickProductProfile}
            />
          </div>
        </div>
      </div>
      <div className="m-auto border-white-10 border-t">
        <Footer />
      </div>
    </div>
  );
};
export default Profile;
