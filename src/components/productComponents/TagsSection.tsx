import React from "react";

interface TagsSectionProps {
  tags: string[];
}

const TagsSection: React.FC<TagsSectionProps> = ({ tags }) => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">برچسب‌ها</h2>{" "}
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TagsSection;
