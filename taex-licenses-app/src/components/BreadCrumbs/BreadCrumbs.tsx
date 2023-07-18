import Link from "next/link";
import arrowRight from "../../../public/icons/Arrow Right.svg";
import iconHome from "../../../public/icons/Home.svg";
import Image from "next/image";

interface BreadCrumbsProps {
  string: string;
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ string }) => {
  return (
    <nav aria-label="breadcrumbs">
      <ol className="breadcrumb flex items-center max-w-[1440px] px-[88px] py-[24px] sm:px-[33px] sm:oy-[16px]">
        <li className="text-sm text-white-60">
          <Link href="../collection">
            <span className="sm:hidden">Home</span>
            <Image src={iconHome} alt="" className="hidden sm:block " />
          </Link>
        </li>
        <li className="sm:mx-[16px] mx-6">
          <Image src={arrowRight} alt="" className="sm:hidden" />
          <span className="text-white-60 text-base font-medium hidden sm:block">
            /
          </span>
        </li>
        <li className="text-white-100 text-sm font-medium capitalize mr-6">
          <Link href="#">{string}</Link>
        </li>
      </ol>
    </nav>
  );
};
