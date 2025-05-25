import React from 'react';

interface ToolCardProps {
  image: string;
  title: string;
  description: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ image, title, description }) => {
  return (
    <div className="tool-card flex flex-col rounded-xl overflow-hidden bg-white shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-[#0d141c] text-lg font-semibold leading-snug mb-1">{title}</h3>
        <p className="text-[#49739c] text-sm font-normal leading-relaxed mb-4 flex-grow">{description}</p>
        <button className="btn-primary-gradient mt-auto w-full text-white text-sm font-semibold py-2.5 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
          مشاهده جزئیات
        </button>
      </div>
    </div>
  );
};

export default ToolCard;