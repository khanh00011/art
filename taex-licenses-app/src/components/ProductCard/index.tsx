import Image from "next/image";
import { useEffect, useState } from "react";
import ImageI from '../../../public/images/1.png'

interface ProductCardType {
  img?: any;
  product: any;
  author: string;
  time?: number;
  countdown?: number;
  price?: number;
  onClickProduct?: () => void;
  available?: boolean;
  onClickProductProfile?: () => void;
}
const ProductCard = (props: ProductCardType) => {
  const { img, product, author, time, countdown, price, onClickProduct, available, onClickProductProfile } = props;
  const [remainingSeconds, setRemainingSeconds] = useState(countdown);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingSeconds) {
        setRemainingSeconds(remainingSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [remainingSeconds]);
  let days, hours, minutes, seconds
  if (remainingSeconds) {
    days = Math.floor(remainingSeconds / 86400);
    hours = Math.floor((remainingSeconds - days * 86400) / 3600);
    minutes = Math.floor((remainingSeconds - days * 86400 - hours * 3600) / 60);
    seconds = remainingSeconds % 60;
  }
  return (
    <div className="flex min-w-[292px]  flex-col gap-4 p-4 bg-white-10 text-white-100 rounded-2xl justify-center ">
      <div className="h-[205px]">
        <Image
          src={img ? img : ImageI}
          alt="Image"
          className="w-full h-full rounded-[8px] object-cover"
        />
      </div>
      <div className="product-info flex flex-col gap-2">
        <p className="product-name font-SFProMedium product-card-name" dangerouslySetInnerHTML={{ __html: product }} />
        <p className="product-author text-xl font-normal text-white-60">
          {author}
        </p>
      </div>
      <div className="product-bottom">
        {price && time && (
          <div className="product-bottom-item flex gap-[8px]">
            <button className="product-bottom-name px-[12px] py-[4px] rounded-[100px] bg-white-10">
              {price} ETH
            </button>
            <button className="product-bottom-time text-white-60 font-normal">
              {time} days
            </button>
          </div>
        )}
        {countdown && (
          <div className="product-bottom-item flex flex-col gap-4">
            <button className="px-[12px] py-[4px] flex gap-8px w-[100%] justify-around font-normal font-SFProMedium text-xl bg-white-10 rounded-[100px] ">
              <span>{days}d</span> :<span>{hours}h</span> :<span>{minutes}m</span> :
              <span>{seconds}s</span>
            </button>
            <button className="w-[100%] bg-primary-100 font-SFProMedium font-normal py-[8px] rounded-[100px] text-base" onClick={onClickProductProfile} >Extend period</button>
          </div>
        )}
        {!countdown && !price && !time && !available && (
          <div className="product-bottom-item flex flex-col gap-4">
            <button className="w-[100%] bg-white-10 font-SFProMedium font-normal py-[4px] rounded-[100px] text-xl text-white-40">Expired</button>
            <button className="w-[100%] bg-primary-100 font-SFProMedium font-normal py-[8px] rounded-[100px] text-base" onClick={onClickProduct}>Rent again</button>
          </div>
        )}
        {
          available && (
            <div className="product-bottom-item flex flex-col gap-4">
              <button className="w-[100%] product-bottom-name font-medium font-SFProMedium px-[12px] py-[4px] rounded-[100px] bg-white-10 lauching-text">
                Launching on June 23
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
};
export default ProductCard;