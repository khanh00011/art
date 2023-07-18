import Button from "../Button";
interface PriceProps {
  handleOpenCheckOutModal: () => void;
}

export const Price: React.FC<PriceProps> = ({ handleOpenCheckOutModal }) => {
  return (
    <div className="w-full text-white-100 bg-white-20 p-6 rounded-2xl">
      <p className="mb-2 lg:text-sm">Rental price</p>
      <div>
        <div className="mb-4">
          <span className="bg-white-10 rounded-3xl px-4 py-1 mr-2.5 text-3xl font-bold lg:text-2xl">
            0.1 ETH
          </span>
          <span className="text-white-40 lg:text-sm">30 days</span>
        </div>
        <div className="w-full rounded-3xl" onClick={handleOpenCheckOutModal}>
          {/* <Button
            size={"Normal"}
            state={"Default"}
            style={"Fill"}
            text="Rent now"
          ></Button> */}
          <button className="w-full bg-primary-100 rounded-3xl hover:bg-primary-80 active:bg-primary-60">
            <p className="py-2">Rent now</p>
          </button>
        </div>
      </div>
    </div>
  );
};
