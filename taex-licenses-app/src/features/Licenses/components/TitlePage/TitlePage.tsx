import React from "react";
interface IProps {
    index?: string,
    titleTop: string,
    titleBot?: string,
    desrciptionTop?: string,
    desrciptionBot?: string
}
export const TitlePage: React.FC<IProps> = ({ index, titleTop, desrciptionTop, desrciptionBot, titleBot }) => {
    return (
        <div className="text-center">
            <div className="text-primary-100 text-base sm:text-xs font-medium ">{index}</div>
            <h2 className="text-white-100 font-medium xl:text-5xl mb:text-4xl text-6xl sm:leading-[44px] my-6 tracking-[-2%]">
                {titleTop} <br /> {titleBot}
            </h2>
            <p className="text-lg sm:text-sm text-white-60">
                {desrciptionTop} <br className="sm:hidden" /> {desrciptionBot}
            </p>
        </div>
    );
}