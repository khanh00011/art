import React from 'react';
import HeaderSection from "../HeaderSection";
import avatarMb1 from "../../../../../public/images/member-team1.png"
import avatarMb2 from "../../../../../public/images/member-team2.png"
import avatarMb3 from "../../../../../public/images/member-team3.png"
import ellipse from "../../../../../public/images/BG-1.png"
import { MemberTeam } from "../MemberTeam/MemberTeam"
import Image from "next/image"

export const About = () => {

    return (
        <div className="flex flex-col m-auto ">
            <section className="relative bg-ellipse bg-no-repeat bg-contain">
                <div className="mt-[120px] md:mt-[80px] text-center">
                    <HeaderSection
                        title={["Meet the team"]}
                        redTitle="About"
                        whiteContent="The Art Exchange is a platform, founded by financial and art world professionals with years of successful operations under their belt, and not merely a tech startup."
                    />
                </div>
                <div className='max-w-[784px] flex justify-between sm:block mx-auto mt-20 sm:mt-10'>
                    <MemberTeam
                        avatar={avatarMb1}
                        name='Inna Bazhenova'
                        position='Founder'
                    />
                    <MemberTeam
                        avatar={avatarMb2}
                        name='Andrey Belyakov'
                        position='Co-Founder'
                    />
                    <MemberTeam
                        avatar={avatarMb3}
                        name='Ali Nuraldin'
                        position='Co-Founder and CTO'
                    />
                </div>
            </section>
            <div className="licenses-home sm:hidden">
                <Image src={ellipse} alt="" className="w-full max-h-[346px] " />
            </div>

        </div>
    );
}