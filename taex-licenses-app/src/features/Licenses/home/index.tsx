import * as React from "react";
import HeaderSection from "../components/HeaderSection";
import Image from "next/image";
import Image1 from '../../../../public/images/1png.png';
import Image2 from '../../../../public/images/2png.png';
import Image3 from '../../../../public/images/3png.png';
import Image4 from '../../../../public/images/4png.png';
import Image5 from '../../../../public/images/5png.png';
import Image6 from '../../../../public/images/6png.png';
import Image7 from '../../../../public/images/7png.png';
import Image8 from '../../../../public/images/8png.png';
import Image9 from '../../../../public/images/9png.png';
import Image10 from '../../../../public/images/10png.png';
import License from '../../../../public/images/License.png';
import QR from '../../../../public/images/QR.png'

const Home = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handleOpen = (): void => {
      if (window.innerWidth >= 1023) {
        setOpen(true);
      } else if (window.innerWidth < 1023) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleOpen);

    return (): void => {
      window.removeEventListener('resize', handleOpen);
    };
  }, []);

  React.useEffect(() => {
    if (window.innerWidth >= 1023) {
      setOpen(true);
    }
  }, []);
  const URL = '/licenses/video.mp4'
  return (
    <div className="flex flex-col m-auto ">
      <section className="relative xl:mt-[70px] mt-[128px] md:mt-[80px]">
        <HeaderSection
          title={["Licensing.", "Next-generation rent."]}
          redTitle="What's included"
        />
        <div className="sm:mt-[30px]  mt-[68px] ">
          <div className="w-[100%] bg-black flex sm:flex-col rounded-[32px] sm:rounded-[16px]">
            <div className="relative w-[560px] sm:w-[100%] xl:w-[40%] left-0 bottom-0 sm:order-1">
              <Image
                src={License}
                alt="Image"
                width={1070}
                height={600}
                className="w-[100%] overflow-hidden sm:rounded-br-[16px] sm:rounded-bl-[16px] rounded-bl-[32px] "
              />
              <div className="absolute w-[410px] xl:w-[90%] left-[180px] xl:left-[14%] md:left-[10%] bottom-0">
                <Image
                  src={QR}
                  alt="Image"
                  width={500}
                  height={500}
                  className="w-[100%] sm:rounded-br-[16px]"
                />
              </div>
            </div>
            <div className="flex-1 m-auto">
              <div className="flex flex-col gap-[24px] xl:gap-[18px] lg:gap-[14px] md:gap-[5px] sm:gap-[0px] sm:text-center md:px-[24px] md:pt-[40px]">
                <h3 className="text-white-100 text-5xl xl:text-4xl md:text-3xl font-SFroMedium tracking-[2%]">
                  Get Licenses
                </h3>
                <p className="text-white-60 text-lg xl:text-sm">
                  Each artwork has its own unique digital license certificate of
                  authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-ellipse bg-no-repeat bg-contain">
        <div className="mt-[120px] md:mt-[80px] text-center">
          <HeaderSection
            title={["More apps.", "More decentralised."]}
            redTitle="Integrations"
            whiteContent="Enhance your The Art Exchange experience with a wide variety of add-ons and integrations. From posting to powerful pro projects for brands."
          />
        </div>
        {!open ? (
          <div className="branch-flex-1280 flex lg:flex-wrap justify-center items-center gap-[60px] xl:gap-[55px] lg:gap-[50px] md:gap-[40px] px-[128px] xl:px-[80px] lg:px-[60px] md:px-[0px] mt-20 md:mt-6">
            <div>
              <Image
                src={Image1}
                alt="Image"
                width={500}
                height={32}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={Image2}
                alt="Image"
                width={500}
                height={32}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={Image3}
                alt="Image"
                width={500}
                height={32}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={Image4}
                alt="Image"
                width={500}
                height={32}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={Image5}
                alt="Image"
                width={500}
                height={32}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={Image6}
                alt="Image"
                width={500}
                height={32}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={Image7}
                alt="Image"
                width={500}
                height={32}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={Image8}
                alt="Image"
                width={500}
                height={32}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={Image9}
                alt="Image"
                width={500}
                height={32}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={Image10}
                alt="Image"
                width={500}
                height={500}
                className="h-[32px] w-auto md:h-[24px]"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="flex branch-flex-1280 flex-wrap justify-center items-center gap-[60px] xl:gap-[55px] lg:gap-[50px] md:gap-[40px] px-[128px] xl:px-[80px] lg:px-[60px] md:px-[0px] mt-20">
              <div>
                <Image
                  src={Image1}
                  alt="Image"
                  width={500}
                  height={32}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
              <div>
                <Image
                  src={Image2}
                  alt="Image"
                  width={500}
                  height={32}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
              <div>
                <Image
                  src={Image3}
                  alt="Image"
                  width={500}
                  height={32}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
              <div>
                <Image
                  src={Image4}
                  alt="Image"
                  width={500}
                  height={32}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
              <div>
                <Image
                  src={Image5}
                  alt="Image"
                  width={500}
                  height={32}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
            </div>
            <div className="flex branch-flex-1280 flex-wrap justify-center items-center gap-[60px] xl:gap-[55px] lg:gap-[50px] md:gap-[40px] px-[280px] xl:px-[200px] lg:px-[160px] md:px-[0px] mt-10">
              <div>
                <Image
                  src={Image6}
                  alt="Image"
                  width={500}
                  height={32}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
              <div>
                <Image
                  src={Image7}
                  alt="Image"
                  width={500}
                  height={32}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
              <div>
                <Image
                  src={Image8}
                  alt="Image"
                  width={500}
                  height={32}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
              <div>
                <Image
                  src={Image9}
                  alt="Image"
                  width={500}
                  height={32}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
              <div>
                <Image
                  src={Image10}
                  alt="Image"
                  width={500}
                  height={500}
                  className="h-[32px] w-auto md:h-[24px]"
                />
              </div>
            </div>
          </div>
        )}
      </section>
      <section className=" mt-[120px] md:mt-[80px]">
        <video autoPlay muted loop style={{ width: '100%', height: 'auto', borderRadius: !open ? '16px' : '32px'}}>
          <source src = {URL} />
        </video>
      </section>
    </div>
  );
};
export default Home;