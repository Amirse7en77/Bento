import React from "react";

const categories = ["تولید تصویر", "تحلیل متن", "ویرایش ویدئو"];

const CategoryTags: React.FC = () => {
  return (
    <div className="flex gap-4 p-4 flex-wrap justify-center my-6">
      {categories.map((category) => (
        <button
          key={category}
          className="category-tag flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-5 text-white text-sm font-medium leading-normal shadow-md btn-primary-gradient dark:bg-sky-600"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTags;
