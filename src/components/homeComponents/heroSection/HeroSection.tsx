import React, { useState } from 'react';
import { SearchIcon } from '../../ui/Icon';
import CategoryTags from '../categoryTags/CategoryTags';
import { useProductFilter } from '@/hooks/useProductFilter';

const HeroSection: React.FC = () => {
  const [searchFilter, setSearchFilter] = useState('');
  console.log(searchFilter);
  const { search, setSearch } = useProductFilter(); // Destructure setSearch
  const handleSearch=()=>{
    setSearch(searchFilter)
    setSearchFilter('')
  }

  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div className="gradient-hero flex min-h-[400px] @[480px]:min-h-[480px] flex-col gap-6 @[480px]:gap-8 rounded-xl items-center justify-center p-6 text-center shadow-xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-tight">
              بهترین ابزارهای هوش مصنوعی را فوراً کشف کنید
            </h1>
            <h2 className="text-slate-200 text-base font-normal leading-relaxed @[480px]:text-lg @[480px]:font-normal @[480px]:leading-relaxed max-w-2xl mx-auto">
              مجموعه‌ای منتخب از ابزارهای مبتنی بر هوش مصنوعی را برای افزایش بهره‌وری و خلاقیت خود کاوش کنید.
            </h2>
          </div>
          <label className="flex flex-col min-w-40 h-14 w-full max-w-xl @[480px]:h-16 shadow-lg">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
              <div className="text-[#49739c] flex bg-slate-50 items-center justify-center pr-4">
                <SearchIcon size="20px" />
              </div>
              <input
                value={searchFilter}
                type="text"
                className="form-input flex w-full min-w-0 overflow-hidden text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-slate-50 h-full placeholder:text-[#6b7f99] px-4 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                placeholder="ابزارهایی مانند «ویرایشگر تصویر» یا «دستیار کدنویسی» را جستجو کنید..."
                onChange={(e) => setSearchFilter(e.target.value)}
              />
              {/* Change this line */}
              <button onClick={handleSearch} className="btn-primary-gradient flex min-w-[100px] @[480px]:min-w-[120px] cursor-pointer items-center justify-center h-full px-5 @[480px]:px-6 text-slate-50 text-sm font-semibold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-semibold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-all duration-300">
                <span className="truncate">جستجو</span>
              </button>
            </div>
          </label>
          <CategoryTags />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;