import React from 'react';
import Checkbox from '../../ui/CheckBox';
import Radio from '../../ui/Radio';
import Select from '../../ui/Select';

const Sidebar: React.FC = () => {
  return (
    <aside className="filter-sidebar w-80 shrink-0 p-6 space-y-6 sticky top-[calc(64px+1rem)] h-[calc(100vh-64px-2rem)] overflow-y-auto hidden md:block">
      <div>
        <h3 className="filter-title text-lg font-semibold">فیلترها</h3>
      </div>
      <div>
        <h4 className="text-[#49739c] text-sm font-semibold leading-normal tracking-[0.015em] mb-3">ویژگی‌ها</h4>
        <div className="space-y-2">
          <Checkbox label="یکپارچه‌سازی" />
          <Checkbox label="API" />
          <Checkbox label="قالب‌ها" />
          <Checkbox label="تجزیه و تحلیل" />
        </div>
      </div>
      <div>
        <h4 className="text-[#49739c] text-sm font-semibold leading-normal tracking-[0.015em] mb-3">دسته‌بندی</h4>
        <div className="space-y-2">
          <Checkbox label="تولید تصویر" />
          <Checkbox label="تحلیل متن" />
          <Checkbox label="ویرایش ویدئو" />
          <Checkbox label="تجسم داده‌ها" />
        </div>
      </div>
      <div>
        <h4 className="text-[#49739c] text-sm font-semibold leading-normal tracking-[0.015em] mb-3">قیمت</h4>
        <div className="space-y-2.5">
          <Radio name="price_filter" label="رایگان" defaultChecked />
          <Radio name="price_filter" label="پولی" />
          <Radio name="price_filter" label="پرمیوم" />
        </div>
      </div>
      <div>
        <h4 className="text-[#49739c] text-sm font-semibold leading-normal tracking-[0.015em] mb-3">مرتب‌سازی بر اساس</h4>
        <Select
          options={[
            { value: 'popular', label: 'محبوب‌ترین' },
            { value: 'newest', label: 'جدیدترین' },
            { value: 'alphabetical', label: 'حروف الفبا' },
          ]}
          defaultValue="popular"
        />
      </div>
    </aside>
  );
};

export default Sidebar;