import React from 'react';
import { FiExternalLink } from "react-icons/fi";

interface ActionButtonsProps {
  visitUrl: string;
  likesCount: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ visitUrl }) => {

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          href={visitUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-icons text-lg"><FiExternalLink /></span>
          بازدید از وب‌سایت
        </a> {/* Visit Website */}
        
      </div>
    </div>
  );
};

export default ActionButtons;