import React from "react";

// Common props for SVG icons
interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  size?: string; // e.g., "20px", "1em"
  weight?: string; // Not used in these specific SVGs, but good for consistency if other icons use it
}

export const SearchIcon: React.FC<SvgIconProps> = ({
  size = "20px",
  ...props
}) => (
  <svg
    fill="currentColor"
    height={size}
    viewBox="0 0 256 256"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
  </svg>
);

export const ChevronLeftIcon: React.FC<SvgIconProps> = ({
  size = "18px",
  ...props
}) => (
  <svg
    fill="currentColor"
    height={size}
    viewBox="0 0 256 256"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
  </svg>
);

export const ChevronRightIcon: React.FC<SvgIconProps> = ({
  size = "18px",
  ...props
}) => (
  <svg
    fill="currentColor"
    height={size}
    viewBox="0 0 256 256"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
  </svg>
);
