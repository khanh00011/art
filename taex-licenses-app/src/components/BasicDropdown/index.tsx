import React, { useState } from 'react';
import Select from 'react-select';
import { placeholderCSS } from 'react-select/dist/declarations/src/components/Placeholder';

interface basicDropdownProps {
  options: {
    value: string;
    label: string;
  }[],
  state: 'Default' | 'Hover' | 'Filled' | 'Active' | 'Error' | 'Disable' | 'FormVariants',
  placeholder: string
  borderLeft?: boolean,
  filter?: boolean,
  setWidth?: number
}

const BasicDropdown = (props: basicDropdownProps) => {
  const { options, state, placeholder, borderLeft, filter, setWidth } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (option: any) => {
    setSelectedOption(option);
  };
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      padding: "2px 6px",
      backgroundColor:
        state === "Default" ? 'rgba(255, 255, 255, 0.2)'
          : state === "Hover" ? 'rgba(255, 255, 255, 0.2)'
            : state === "Filled" ? 'rgba(255, 255, 255, 0.2)'
              : state === "FormVariants" ? 'rgba(255, 255, 255, 0.1)'
                : state === "Active" ? 'rgba(255, 255, 255,0.2)'
                  : state === "Error" ? 'rgba(254, 61, 45, 0.2)'
                    : 'rgba(255, 255, 255, 0.1)',
      borderRadius: borderLeft ? "24px 0px 0px 24px" : "24px",
      border: "0px",
      '&:hover': { backgroundColor: '#666666' },
      boxShadow: 'none',
      display: 'flex',
      fontSize: "16px",
      fontWeight: '500',
      color: '#ffffff',
      width: setWidth ? `${setWidth.toString()}px` : 'unset',
    }),
    option: (provided: any) => ({
      ...provided,
      fontSize: '16px'
    }),
    input: (provided: any) => ({
      ...provided,
      color: state === "Default" ? 'rgba(255, 255, 255, 0.4)'
        : state === "Hover" ? 'rgba(255, 255, 255, 0.6)'
          : state === "Filled" ? 'rgba(255, 255, 255, 1)'
            : state === "FormVariants" ? 'rgba(255, 255, 255, 1)'
              : state === "Active" ? 'rgba(255, 255, 255,1)'
                : state === "Error" ? '#FE3D2D'
                  : 'rgba(255, 255, 255, 0.2)',
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color:
        state === "Default" ? 'rgba(255, 255, 255, 0.4)'
          : state === "Hover" ? 'rgba(255, 255, 255, 0.6)'
            : state === "Filled" ? 'rgba(255, 255, 255, 1)'
              : state === "Active" ? 'rgba(255, 255, 255,1)'
                : state === "FormVariants" ? 'rgba(255, 255, 255, 1)'
                  : state === "Error" ? '#FE3D2D'
                    : 'rgba(255, 255, 255, 0.2)',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: state === "Default" ? 'rgba(255, 255, 255, 1)'
        : state === "Hover" ? 'rgba(255, 255, 255, 0.6)'
          : state === "Filled" ? 'rgba(255, 255, 255, 1)'
            : state === "FormVariants" ? 'rgba(255, 255, 255,1)'
              : state === "Active" ? 'rgba(255, 255, 255,1)'
                : state === "Error" ? '#FE3D2D'
                  : 'rgba(255, 255, 255, 0.2)',
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: '8px 8px 8px 0px'
    }),
  };
  return (
    <div className="text-white">
      <Select
        value={selectedOption}
        placeholder={placeholder}
        onChange={handleChange}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}
export default BasicDropdown;