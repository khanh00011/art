import ProductCard from "@/components/ProductCard";
import image1 from "../../../../../public/images/image01.png";
import image2 from "../../../../../public/images/image02.png";
import image3 from "../../../../../public/images/image03.png";
import image4 from "../../../../../public/images/image04.png";
import CheckoutModals from "@/components/CheckoutModals";

interface ProductListProps {
  product: string;
  author: string;
  countdown?: number;
  img: any;
  onClickProduct?: () => void;
}

const ProductList = ({onClickProduct, onClickProductProfile} : any) => {
  const data: ProductListProps[] = [
    {
      product: "Notre-Dame, Floods (1910)",
      author: "Albert Marquet",
      countdown: 46789,
      img: image1,
    },
    {
      product: "Notre-Dame, Floods (1910)",
      author: "Albert Marquet",
      countdown: 46789,
      img: image2,
    },
    {
      product: "Notre-Dame, Floods (1910)",
      author: "Albert Marquet",
      img: image3,
    },
    {
      product: "Notre-Dame, Floods (1910)",
      author: "Albert Marquet",
      img: image4,
    },
    {
      product: "Notre-Dame, Floods (1910)",
      author: "Albert Marquet",
      img: image1,
    },
    {
      product: "Notre-Dame, Floods (1910)",
      author: "Albert Marquet",
      img: image2,
    },
    {
      product: "Notre-Dame, Floods (1910)",
      author: "Albert Marquet",
      img: image3,
    },
    {
      product: "Notre-Dame, Floods (1910)",
      author: "Albert Marquet",
      img: image4,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-x-[32px] gap-y-[24px] xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
      {data.map((item: ProductListProps, index: number) =>
        item.countdown ? (
          <div className="grid-span-1" key={index}>
            <ProductCard
              product={item.product}
              author={item.author}
              img={item.img}
              countdown={item.countdown}
              onClickProductProfile = {onClickProductProfile}
            />
          </div>
        ) : (
          <div className="grid-span-1" key={index}>
            <ProductCard
              product={item.product}
              author={item.author}
              img={item.img}
              onClickProduct ={onClickProduct}
            />
          </div>
        )
      )}
    </div>
  );
};
export default ProductList;
