// components/homeComponents/toolCard/ToolCard.jsx (No changes needed, but included for completeness)
import React from 'react';
import headerBanner from './../../../../server/images/Gemini_Generated_Image_ao418zao418zao41.png';
import { Link } from 'react-router-dom';

interface ToolCardProps {
    name: string;
    aiReview: string;
    id: string;
    tags: string[];
}

const ToolCard: React.FC<ToolCardProps> = ({ name, aiReview, id, tags }) => {
    return (
        <div className="tool-card flex flex-col rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
            <div
                className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover "
                style={{ backgroundImage: `url("${headerBanner}")` }}
            ></div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[#0d141c] text-xl font-bold leading-snug mb-2">{name}</h3>
                <p className="text-[#49739c] text-sm font-normal leading-relaxed mb-4 flex-grow line-clamp-4">{aiReview}</p>

                {tags && tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <Link to={`/tools/${id}`}>
                    <button className="btn-primary-gradient mt-auto w-full text-white text-sm font-semibold py-2.5 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        مشاهده جزئیات
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ToolCard;