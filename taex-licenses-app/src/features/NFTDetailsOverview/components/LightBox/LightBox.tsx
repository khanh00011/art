import Image, { StaticImageData } from "next/image";
import Image1 from "../../../../../public/images/image_details.png";
import Close from "../../../../../public/icons/Close-1.svg";
import Add from "../../../../../public/icons/Add.svg";
import Minus from "../../../../../public/icons/Minus.svg";
import ImageList1 from "../../../../../public/images/imgList1.png";
import ImageList2 from "../../../../../public/images/imgList2.png";
import ImageList3 from "../../../../../public/images/imgList3.png";
import ImageList4 from "../../../../../public/images/imgList4.png";
import { Dispatch, useEffect, useState } from "react";

interface LightBox {
  nameProduct: string;
  nameArtis: string;
  openLightBox?: boolean;
  sizeImage?: { width: number; height: number };
  setSizeImage: Dispatch<any>;
  handleShowLightBox: () => void;
}

export const LightBox: React.FC<LightBox> = ({
  nameProduct,
  nameArtis,
  sizeImage,
  setSizeImage,
  handleShowLightBox,
}) => {
  const [imgDefault, setImgDefault] = useState<StaticImageData>(Image1);

  const imgLists = [ImageList1, ImageList2, ImageList3, ImageList4];
  const handleChangeImage = (value: StaticImageData) => {
    setImgDefault(value);
  };

  const handleZoomInImage = () => {
    setSizeImage((prev: { width: number; height: number }) => {
      prev.width = prev.width + 20;
      prev.height = prev.height + 20;
      return { ...prev };
    });
  };

  const handleZoomOutImage = () => {
    setSizeImage((prev: { width: number; height: number }) => {
      prev.width = prev.width - 20;
      prev.height = prev.height - 20;
      return { ...prev };
    });
  };

  let ImgStyle ={};

  if (typeof window !== "undefined" && window.innerWidth > 1281) {
    ImgStyle = { width: sizeImage?.width, height: sizeImage?.height };
  }

  return (
    <div className="w-[1440px] px-88 pt-10 pb-[107px] lg:px-8 ">
      <div className="pb-4 relative">
        <h1 className="text-2xl text-white-100 lg:text-xl">{nameProduct}</h1>
        <div
          className={`flex flex-col justify-evenly items-center absolute top-0 lg:top-6 right-0 w-12 lg:w-6 bg-white-100 rounded-[16px] lg:rounded-[4px]`}
        >
          <button
            className="h-12 lg:h-6 flex justify-center items-center"
            onClick={handleShowLightBox}
          >
            <Image className="w-9 lg:w-6" src={Close} alt="Close" />
          </button>
          <button
            onClick={handleZoomInImage}
            className="h-12 lg:h-6 flex justify-center items-center"
          >
            <Image className="w-9 lg:w-6" src={Add} alt="Close" />
          </button>
          <button
            onClick={handleZoomOutImage}
            className="h-12 lg:h-6 flex justify-center items-center"
          >
            <Image className="w-9 lg:w-6" src={Minus} alt="Close" />
          </button>
        </div>
      </div>

      <p className="text-xl text-white-40 pb-10 lg:text-base">{nameArtis}</p>
      <div className="flex justify-center items-center flex-col">
        <div className="">
          <Image
            className={`xl:w-full ${imgDefault && "fade-custom"}`}
            style={ImgStyle}
            src={imgDefault}
            alt="Image details"
          />
        </div>
        <ul className="flex pt-[107px] lg:pt-10 list-image-overview">
          {imgLists.map((img, index) => (
            <li
              key={index}
              onClick={() => handleChangeImage(img)}
              className="cursor-pointer"
            >
              <Image
                className="w-[120px] h-[92px] lg:w-[120px] lg:h-[80px]"
                src={img}
                alt="Image details"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
