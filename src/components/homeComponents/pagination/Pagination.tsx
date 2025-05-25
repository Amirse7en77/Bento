import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui/Icon'; // Assuming you create this file

const Pagination: React.FC = () => {
  return (
    // Note: space-x-reverse ensures spacing works correctly for RTL.
    // The actual icons are flipped to logically represent "next" and "previous" in RTL.
    <div className="flex items-center justify-center p-4 space-x-2 space-x-reverse mt-8">
      {/* "Next" page in LTR is "Previous" in RTL layout: so we use ChevronRightIcon for next button visually */}
      <a aria-label="صفحه بعدی" className="flex size-10 items-center justify-center rounded-full text-[#0d141c] hover:bg-slate-200 transition-colors" href="#">
        <ChevronRightIcon />
      </a>
      <a aria-current="page" className="text-sm font-bold leading-normal flex size-10 items-center justify-center rounded-full text-white bg-[#0c7ff2] shadow-md" href="#">1</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full text-[#0d141c] hover:bg-slate-200 transition-colors" href="#">2</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full text-[#0d141c] hover:bg-slate-200 transition-colors" href="#">3</a>
      <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d141c]">...</span>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full text-[#0d141c] hover:bg-slate-200 transition-colors" href="#">10</a>
      {/* "Previous" page in LTR is "Next" in RTL layout: so we use ChevronLeftIcon for previous button visually */}
      <a aria-label="صفحه قبلی" className="flex size-10 items-center justify-center rounded-full text-[#0d141c] hover:bg-slate-200 transition-colors" href="#">
        <ChevronLeftIcon />
      </a>
    </div>
  );
};

export default Pagination;