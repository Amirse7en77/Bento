import React, { useState } from 'react';
import Checkbox from '../../ui/CheckBox';
import Radio from '../../ui/Radio';
import Select from '../../ui/Select';
import { useDispatch } from 'react-redux';
import { closeDrawer } from '@/slice/servicesSlice';
import { useProductFilter } from '@/hooks/useProductFilter';

export interface productFilter{
 
  feature:'یک پارچه سازی'|'API'|'قالب ها'|'تجزیه وتحلیل',
  category:'تولید تصویر'|'تحلیل متن'|'ویرایش ویدیو'|'تجسم داده ها',
  price:'همه'|'رایگان'|'پولی'|'پریمیوم',
  sort:'محبوب ترین ها'|'جدید ترین ها'|'حروف الفبا'
}

export interface searchFilter{
  search:string
}

const Sidebar: React.FC = () => {

 const dispatch=useDispatch()
  const handleFilter=()=>{
    dispatch(closeDrawer())
   
  }
 const{feature,category,price,sort,setFilters}=useProductFilter()
console.log(feature)
  return (
    <aside className="filter-sidebar w-80 shrink-0 p-6 space-y-6 sticky top-[calc(64px+1rem)] h-[calc(100vh-64px-2rem)] overflow-y-auto ">
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
      <div>
        <button onClick={handleFilter} className='btn-primary-gradient p-2 rounded-2xl text-white cursor-pointer'>
          اعمال  فیلتر ها
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;