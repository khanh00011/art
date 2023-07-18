/* eslint-disable react/no-unescaped-entities */
import Verified from "../../../public/verified.svg";
import Illustration from "../../../public/Illustration.svg";
import Close from "../../../public/icons/Close.svg";
import Image from "next/image";
import { BecomeAuthForm } from "../BecomeAuthForm/BecomeAuthForm";
import { Loading } from "../Loading/Loading";


interface ModalProps {
  verified?: boolean;
  verifyWellet?: boolean;
  illustration?: boolean;
  auth?: boolean;
  loading?: boolean;
  content?: any;
  openModal: any;
  setOpenModal: any;
  textLoading?: string
}

export const Modal: React.FC<ModalProps> = ({
  verified,
  verifyWellet,
  illustration,
  auth,
  loading,
  openModal,
  setOpenModal,
  textLoading
}) => {

  const handleClose = () => {
    setOpenModal(0);
  };
  return (
    // absolute inset-0 w-full h-screen flex items-center justify-center z-20 bg-white-20 "class when user"
    <div className="text-white-100">
      <div
        className={`${!loading && "w-[755px] sm:w-full"} bg-black-100 rounded-3xl  p-12 sm:px-3 ${!auth && "text-center"
          }`}
      >
        {!loading && (
          <div
            className={`pb-6 flex justify-center flex-col items-center border-b border-white-20  ${auth && "relative"
              }`}
          >
            {verified && <Image className="pb-4" src={Verified} alt="logo" />}
            {illustration && (
              <Image className="pb-4" src={Illustration} alt="logo" />
            )}
            <h1 className="text-4xl">
              {auth
                ? "Become a Partner"
                : verifyWellet
                  ? "Verify your identiny"
                  : verified
                    ? "Account verified"
                    : illustration
                      ? "Partner application submitted"
                      : "We respect your privacy"}
            </h1>
            {auth && (
              <button
                onClick={handleClose}
                className="absolute top-0 right-0 w-10 h-10 border-primary-100 rounded-3xl border flex items-center justify-center"
              >
                <Image className="" src={Close} alt="close" />
              </button>
            )}
          </div>
        )}
        {!loading && (
          <div className="pb-6 pt-6">
            {auth ? (
              <p className="text-center">
                Authors can join The Art Exchange by invitation or by applying
                using the form below.
              </p>
            ) : verifyWellet ? (
              <p className="text-center">
                Before using the theart.exchange you are required to verify
                identiny
              </p>
            ) : verified ? (
              <p className="text-center">
                Your wallet is now whitelisted on The Art Exchange
              </p>
            ) : illustration ? (
              <p className="text-center px-12">
                Thank you for applying to become a Partner. Our team will review
                your application and reach out to you in a few days.
              </p>
            ) : (
              <p className="text-center">
                We use cookies and other tracking technologies to provide and
                continually improve our services, and to display advertisements
                according to users' interests. By clicking "Accept all" you
                consent to the use of all essential and non-essential cookies
                and technologies. By clicking "
                <a href="#" className="text-primary-100">
                  Manage preferences or reject
                </a>
                ", you can choose your preferences within all non-essential
                categories or opt out of all non-essential cookies and
                technologies.
              </p>
            )}
          </div>
        )}
        {auth && <BecomeAuthForm />}
        {loading && textLoading && <Loading text={textLoading} />}
        {!loading && (
          <div className={(verified || illustration) ? "" : `pb-6`}>
            <button
              onClick={handleClose}
              className="py-2 bg-primary-100 w-full rounded-3xl">
              {auth
                ? "Submit Application"
                : verifyWellet
                  ? "Start verification"
                  : (verified || illustration)
                    ? "Continue"
                    : "Accept all"}
            </button>
          </div>
        )}
        {!auth &&
          !loading &&
          (verifyWellet ? (
            <p className="text-white-60">
              By continuing, you are agreeing to SumSub's{" "}
              <a className="text-primary-100" href="#">
                terms of use
              </a>
              .
            </p>
          ) : (verified || illustration) ? (
            ""
          ) : (
            <p className="text-white-60">
              Terms and Conditions | Privacy Policy
            </p>
          ))}
      </div>
    </div>
  );
};
