import * as React from "react";
import BasicDropdown from "@/components/BasicDropdown";
import ProductList from "../productList";
import Table from "../table";
const Body = ({onClickProduct, onClickProductProfile} : any) => {
  const [stateCollection, setStateCollection] = React.useState(true);
  return (
    <div className="flex flex-col gap-10">
      {stateCollection ? (
        <div className="flex gap-6">
          <p className="profile-title-text text-white-100 text-4xl md:text-3xl font-bold font-SFProBold cursor-pointer ">
            Collection
          </p>
          <p
            onClick={() => setStateCollection(false)}
            className=" profile-title-text text-white-40 text-4xl md:text-3xl font-bold font-SFProBold cursor-pointer"
          >
            Transactions
          </p>
        </div>
      ) : (
        <div className="flex gap-6">
          <p
            onClick={() => setStateCollection(true)}
            className="profile-title-text text-white-40 text-4xl md:text-3xl font-bold font-SFProBold cursor-pointer"
          >
            Collection
          </p>
          <p className="profile-title-text text-white-100 text-4xl md:text-3xl font-bold font-SFProBold cursor-pointer">
            Transactions
          </p>
        </div>
      )}
      <div className="flex items-center justify-between">
        <p className="text-white-60 text-base font-medium opacity-70">
          {stateCollection ? "8 results" : "8 Transactions"}
        </p>
        <BasicDropdown
          setWidth={150}
          options={[]}
          state={"Filled"}
          placeholder={"Most recent"}
        />
      </div>
      <div className="overflow-hidden">
        {
        <div className={`${stateCollection ? 'profile-rl pb-10' : 'profile-rl-hidden'}`}>
          {stateCollection && <ProductList onClickProduct = {onClickProduct} onClickProductProfile = {onClickProductProfile} />}
        </div>
        }
        {
        <div className={!stateCollection ? 'profile-lr' : 'profile-lr-hidden'}>
          {!stateCollection && <Table />}
        </div>
        }
      </div>
    </div>
  );
};
export default Body;
