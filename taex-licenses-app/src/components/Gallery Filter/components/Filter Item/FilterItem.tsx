import React, { useState } from "react"
import { PriceRange } from "../PriceRange";
import BasicDropdown from "../../../BasicDropdown";

interface IProps {
    isAppliedfilter?: boolean,
    isPriceRange?: boolean,
    isPresentor?: boolean,
    isArtist?: boolean,
}
export const FilterItem: React.FC<IProps> = ({ isAppliedfilter, isPresentor, isPriceRange, isArtist }) => {
    const [priceValue, setPriceValue] = useState({
        min: '',
        max: ''
    })
    const valuePriceRange = (priceMin: string, priceMax: string): void => {
        setPriceValue({
            min: priceMin,
            max: priceMax
        });
    }

    return (
        <div className="mb-6">
            <div className="label flex justify-between mb-[16px]">
                <h3 className="text-white-80 text-base font-medium">
                    {
                        isAppliedfilter ? 'Applied filters'
                            :
                            isPriceRange ? 'Rent price range'
                                :
                                isPresentor ? 'Presentor'
                                    :
                                    isArtist ? 'Artist' : ''
                    }

                </h3>
                {isAppliedfilter ? <button className="text-primary-100 text-sm font-medium">Clear All</button> : ''}
            </div>
            {
                isPriceRange ? <PriceRange valuePriceRange={valuePriceRange} />
                    :
                    isPresentor ? <BasicDropdown options={[{ value: '1', label: 'a' }, { value: '2', label: 'b' }]} state={"Default"} placeholder={"Select presentor"} filter />
                        :
                        isArtist ? <BasicDropdown options={[{ value: '1', label: 'aa' }]} state={"Default"} placeholder={"Select artist"} filter />
                            : ''
            }

        </div>
    )
}