import Image from "next/image";
import Search from '../../../public/icons/Search.svg'
interface ButtonType {
  size: 'Large' | 'Normal' | 'Small';
  state: 'Default' | 'Disabled';
  style: 'Outline' | 'Fill';
  icon?: string;
  text?: string;
  iconSvg?: any;
  width?: boolean;
  handleClick?: () =>void;
}

const Button = (props: ButtonType) => {
  const { size, state, style, icon, text, iconSvg, width, handleClick } = props;
  const handleClass = () => {
    const classButton: Array<string> = [];
    switch (style) {
      case "Fill": {
        switch (state) {
          case "Default": {
            classButton.push("bg-primary-100 text-white-100 hover:bg-primary-80 active:bg-primary-60");
            switch (size) {
              case "Small": {
                classButton.push("text-sm");
                break;
              }
              case "Normal": {
                classButton.push("text-base");
                break;
              }
              case "Large": {
                classButton.push("text-lg");
                break;
              }
            }
            break;
          }
          case "Disabled": {
            classButton.push("bg-primary-20 text-white-60");
            switch (size) {
              case "Small": {
                classButton.push("text-sm ");
                break;
              }
              case "Normal": {
                classButton.push("text-base ");
                break;
              }
              case "Large": {
                classButton.push("text-lg ");
                break;
              }
            }
            break;
          }
        }
        break;
      }
      case "Outline": {
        classButton.push("border border-solid");
        switch (state) {
          case "Default": {
            classButton.push("bg-black-100 border-primary-100 hover:bg-white-10 active:bg-white-20");
            switch (size) {
              case "Small": {
                classButton.push("text-sm");
                break;
              }
              case "Normal": {
                classButton.push("text-base");
                break;
              }
              case "Large": {
                classButton.push("text-lg");
                break;
              }
            }
            break;
          }
          case "Disabled": {
            classButton.push("bg-black-20 border-primary-20 text-white-60");
            switch (size) {
              case "Small": {
                classButton.push("text-sm ");
                break;
              }
              case "Normal": {
                classButton.push("text-base ");
                break;
              }
              case "Large": {
                classButton.push("text-lg ");
                break;
              }
            }
            break;
          }
        }
        break;
      }
    }
    return classButton.join(" ");
  };
  const btnClass = handleClass();
  return (
    <>
      {iconSvg && !text && (
        <button
          className={`rounded-[100px] inline-flex items-center p-2.5 text-white-100 font-SFProMedium ${btnClass} ${width ? 'w-full' : ''}`}
          onClick={handleClick}
        >
          {
            size === "Small" && <Image src={iconSvg} className={`svg-color-filter ${state === "Disabled" ? 'opacity-60' : ''} `} alt="My Image" width={16} height={16} />
          }
          {
            size === "Normal" && <Image src={iconSvg} className={`svg-color-filter ${state === "Disabled" ? 'opacity-60' : ''} ${width ? 'm-auto' : ''} `} alt="My Image" width={20} height={20} />
          }
          {
            size === "Large" && <Image src={iconSvg} className={`svg-color-filter ${state === "Disabled" ? 'opacity-60' : ''} ${width ? 'm-auto' : ''} `} alt="My Image" width={24} height={24} />
          }
        </button>
      )}
      {iconSvg && text && icon === "Icon Left" && (
        <button
          className={`rounded-[100px] inline-flex items-center py-2 px-8 text-white-100 font-SFProMedium ${btnClass} ${width ? 'w-full' : ''} `}
          onClick={handleClick}
        >
          {
            size === "Small" && <Image src={Search} className={`mr-2 svg-color-filter ${state === "Disabled" ? 'opacity-60' : ''} ${width ? 'm-auto' : ''} `} alt="My Image" width={16} height={16} />
          }
          {
            size === "Normal" && <Image src={iconSvg} className={`mr-3 svg-color-filter ${state === "Disabled" ? 'opacity-60' : ''} ${width ? 'm-auto' : ''} `} alt="My Image" width={20} height={20} />
          }
          {
            size === "Large" && <Image src={iconSvg} className={`mr-3 svg-color-filter ${state === "Disabled" ? 'opacity-60' : ''} ${width ? 'm-auto' : ''} `} alt="My Image" width={24} height={24} />
          }
          <span>{text}</span>
        </button>
      )}
      {iconSvg && text && icon === "Icon Right" && (
        <button
          className={`rounded-[100px] inline-flex items-center py-2 px-8 text-white-100 font-SFProMedium ${btnClass} ${width ? 'w-full' : ''}`}
          onClick={handleClick}
        >
          <span>{text}</span>
          {
            size === "Small" && <Image src={iconSvg} className={`ml-2 svg-color-filter ${state === "Disabled" ? 'opacity-60' : ''} ${width ? 'm-auto' : ''} `} alt="My Image" width={16} height={16} />
          }
          {
            size === "Normal" && <Image src={iconSvg} className={`ml-3 svg-color-filter ${state === "Disabled" ? 'opacity-60' : ''} ${width ? 'm-auto' : ''} `} alt="My Image" width={20} height={20} />
          }
          {
            size === "Large" && <Image src={iconSvg} className={`ml-3 svg-color-filter ${state === "Disabled" ? 'opacity-60' : ''} ${width ? 'm-auto' : ''} `} alt="My Image" width={24} height={24} />
          }
        </button>
      )}
      {!iconSvg && text && (
        <button
          className={`rounded-[100px] inline-flex items-center py-2 px-8 text-white-100 font-SFProMedium ${btnClass} ${width ? 'w-full' : ''}`}
          onClick={handleClick}
        >
          <span className={width ? 'm-auto' : ''}>{text}</span>
        </button>
      )}
    </>
  );
};
export default Button;
