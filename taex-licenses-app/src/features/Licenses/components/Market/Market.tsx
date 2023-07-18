import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import ArrowLeft from "../../../../../public/icons/Arrow Left.svg";
import ArrowRight from "../../../../../public/icons/Arrow Right-1.svg";
import image1 from "../../../../../public/images/image01.png";
import image2 from "../../../../../public/images/image02.png";
import image3 from "../../../../../public/images/image03.png";
import image4 from "../../../../../public/images/image04.png";
import image5 from "../../../../../public/images/image05.png";
import * as React from "react";

export const Market = () => {
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
  const items = [
    <div
      className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
      key="5"
    >
      <ProductCard
        product={"<span>L'Arbre rose </br>(1944)</span>"}
        author={"Albert Marquet"}
        available
        img={image5}
      />
    </div>,
    <div
      className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
      key="1"
    >
      <ProductCard
        product={"<span>Le palmier </br>(1921)<span>"}
        author={"Albert Marquet"}
        available
        img={image2}
      />
    </div>,
    <div
      className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
      key="2"
    >
      <ProductCard
        product={"<span> Le port de Honfleur (1911) </span>"}
        author={"Albert Marquet"}
        available
        img={image1}
      />
    </div>,
    <div
      className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
      key="3"
    >
      <ProductCard
        product={"<span>Notre-Dame-</br>Inondations-Circa (1910)<span>"}
        author={"Albert Marquet"}
        available
        img={image3}
      />
    </div>,
    <div
      className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
      key="4"
    >
      <ProductCard
        product={"Сontre-jour-Alger (1924)"}
        author={"Albert Marquet"}
        available
        img={image4}
      />
    </div>,
    <div
      className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
      key="5"
    >
      <ProductCard
        product={"<span>L'Arbre rose </br>(1944)</br>"}
        author={"Albert Marquet"}
        available
        img={image5}
      />
    </div>,
    <div
    className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
    key="1"
  >
    <ProductCard
      product={"<span>Le palmier </br>(1921)<span>"}
      author={"Albert Marquet"}
      available
      img={image2}
    />
  </div>,
  <div
    className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
    key="2"
  >
    <ProductCard
      product={"<span> Le port de Honfleur (1911) </span>"}
      author={"Albert Marquet"}
      available
      img={image1}
    />
  </div>,
  <div
    className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
    key="3"
  >
    <ProductCard
      product={"<span>Notre-Dame-</br>Inondations-Circa (1910)<span>"}
      author={"Albert Marquet"}
      available
      img={image3}
    />
  </div>,
  <div
    className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
    key="4"
  >
    <ProductCard
      product={"Сontre-jour-Alger (1924)"}
      author={"Albert Marquet"}
      available
      img={image4}
    />
  </div>,
  <div
    className={`item  ${open ? " px-4 w-[324px]" : "px-2 w-[308px]"}`}
    key="5"
  >
    <ProductCard
      product={"<span>L'Arbre rose </br>(1944)</br>"}
      author={"Albert Marquet"}
      available
      img={image5}
    />
  </div>
  ];
  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    1023: { items: 3 },
    1279: { items: 4 },
  };

  const renderPrevButton = ({}) => {
    return (
      <span className="cursor-pointer absolute left-[4%] text-white-60 bg-white-10 px-1 hover:bg-white-20 rounded-[100px] py-1">
        <Image
          src={ArrowLeft}
          alt="My Image"
          className="svg-color-filter"
        ></Image>
      </span>
    );
  };
  const renderNextButton = ({}) => {
    return (
      <span className="cursor-pointer absolute right-[4%] text-white-60 bg-white-10 hover:bg-white-20 px-1 rounded-[100px] py-1">
        <Image
          src={ArrowRight}
          alt="My Image"
          className="svg-color-filter"
        ></Image>
      </span>
    );
  };
  return (
    <div>
      {open ? (
        <AliceCarousel
          items={items}
          activeIndex={1}
          paddingLeft={60}
          paddingRight={50}
          keyboardNavigation
          disableDotsControls
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          responsive={responsive}
          controlsStrategy="alternate"
          autoWidth
        />
      ) : (
        <AliceCarousel
          items={items}
          activeIndex={0}
          paddingLeft={20}
          paddingRight={50}
          keyboardNavigation
          disableDotsControls
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          responsive={responsive}
          controlsStrategy="alternate"
          autoWidth
        />
      )}
      <div className="text-center pt-20 md:pt-10">
        <Button
          size={"Small"}
          state={"Default"}
          style={"Outline"}
          text="Browse all"
        ></Button>
      </div>
    </div>
  );
};
