interface LicenseAttributesItemsProps {
  title: string;
  value: string;
}

export const LicenseAttributesItems :React.FC<LicenseAttributesItemsProps> = ({title, value}) => {
  return (
    <div className="flex justify-between text-sm text-white-60 pb-2 flex-nowrap">
      <p className="min-w-[85px] text-left">{title}</p>
      <p className="max-w-[150px] text-right font-SFProSemi">{value}</p>
    </div>
  );
};
