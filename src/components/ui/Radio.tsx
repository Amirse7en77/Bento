import React from 'react';

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  name: string; // `name` is required for radio groups
}

const Radio: React.FC<RadioProps> = ({ label, name, id, ...props }) => {
  const uniqueId = id || `radio-${name}-${label.replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label htmlFor={uniqueId} className="flex items-center gap-3 rounded-lg border border-solid border-[#cedbe8] p-3 cursor-pointer hover:border-[#0c7ff2] transition-colors">
      <input
        id={uniqueId}
        type="radio"
        name={name}
        className="radio-custom h-5 w-5 border-2 border-[#cedbe8] bg-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 ml-3"
        {...props}
      />
      <p className="text-[#0d141c] text-sm font-medium leading-normal">{label}</p>
    </label>
  );
};

export default Radio;