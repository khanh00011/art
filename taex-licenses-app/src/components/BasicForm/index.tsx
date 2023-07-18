import Image from "next/image";
import SearchIcon from "../../../public/icons/Search.svg";
interface BasicFormSearch {
  placeholder?: string;
  state: 'Default' | 'Hover' | 'Filled' | 'Active' | 'Error' | 'Disabled',
  icon?: boolean
  onChange?: () => void
}

const BasicForm: React.FC<BasicFormSearch> = ({placeholder, state, icon, onChange}) => {
  let className = []
  let inputPlaceholder = []
  switch (state) {
    case 'Default': {
      className.push('bg-white-20 ')
      inputPlaceholder.push('placeholder-white-100 placeholder-opacity-40')
      break;
    }
    case 'Hover': {
      className.push('bg-white-40 ')
      inputPlaceholder.push('placeholder-white-100 placeholder-opacity-60')
      break;
    }
    case 'Filled': {
      className.push('bg-white-20 ')
      inputPlaceholder.push('placeholder-white-100')
      break;
    }
    case 'Active' : {
      className.push('bg-white-20 ')
      inputPlaceholder.push('placeholder-white-100')
      break;
    }
    case 'Error' : {
      className.push('bg-primary-20 ')
      inputPlaceholder.push('placeholder-primary-100')
      break;
    }
    case 'Disabled' : {
      className.push('bg-white-10 ')
      inputPlaceholder.push('placeholder-white-20')
      break;
    }
  }
  const classNameText = className.join(' ');
  const inputPlaceholderText = inputPlaceholder.join(' ')
  return (
    <div className={`relative flex gap-[13px] px-4 py-2 rounded-[24px] ${classNameText}`}>
      {
        icon && (
          <Image
          className={`inset-input-icon ${state === 'Disabled' ? 'opacity-10' : ''} `}
          src={SearchIcon}
          alt="icon"
        />
        )
      }
      <input
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        className={`border-[0px] bg-transparent outline-none text-white-100 text-base font-medium ${inputPlaceholderText}`}
      />
    </div>
  );
};

export default BasicForm
