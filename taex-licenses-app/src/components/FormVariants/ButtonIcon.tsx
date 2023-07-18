import Image from "next/image";
interface ButtonIconProps {
    icon?: any
}

export const ButtonIcon :React.FC<ButtonIconProps> = ({icon}) => {
  return (
    <button type="button" className="p-2 text-gray-500 rounded cursor-pointer">
      <Image src={icon} alt={`${icon}`}></Image>
    </button>
  );
};
