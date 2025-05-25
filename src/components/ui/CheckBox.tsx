import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, ...props }) => {
  // Generate a unique ID if not provided, useful for linking label to input
  const uniqueId = id || `checkbox-${label.replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label htmlFor={uniqueId} className="flex items-center gap-x-3 py-1.5 cursor-pointer">
      <input
        id={uniqueId}
        type="checkbox"
        className="checkbox-custom h-5 w-5 rounded border-[#cedbe8] border-2 bg-transparent text-[#0c7ff2] focus:ring-0 focus:ring-offset-0 focus:border-[#0c7ff2] ml-3"
        {...props}
      />
      <p className="text-[#0d141c] text-sm font-normal leading-normal">{label}</p>
    </label>
  );
};

export default Checkbox;