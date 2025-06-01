import React from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select
      className="form-select w-full rounded-lg border border-[#cedbe8] bg-slate-50 py-2.5 px-3 text-sm text-[#0d141c] focus:border-[#0c7ff2] focus:ring-1 focus:ring-[#0c7ff2] bg-[image:var(--select-button-svg)] appearance-none"
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
