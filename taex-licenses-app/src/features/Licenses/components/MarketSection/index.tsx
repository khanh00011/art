import HeaderSection from "../HeaderSection";

export const MarketSection = () => {
  return (
    <div className="pt-[120px] md:pt-[80px]">
      <div className="pb-10 text-center relative">
        <HeaderSection
          title={["Piece of art license", "in your hands"]}
          whiteContent="Choose a artwork for a exhibition in the metaverse, increasing brand reach, or for content as a digital collectible to Instagram."
        />
      </div>
    </div>
  );
}