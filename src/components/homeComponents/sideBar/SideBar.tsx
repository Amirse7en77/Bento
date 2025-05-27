import React, { useState } from 'react';
import Checkbox from '../../ui/CheckBox';
import Radio from '../../ui/Radio';
import Select from '../../ui/Select';
import { useDispatch } from 'react-redux';
import { closeDrawer } from '@/slice/servicesSlice';
import { useProductFilter } from '@/hooks/useProductFilter';
import { SearchIcon } from '@/components/ui/Icon';

export interface productFilter{
 searchFilter:string|null
  feature:'یک پارچه سازی'|'API'|'قالب ها'|'تجزیه وتحلیل',
  category:'تولید تصویر'|'تحلیل متن'|'ویرایش ویدیو'|'تجسم داده ها',
  price:'همه'|'رایگان'|'پولی'|'پریمیوم',
  sort:'محبوب ترین ها'|'جدید ترین ها'|'حروف الفبا'
}



const Sidebar: React.FC = () => {


 const{searchFilter,feature,category,price,sort,setFilters}=useProductFilter()
const [searchQuery,setSearchQuery]=useState('')
  return (
    <aside className="filter-sidebar w-80 shrink-0 p-6 space-y-6 sticky top-[calc(64px+1rem)] h-[calc(100vh-64px-2rem)] overflow-y-auto ">
     <label className="relative flex items-center min-w-40 !h-10 max-w-64">
               <div className="text-[#49739c] absolute right-3 top-1/2 -translate-y-1/2">
                 <SearchIcon size="20px" />
               </div>
               <input
               value={searchFilter}
                 className="form-input w-full rounded-lg border border-slate-300 bg-slate-100 py-2 pr-10 pl-4 text-sm text-[#0d141c] placeholder:text-[#49739c] focus:border-[#0c7ff2] focus:ring-1 focus:ring-[#0c7ff2]"
                 placeholder="جستجوی ابزارها..."
                 defaultValue=""
                 onChange={(e)=>setFilters({searchFilter:e.target.value})}
                 
               />
              
             </label>
      <div>
        <h3 className="filter-title text-lg font-semibold">فیلترها</h3>
      </div>
      <div>
        <h4 className="text-[#49739c] text-sm font-semibold leading-normal tracking-[0.015em] mb-3">ویژگی‌ها</h4>
        <div className="space-y-2">
           <Radio
            name="feature-filter"
            label='یک پارچه سازی'
            value='یک پارچه سازی'
            checked={feature === 'یک پارچه سازی'}
            onChange={(e) => setFilters({ feature: e.target.value })}
          />
          <Radio
            name="feature-filter"
            label='API'
            value='API'
            checked={feature === 'API'}
            onChange={(e) => setFilters({ feature: e.target.value })}
          />
         <Radio
            name="feature-filter"
            label='قالب ها'
            value='قالب ها'
            checked={feature === 'قالب ها'}
            onChange={(e) => setFilters({ feature: e.target.value })}
          />
         <Radio
            name="feature-filter"
            label='تجزیه وتحلیل'
            value='تجزیه وتحلیل'
            checked={feature ==='تجزیه وتحلیل'}
            onChange={(e) => setFilters({ feature: e.target.value })}
          />
        </div>
      </div>
      <div>
        <h4 className="text-[#49739c] text-sm font-semibold leading-normal tracking-[0.015em] mb-3">دسته‌بندی</h4>
        <div className="space-y-2">
            <Radio
            name="category_filter"
            label="تولید تصویر"
            value="تولید تصویر"
            checked={category === "تولید تصویر"}
            onChange={(e) => setFilters({ category: e.target.value })}
          />
          <Radio
            name="category_filter"
            label="تحلیل متن"
            value="تحلیل متن"
            checked={category === "تحلیل متن"}
            onChange={(e) => setFilters({ category: e.target.value })}
          />
          <Radio
            name="category_filter"
            label="ویرایش ویدیو"
            value="ویرایش ویدیو"
            checked={category === "ویرایش ویدیو"}
            onChange={(e) => setFilters({ category: e.target.value })}
          />
          <Radio
            name="category_filter"
            label="تجسم داده‌ها"
            value="تجسم داده ها"
            checked={category === "تجسم داده ها"}
            onChange={(e) => setFilters({ category: e.target.value })}
          />
        </div>
      </div>
      <div>
        <h4 className="text-[#49739c] text-sm font-semibold leading-normal tracking-[0.015em] mb-3">قیمت</h4>
        <div className="space-y-2.5">
           <Radio
            name="price_filter"
            label="همه"
            value="همه"
            checked={price === "همه"}
            onChange={(e) => setFilters({ price: e.target.value })}
          />
          <Radio
            name="price_filter"
            label="رایگان"
            value="رایگان"
            checked={price === "رایگان"}
            onChange={(e) => setFilters({ price: e.target.value })}
          />
          <Radio
            name="price_filter"
            label="پولی"
            value="پولی"
            checked={price === "پولی"}
            onChange={(e) => setFilters({ price: e.target.value })}
          />
          <Radio
            name="price_filter"
            label="پرمیوم"
            value="پریمیوم" // Corrected value to match interface
            checked={price === "پریمیوم"}
            onChange={(e) => setFilters({ price: e.target.value })}
          />
        </div>
      </div>
      <div>
        <h4 className="text-[#49739c] text-sm font-semibold leading-normal tracking-[0.015em] mb-3">مرتب‌سازی بر اساس</h4>
          <Select
          options={[
            { value: "محبوب ترین ها", label: "محبوب‌ترین" }, // Values match interface
            { value: "جدید ترین ها", label: "جدیدترین" },
            { value: "حروف الفبا", label: "حروف الفبا" },
          ]}
          defaultValue="محبوب ترین ها" // Default value should match one of the option values
          value={sort || "محبوب ترین ها"} // Use sort from hook, or default if null/undefined
          onChange={(e) => setFilters({ sort: e.target.value })}
        />
      </div>
      
    </aside>
  );
};

export default Sidebar;