import Image from "next/image";
import SearchdIcon from "../../../public/icons/Search.svg";
import SearchdIconDisable from "../../../public/icons/SearchDisable.svg";
interface BasicForm {
  noBoderLeft?: boolean;
  search?: boolean;
  error?: boolean;
  disable?: boolean;
  placeholder?: string;
  id?: string;
}

export const BasicForm: React.FC<BasicForm> = ({
  search,
  error,
  disable,
  noBoderLeft,
  placeholder,
  id
}) => {
  return (
    <div className="relative">
      {search && (
        <Image
          className="absolute z-10 inset-input-icon"
          src={disable ? SearchdIconDisable : SearchdIcon}
          alt="icon"
        />
      )}
      <input
        disabled={disable}
        className={
          noBoderLeft
            ? error
              ? `input-error px-4 rounded-r-3xl`
              : disable
                ? `input-disable px-4 rounded-r-3xl`
                : `input-basic px-4 rounded-r-3xl`
            : search
              ? error
                ? `input-error px-12 rounded-3xl`
                : disable
                  ? `input-disable px-12 rounded-3xl`
                  : `input-basic px-12 rounded-3xl`
              : error
                ? `input-error px-4 rounded-3xl`
                : disable
                  ? `input-disable px-4 rounded-3xl`
                  : `input-basic px-4 rounded-3xl`
        }
        placeholder={placeholder}
        id={id}
        type="text"
      />
    </div>
  );
};
