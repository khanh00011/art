import Image from "next/image";
import SearchdIcon from "../../../public/icons/Search.svg";
import Emoji from "../../../public/icons/Emoji.svg";
import Bold from "../../../public/icons/Bold.svg";
import Italic from "../../../public/icons/Italic.svg";
import NumberList from "../../../public/icons/Number List.svg";
import List from "../../../public/icons/List.svg";
import Link from "../../../public/icons/Link.svg";
import { BasicFormSearch } from "../BasicFormSearch/BasicFormSearch";
import { ButtonIcon } from "./ButtonIcon";
import Button from "../Button";
import BasicDropdown from "../BasicDropdown";

interface FormVariants {
  search?: boolean;
  error?: boolean;
  disable?: boolean;
}

export const FormVariants: React.FC<FormVariants> = () => {
  return (
    <form className="flex justify-center flex-col w-608 p-10 bg-black-100 rounded-3xl">
      <div className="pb-5">
        <label className="block text-white-80 pb-2">Label</label>
        <BasicFormSearch placeholder="Input Caption" />
      </div>
      <div className="pb-5 w-full">
        <label className="block text-white-80 pb-2">Label</label>
        <div className="flex">
          <div className="w-[99px]">
            <BasicDropdown
              options={[{
                value: "1",
                label: "Opt",
              }]}
              state={"FormVariants"}
              placeholder={"Option"}
              borderLeft
            />
          </div>
          <div className="w-435">
            <BasicFormSearch placeholder="Input Caption" noBoderLeft />
          </div>
        </div>
      </div>
      <div className="pb-5">
        <label className="block text-white-80 pb-2">Label</label>
        <BasicFormSearch placeholder="Input Caption" />
      </div>
      <div className="pb-5">
        <label className="block text-white-80 pb-2">Label</label>
        <BasicDropdown
          options={[
            {
              value: "1",
              label: "Option",
            },
          ]}
          state={"Default"}
          placeholder={""}
        />
      </div>

      <div className="pb-5 relative">
        <div className="absolute top-[2.75px] right-0.5 z-10">
          <Button
            size={"Normal"}
            state={"Default"}
            iconSvg={SearchdIcon}
            style={"Fill"}
          ></Button>
        </div>
        <BasicFormSearch placeholder="Input Caption" />
      </div>
      <div>
        <label className="block text-white-80 pb-2">Label</label>
        <div>
          <textarea
            id="editor"
            rows={4}
            className="block rounded-t-3xl px-4 resize-none input-basic border-2 border-white-40"
            placeholder="Input Caption"
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 border-2 border-white-20 border-t-0 rounded-b-3xl">
          <div className="flex items-center">
            <ButtonIcon icon={Emoji} />
            <ButtonIcon icon={Bold} />
            <ButtonIcon icon={Italic} />
            <ButtonIcon icon={List} />
            <ButtonIcon icon={NumberList} />
            <ButtonIcon icon={Link} />
          </div>
        </div>
      </div>
    </form>
  );
};
