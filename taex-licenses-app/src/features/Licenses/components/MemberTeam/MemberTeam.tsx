import Image, { StaticImageData } from "next/image"
import React from "react"

interface IProps {
    avatar: StaticImageData,
    name: string,
    position: string
}
export const MemberTeam: React.FC<IProps> = ({ avatar, name, position }) => {
    return (
        <div className="max-w-[240px] text-center basis-60 mx-auto sm:mb-8">
            <Image src={avatar} alt="" className="mx-auto md:w-[120px] md:h-[120px]" />
            <h3 className="text-xl leading-[30px] font-medium text-white-100 mt-2 mb-1">{name}</h3>
            <p className="text-base text-white-60">{position}</p>
        </div>
    )
} 