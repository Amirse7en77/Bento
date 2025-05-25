import React from 'react';

interface ActionButtonsProps {
  visitUrl: string;
  likesCount: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ visitUrl, likesCount }) => {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          href={visitUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-icons text-lg">link</span>
          بازدید از وب‌سایت
        </a> {/* Visit Website */}
        <button className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
          <span className="material-icons text-lg text-red-500">favorite_border</span>
          پسندیدن
          <span className="mr-1 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700">
            {likesCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;