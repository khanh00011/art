import React, { FormEvent, useState } from "react"

interface IProps {
    valuePriceRange(priceMin: string, priceMax: string): void,
}
export const PriceRange: React.FC<IProps> = ({ valuePriceRange }) => {
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        valuePriceRange(priceMin, priceMax);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex text-white-40 uppercase bg-white-20 px-4 py-2 rounded-[100px] mb-2">
                <div className="w-[40px]">Min</div>
                <div className="w-full">
                    <input
                        placeholder=""
                        value={priceMin}
                        onChange={(e) => setPriceMin(e.target.value)}
                        type="number"
                        className="w-full appearance-none focus:outline-none bg-transparent text-white-100 pl-2"
                    />
                </div>
                <div className="w-[40px]" >ETH</div>
            </div>
            <div className="flex text-white-40 uppercase bg-white-20 px-4 py-2 rounded-[100px] mb-2">
                <div className="w-[40px]">Max</div>
                <div className="w-full">
                    <input
                        placeholder=""
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}
                        type="number"
                        className="w-full appearance-none focus:outline-none bg-transparent text-white-100 pl-2"
                    />
                </div>
                <div className="w-[40px]" >ETH</div>
            </div>
            <input type="submit" hidden />
        </form>
    )
}